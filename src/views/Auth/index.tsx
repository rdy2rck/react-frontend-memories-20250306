import React, { useState } from 'react'

import SignIn from './SignIn';
import SignUp from './SignUp';

import { AuthPage } from '../../types/aliases';

import './style.css';

// component: 로그인 회원가입 화면 컴포넌트 //
export default function Auth() {

  // state: 페이지 상태 //
  const [page, setPage] = useState<AuthPage>('sign-in');

  // event handler: 페이지 변경 이벤트 처리 //
  const onPageChangeHanlder = (page: AuthPage) => {setPage(page)};

  // render: 로그인 회원가입 화면 컴포넌트 렌더링 //
  return (
    <div id="auth-wrapper"> {/* 전체 레이아웃을 지정하는 곳 */}
      <div className='auth-side-image'></div> {/* 배경의 이미지 파일을 지정하는 곳 */}
      <div className='auth-box'> {/* 부분 레이아웃을 지정하는 곳 */}
        {page === 'sign-in' ?
        <SignIn onPageChange = {onPageChangeHanlder} /> : 
        <SignUp onPageChange = {onPageChangeHanlder} />}
      </div>
    </div>
  )
}