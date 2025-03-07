import React, { ChangeEvent, useState } from 'react'
import './style.css';
import InputBox from '../../components/InputBox';

// component: 로그인 회원가입 화면 컴포넌트 //
export default function Auth() {

  // state: 유저 아이디 상태 //
  const [userId, setUserId] = useState<string>('');
  // state: 유저 비밀번호 상태 //
  const [userPassword, setUserPassword] = useState<string>('');

  // event handler: 유저 ID 변경 이벤트 처리 //
  const onUserIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserId(value);
  };

  // event handler: 유저 비밀번호 변경 이벤트 처리 //
  const onUserPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserPassword(value);
  };

  // render: 로그인 회원가입 화면 컴포넌트 렌더링 //
  return (
    <div id="auth-wrapper"> {/* 전체 레이아웃을 지정하는 곳 */}
      <div className='auth-side-image'></div> {/* 배경의 이미지 파일을 지정하는 곳 */}
      <div className='auth-box'> {/* 부분 레이아웃을 지정하는 곳 */}
        <div id='auth-login-container'> {/* 실제 컨텐츠가 들어가는 곳 */}
          <div className='header'>Memories</div> {/* 헤더 메세지 */}
          <div className='input-container'> {/* 아이디 & 비밀번호 입력 인터페이스 배치하는 곳 */}
            <InputBox type={'text'} label={'아이디'} value={userId} placeholder={'아이디를 입력해주세요.'} buttonName={''} message={''} onChange={onUserIdChangeHandler}/> {/* ID 입력칸 */}
            <InputBox type={'password'} label={'비밀번호'} value={userPassword} placeholder={'비밀번호를 입력해주세요.'} buttonName={''} message={''} onChange={onUserPasswordChangeHandler} /> {/* 비밀번호 입력칸 */}
          </div> 
          <div className='button-container'></div> {/* 로그인 버튼 */}
          <div className='divider'></div> {/* 구분선 */}
          <div className='sns-container'></div> {/* SNS 로그인 페이지 전환 버튼 */}
        </div>
      </div>
    </div>
  )
}