### 프로젝트 준비 및 생성

### 웹페이지 경로 설정 

### 페이지 레이아웃 작성

### 버튼 & 메세지 활성화 여부 설정

### 로그인 & 회원가입 버튼 디자인 & 기능 구현

### 구분선 생성

### SNS 로그인 버튼 디자인 & 기능 구현

### 아이디 & 비밀번호 입력 시 이벤트 구현

### 로그인 & 회원가입 페이지 생성

### 회원가입 버튼 클릭 시 페이지 전환

### 비밀번호 변경 & 확인 이벤트 설정

### DaumPostCode 주소 검색 팝업 & 완료 설정

### 아이디 중복 확인 기능 구현

### 화원가입 조건 할당 및 활성화 여부 구현

### 공통 레이아웃 & 탑 바 생성

### 드롭다운 메뉴 생성 & On/Off 설정

### 회원 가입 시 Response 처리 설정

### 로그인 시 Response 처리 & API 요청 설정

### 로그인 적용 여부에 따른 페이지 리다이렉트 설정

### SNS 버튼 클릭 시 SNS 계정으로 로그인 설정

### SNS 계정으로 회원가입 설정

### 탑 바 설정
1. Layout/index.ts에 내비게이터 함수 생성 후 event handler로 클릭 이벤트를 처리한 뒤 onClick으로 각 컴포넌트에 할당
2. useCookies로 쿠키를 불러온 뒤 onSignOutClickHandler로 로그아웃 이벤트를 처리한 뒤 onClick으로 로그아웃 기능 할당, 이후 useEffect로 cookie의 accessToken이 변경될 시 실행할 함수 작성
3. .env에서 REACT_APP_API_DOMAIN 주소를 'http://localhost:4000'로 변경
4. apis/index.ts의 URL 상수에 SNS 로그인을 위한 URL 상수 생성, 이후 SignIn/index.tsx와 SignUp/index.tsx의 SNS 로그인 버튼 클릭 이벤트 처리 코드에 URL 상수 할당

### 일기 작성 기능 추가
1. dto/request 폴더 아래에 diary 폴더 생성 후 index.ts 와 post-diary.request.dto.ts 생성
2. aliases 폴더에 weather.alias.ts 와 feeling.alias.ts 생성 후 해당 폴더의 index.ts에 추가한 뒤 post-diary.request.dto.ts 에서 weather와 feeling의 값을 각각 Weather와 Feeling으로 변경. 이후 request/diary 폴더의 index.ts의 export type을 PostDiaryRequestDto로 변경
3. apis 폴더의 index.ts에 URL 상수에 DIARY_MODULE_URL과 POST_DIARY_URL을 추가하고 post diary API 요청 함수와 Authorization Bearer 헤더를 추가

### 일기 열람 기능 추가
1. interface 폴더에 diary.interface.ts 파일 생성 후 같은 위치의 index.ts 파일 생성 후 임포트
2. response 폴더 아래에 diary 폴더 생성 후 index.ts, get-my-diary.response.dto.ts 파일을 생성하고, get-my-diary.response.dto.ts을 같은 위치의 index.ts에 임포트
3. apis 폴더의 index.ts에 GET_MY_DIARY_URL URL 상수 추가 후 get my diary API 요청 함수 추가
4. response/diary 폴더에 get-diary.response.dto.ts 파일 작성 후 같은 폴더의 index.ts에 임포트
5. apis 폴더의 index.ts에 get diary API 요청 함수 추가

### 일기 수정 & 삭제 기능 추가
1. request/diary 폴더에 patch-diary.request.dto.ts 파일 생성 후 같은 위치의 index.ts 파일 생성 후 임포트
2. apis 폴더의 index.ts에 PATCH_DIARY_URL URL 상수 추가 후 patch diary API 요청 함수 추가
3. 이후 똑같은 파일에 DELETE_DIARY_URL URL 상수 추가 후 delete diary API 요청 함수 추가

### 일기 페이지 생성
1. views 폴더 아래에 Diary 폴더 생성 후 index.tsx, style.css 파일 생성
2. index.tsx에서 일기 메인화면(DiaryMain) 컴포넌트를 생성 후 App.css에 DiaryMain으로 페이지 경로를 설정
3. style.css에서 index.tsx에서 설정한 컴포넌트들의 스타일을 지정
4. 내비게이터 함수 설정 후 onWriteButtonClickHandler 이벤트 처리 생성 후 '작성하기' 버튼에 onClick 이벤트 설정

