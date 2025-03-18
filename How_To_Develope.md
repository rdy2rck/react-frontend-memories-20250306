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