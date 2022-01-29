import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, DateTimePicker } from '@mui/lab/';
import { TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function DateInput({ name, today, minTime, date, withTime, onChange }) {
  const DateName = withTime ? DateTimePicker : DatePicker;

  const dateHandler = useCallback(
    (newDate) => {
      onChange(name, newDate);
    },
    [onChange, name],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateName
        id={name}
        components={{
          OpenPickerIcon: KeyboardArrowDownIcon,
        }}
        value={date}
        mask={withTime ? '____.__.__ __:__' : '____.__.__'}
        label={withTime ? 'YYYY.MM.DD YY:MM' : 'YYYY.MM.DD'}
        placeholder={withTime ? 'YYYY.MM.DD YY:MM' : 'YYYY.MM.DD'}
        inputFormat={withTime ? 'yyyy.MM.dd hh:mm' : 'yyyy.MM.dd'}
        minDate={today && new Date()}
        minDateTime={minTime}
        clearable
        onChange={dateHandler}
        renderInput={(params) => {
          return <TextField {...params} />;
        }}
      />
    </LocalizationProvider>
  );
}

DateInput.propTypes = {
  today: PropTypes.bool,
  withTime: PropTypes.bool,
  date: PropTypes.object,
};

export default DateInput;
