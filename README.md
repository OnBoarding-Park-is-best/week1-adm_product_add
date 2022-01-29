<h1>원티드 프리온보딩 코스 1주차 기업과제<br />
상품 등록 어드민 페이지 📈</h1>

## 🚀 배포
🔗 **과제물**(netlify): https://goofy-blackwell-3b8f34.netlify.app

<br>

## 🧑‍🤝‍🧑 팀 소개
### 저희는 Team **박이최고** 입니다.
팀원들의 성을 차례로 읽어보세요!
|                                                            	| 팀원                                                	| 역할                	|
|------------------------------------------------------------	|-----------------------------------------------------	|---------------------	|
| ![](https://avatars.githubusercontent.com/u/77766769?s=25) 	| 박정훈 [@Junghoon-P](https://github.com/Junghoon-P) 	| (팀장) 상품 카테고리 선택 컴포넌트, 필터 태그 검색 컴포넌트 / Button 컴포넌트 |
| ![](https://avatars.githubusercontent.com/u/71081893?s=25) 	| 이소진 [@krungy](https://github.com/krungy)         	| 상품 정보 고시 컴포넌트, 이미지 업로드 컴포넌트 / Input, Toggle, Icon 컴포넌트 |
| ![](https://avatars.githubusercontent.com/u/57004991?s=25) 	| 최효정 [@hyo-choi](https://github.com/hyo-choi)     	| 상품 옵션 컴포넌트, 페이지 레이아웃 구성, 네비게이션 바 / Content title, Content container 컴포넌트 |
| ![](https://avatars.githubusercontent.com/u/68905615?s=25) 	| 고동현 [@brad-go](https://github.com/brad-go)       	| 상품 노출 및 판매, 배송, 혜택과 기타 설정 컴포넌트 / CheckBox, Radio, Date 컴포넌트 |

<br>

## 🪄 프로젝트 실행 방법
1. git clone하여 프로젝트를 내려받습니다.
    ```bash
    git clone https://github.com/OnBoarding-Park-is-best/week1-adm_product_add.git
    ```
2. 아래 커맨드로 패키지를 설치합니다.
    ```bash
    yarn install
    ```
3. 아래 커맨드로 프로젝트를 실행합니다.
    ```bash
    yarn start
    ```

<br>

## 🧰 기술 스택 및 구현 사항
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

### 전체 구현사항
- 상품등록 어드민 페이지를 구현합니다.

### 노출 및 판매기간 설정
- [x] 

### 📝 상품 기본 정보_박정훈
#### 카테고리
- [x] 체크박스 선택을 통해 해당 상품에 카테고리를 지정할 수 있음
- [x] 체크박스 지정 해제 또는 선택된 카테고리 X 버튼을 통해 카테 고리 지정을 해제할 수 있음
- [x] 복수의 카테고리 지정 가능

#### 필터태그
- [x] 필터태그 검색창 포커스시, 필터태그에 등록되어 있는 모든 필터 태그가 제공
- [x] 필터태그 검색 시, ‘자’를 기준 텍스트 일치값순으로 검색결과 제공
- [x] 검색 결과가 없는 경우 ‘검색 결과 없음’ 안내
- [x] 검색한 필터태그 TAP시, 해당 필터태그 지정됨
- [x] 지정된 태그는 검색창 아래에 표시
- [x] 지정된 태그 [X] 버튼 TAP시, 지정해제됨


### 상품 옵션
- [x] 

### 상품 소개 이미지 & 구매자 추천 이미지
- [x] 

### 상품 정보 고시
- [x] 

### 상품 배송 설정
- [x] 

### 상품 혜택 허용 설정 & 기타 설정
- [x] 

<br>

## 📂 디렉토리 구조

```bash
.
├── assets
├── class
├── components
│   ├── base
│   │   ├── Button
│   │   ├── CheckBox
│   │   ├── ContentContainer
│   │   ├── ContentItem
│   │   ├── DateInput
│   │   ├── Icon
│   │   ├── Input
│   │   ├── RadioBox
│   │   ├── Toggle
│   │   └── Upload
│   └── domain
│       ├── Benefit
│       ├── Delivery
│       │   ├── DateInputContainer
│       │   └── DeliveryAlert
│       ├── ImageUploadContainer
│       ├── ImageUploadSection
│       ├── Layout
│       │   ├── NavBar
│       │   └── NavButton
│       ├── OptionSelector
│       │   ├── AdditionalItem
│       │   ├── OptionItem
│       │   └── ProductItem
│       ├── Others
│       ├── Period
│       │   └── RadioList
│       ├── ProductBaseInfo
│       │   ├── FIlterTag
│       │   └── SelectedTags
│       └── ProductInformationNotice
│           └── InformationContentContainer
├── hooks
├── styles
└── utils
```