### 일기 테이블 작성 (2025-03-19)
1. index.tsx에 테이블을 작성하기 위한 diary-list-table 컴포넌트 생성
2. style.css에 diary-list-table 컴포넌트의 스타일 지정
3. index.tsx에서 테이블의 세부 컬럼 분류를 위한 diary-list-table의 하위 컴포넌트 "td", "tr", "th" 생성, 또한 제목 컬럼을 위한 별개의 컴포넌트 "title" 역시 생성
4. style.css에서 3번에서 생성한 컴포넌트의 스타일 지정

### 일기 테이블 보기 작성
1. 일기 테이블 레코드 컴포넌트 fuction TableItem() {~} 생성 & 렌더링, 날짜, 제목, 날씨, 행복 컬럼 생성
2. 일기 목록을 관리하는 일기 메인 화면 컴포넌트 DiaryMain 생성, 전체 일기 목록(totaList), 전체 일기 갯수(totalCount), 총 페이지 수(totalPage), 페이지 그룹 설정(totalSection), 현재 페이지 번호(currentPage), 현재 페이지에서 보이는 일기 목록(viewList) 설정
3. '전체 리스트 변경 함수'와 '뷰 리스트 변경 함수', '전체 리스트가 변경되면 실행할 함수'와 '현재 페이지가 변경되면 실행할 함수', '현재 섹션이 변경되면 실행할 함수' 작성

### 페이지 넘기기 버튼 생성 & 기능 구현
1. index.tsx에 페이지 넘기기 버튼을 구현할 컴포넌트 'pagination-container' 생성, 이후 'pagination-box', 'pagination-button left', 'pagination-button right' 등의 각종 기능을 구현하는 하위 컴포넌트 생성
2. style.css에 해당 컴포넌트들의 스타일 지정

### 페이지 관련 훅 함수 & 컴포넌트 정리
1. Diary/index.tsx 파일에서 일기 메인 화면 컴포넌트의 '페이지네이션 관련 상태', '전체 리스트 변경 함수', '뷰 리스트 변경 함수', '페이지 리스트 변경 함수', '전체 리스트가 변경되면 실행할 함수'와 '현재 페이지가 변경되면 실행할 함수', '현재 섹션이 변경되면 실행할 함수'를 hooks/pagination.hook.ts 파일 생성 후 이동
2. 이후 hooks/index.ts 파일 생성 후 hooks/pagination.hook.ts 파일 임포트
3. components/Pagination/index.tsx 파일 생성 후 Diary/index.tsx의 '페이지네이션 컴포넌트 속성' 인터페이스 작성한 뒤 '페이지 클래스', '페이지네이션 컴포넌트 렌더링'을 이 파일로 옮기기. 이후 '페이지네이션 컴포넌트', '페이지 변경 이벤트 처리', '이전 섹션 클릭 이벤트 처리', '다음 섹션 클릭 이벤트 처리'를 작성
4. 이후 components/Pagination/style.css 파일을 생성 후 Diary/style.css에 있는 pagination 관련 스타일 지정 코드들을 components/Pagination/style.css로 옮기기

### 등록한 일기를 DB 테이블에 연동(2025-03-19 14:50 커밋 참조)
1. 
2. 
3. 
4. 

### 테이블에 기분 & 날씨 아이콘 등록 & 출력
1. assets/images 폴더 안에 기분 & 날씨 아이콘 저장
3. App.css 파일에 기분 & 날씨 아이콘 기본 & 활성화 등록

### 일기 작성 페이지 생성 (2025-03-19 15:50 커밋 참조)
1. views/Diary 폴더 아래에 Write 폴더 생성 후 index.tsx & style.css 파일 생성
2. App.tsx 폴더의 일기 작성 페이지 경로에 DiaryWrite로 경로 설정
3. Diary/Write 폴더의 index.tsx에 페이지 컴포넌트 생성
4. 같은 폴더의 style.css에 컴포넌트 스타일 설정
5. index.tsx 파일에서 '@tiptap/starter-kit'와 'EditorProvider', 'FloatingMenu', 'BubbleMenu' 설치 후 임포트
6. components 폴더 아래에 TextEditor 폴더 생성 후 index.tsx 생성하여 tiptap Text Editor와 Text Editor Menu Bar 컴포넌트 생성 후 렌더링

### 날씨 & 기분 변경 기능

### 제목 수정 기능 & 작성 완료 버튼 추가

### 일기 작성 날짜 현재 날짜에 연동

### 일기 보기 페이지 생성 & 경로 설정
- Detail/index.tsx
- App.tsx
- Detail/style.css

### 일기 수정 페이지 생성 & 경로 설정
- Update/index.tsx
- App.tsx
- Update/style.css

