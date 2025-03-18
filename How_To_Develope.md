## 프로젝트 준비 및 생성

## 웹페이지 경로 설정 

## 페이지 레이아웃 작성

## 버튼 & 메세지 활성화 여부 설정

## 로그인 & 회원가입 버튼 디자인 & 기능 구현

## 구분선 생성

## SNS 로그인 버튼 디자인 & 기능 구현

## 아이디 & 비밀번호 입력 시 이벤트 구현

## 로그인 & 회원가입 페이지 생성

## 회원가입 버튼 클릭 시 페이지 전환

## 비밀번호 변경 & 확인 이벤트 설정

## DaumPostCode 주소 검색 팝업 & 완료 설정

## 아이디 중복 확인 기능 구현

## 화원가입 조건 할당 및 활성화 여부 구현

## 공통 레이아웃 & 탑 바 생성

## 드롭다운 메뉴 생성 & On/Off 설정

## 회원 가입 시 Response 처리 설정

## 로그인 시 Response 처리 & API 요청 설정

## 로그인 적용 여부에 따른 페이지 리다이렉트 설정

## SNS 버튼 클릭 시 SNS 계정으로 로그인 설정

## SNS 계정으로 회원가입 설정

## 탑 바 설정
1. Layout/index.ts에 내비게이터 함수 생성 후 event handler로 클릭 이벤트를 처리한 뒤 onClick으로 각 컴포넌트에 할당
2. useCookies로 쿠키를 불러온 뒤 onSignOutClickHandler로 로그아웃 이벤트를 처리한 뒤 onClick으로 로그아웃 기능 할당, 이후 useEffect로 cookie의 accessToken이 변경될 시 실행할 함수 작성
3. .env에서 REACT_APP_API_DOMAIN 주소를 'http://localhost:4000'로 변경
4. apis/index.ts의 URL 상수에 SNS 로그인을 위한 URL 상수 생성, 이후 SignIn/index.tsx와 SignUp/index.tsx의 SNS 로그인 버튼 클릭 이벤트 처리 코드에 URL 상수 할당

## 일기 작성 기능 추가
1. dto/request 폴더 아래에 diary 폴더 생성 후 index.ts 와 post-diary.request.dto.ts 생성
2. aliases 폴더에 weather.alias.ts 와 feeling.alias.ts 생성 후 해당 폴더의 index.ts에 추가한 뒤 post-diary.request.dto.ts 에서 weather와 feeling의 값을 각각 Weather와 Feeling으로 변경. 이후 request/diary 폴더의 index.ts의 export type을 PostDiaryRequestDto로 변경
3. apis 폴더의 index.ts에 URL 상수에 DIARY_MODULE_URL과 POST_DIARY_URL을 추가하고 post diary API 요청 함수와 Authorization Bearer 헤더를 추가

## 일기 열람 기능 추가
1. interface 폴더에 diary.interface.ts 파일 생성 후 같은 위치의 index.ts 파일 생성 후 임포트
2. response 폴더 아래에 diary 폴더 생성 후 index.ts, get-my-diary.response.dto.ts 파일을 생성하고, get-my-diary.response.dto.ts을 같은 위치의 index.ts에 임포트
3. apis 폴더의 index.ts에 GET_MY_DIARY_URL URL 상수 추가 후 get my diary API 요청 함수 추가
4. response/diary 폴더에 get-diary.response.dto.ts 파일 작성 후 같은 폴더의 index.ts에 임포트
5. apis 폴더의 index.ts에 get diary API 요청 함수 추가

## 일기 수정 & 삭제 기능 추가
1. request/diary 폴더에 patch-diary.request.dto.ts 파일 생성 후 같은 위치의 index.ts 파일 생성 후 임포트
2. apis 폴더의 index.ts에 PATCH_DIARY_URL URL 상수 추가 후 patch diary API 요청 함수 추가
3. 이후 똑같은 파일에 DELETE_DIARY_URL URL 상수 추가 후 delete diary API 요청 함수 추가

## 일기 페이지 생성
1. views 폴더 아래에 Diary 폴더 생성 후 index.tsx, style.css 파일 생성
2. index.tsx에서 일기 메인화면(DiaryMain) 컴포넌트를 생성 후 App.css에 DiaryMain으로 페이지 경로를 설정
3. style.css에서 index.tsx에서 설정한 컴포넌트들의 스타일을 지정
4. 내비게이터 함수 설정 후 onWriteButtonClickHandler 이벤트 처리 생성 후 '작성하기' 버튼에 onClick 이벤트 설정