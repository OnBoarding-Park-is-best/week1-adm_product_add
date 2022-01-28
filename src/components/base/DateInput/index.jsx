import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, DateTimePicker } from '@mui/lab/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TextField } from '@mui/material';

function DateInput({ today, date, withTime, onChange }) {
  const DateName = withTime ? DateTimePicker : DatePicker;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateName
        components={{
          OpenPickerIcon: KeyboardArrowDownIcon,
        }}
        value={date}
        mask={withTime ? '____.__.__ __:__' : '____.__.__'}
        label={withTime ? 'YYYY.MM.DD YY:MM' : 'YYYY.MM.DD'}
        inputFormat={withTime ? 'yyyy.MM.dd hh:mm' : 'yyyy.MM.dd'}
        minDate={today && new Date()}
        clearable
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DateInput;