1. 페이지 생성, 컴포넌트 스타일 설정
2. 경로 설정
3. 일기 수정 & 삭제 버튼 추가 및 활성화

### 일기 수정 페이지 일기 수정 & 삭제 버튼 추가

### 로그인 시 사용자 정보 저장

### 일기 열람 및 수정 시 사용자 권한 검사

### 기억력 검사 페이지 생성 (2025-03-20 10:50 & 11:50)
- MemoryTest/index.tsx
- App.tsx
- MemoryTest/style.css
- interfaces/memory-card.interface.ts
- interfaces/index.ts
- request/test/post-memory.request.dto.ts
- request/test/index.ts
- interfaces/memory-test.interfaces
- response/test/index.ts
- response/test/get-memory-response.dto.ts
- apis/index.ts

1. 페이지 생성, 컴포넌트 스타일 설정
2. 경로 설정
3. '검사 시작' 버튼 클릭 시 3초 간 대기 후 시간 측정 시작
4. 기억력 검사용 메모리 검사 카드 UI(뒤집힌 상태 & 펼친 상태) 생성 및 배치
5. 메모리 검사 카드 UI 클릭 시 상태 변경 & 카드 2개 까지만 선택 이벤트 생성
6. 선택한 2개의 메모리 검사 카드 색상 일치 여부에 따른 클릭 이벤트 설정
7. 테스트 완료 처리 및 테스트 완료 시 걸린 시간 측정
8. 완료한 테스트 결과 DB에 저장

### 기억력 검사 완료 페이지 생성 (2025-03-20 15:50)
- MemoryTest/Complete/index.tsx
- App.tsx
- MemoryTest/Complete/style.css
- constants/index.ts
- store/memory-test.store.ts

1. 페이지 생성, 컴포넌트 스타일 설정
2. 경로 설정
3. DESCRIPTION을 constants/index.ts로 이동 후 MEMORY_DESCRIPTION으로 변경
4. 기억력 검사 결과 스토어 설정 & 기억력 검사 결과 시간 표시
5. 기억력 검사 결과 리스트 테이블 생성 & 기억력 검사 결과 데이터 불러오기

### 집중력 검사 결과 DB에 저장 & 검사 결과 조회 (2025-03-24 10:50)
- request/test/post-concentration.request.dto.ts
- request/test/index.ts
- interfaces/concentration-test.interface.ts
- interfaces/index.ts
- response/test/get-concentration-response.dto.ts
- response/test/index.ts
- apis/index.ts

### 집중력 검사 페이지 생성 (2025-03-24 11:50, 12:50)
- views/ConcentrationTest/index.tsx
- views/ConcentrationTest/style.css
- App.tsx
- constants/index.ts
- store/concentration-test.store.ts

### 집중력 검사 완료 페이지 생성 (2025-03-24 14:50)
- views/ConcentrationTest/Complete/index.tsx
- views/ConcentrationTest/Complete/style.css
- App.tsx
- interfaces/concentration-test.interface.ts

### 최근 기억력, 집중력 검사 불러오기 & 파일 업로드 기능 (2025-03-25 11:50)
- response/test/get-recently-memory-response-dto.ts
- response/test/get-recently-concentration-response.dto.ts
- response/test/index.ts
- apis/index.ts

### 메인 페이지 생성 (2025-03-25 11:50)
- views/Main/index.tsx
- views/Main/style.css
- App.tsx
- views/Main/UserInfo/index.tsx
- views/Main/RecentlyMemory/index.tsx
- views/Main/RecentlyConcentration/index.tsx
- components/Modal/index.tsx
- components/Modal/style.css
- request/user/index.ts
- request/user/patch-user-request.dto.ts
- apis/index.ts
- hooks/sign-in-user.hook.ts
- Layout/index.tsx

### ChatGPT 연동 기억력 & 집중력 향상 안내 (2025-03-26 14:50)
- request/openai/get-way.request.dto.ts
- request/openai/index.ts
- response/openai/get-way.response.dto.ts
- response/openai/index.ts
- dto/index.ts
- components/Way/index.tsx
- components/Way/style.css
- views/Main/RecentlyMemory/index.tsx
- views/Main/RecentlyConcentration/index.tsx

### 일기에 공감 누르기 & 불러오기 (2025-03-26 17:50)
- response/diary/get-empathy.response.dto.ts
- response/diary/index.ts
- apis/index.ts
- views/Diary/Detail/index.tsx

### 일기에 댓글 달기 (2025-03-27 09:50)

### 일기에 댓글 블러오기 (2025-03-27 11:50)