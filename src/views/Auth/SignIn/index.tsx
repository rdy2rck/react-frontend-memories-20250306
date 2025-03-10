import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css';
import InputBox from '../../../components/InputBox';
import { AuthPage } from '../../../types/aliases';

// interface: 로그인 컴포넌트 속성 //
interface Props {
  onPageChange: (page: AuthPage) => void;
}

// component: 로그인 컴포넌트 //
export default function SignIn(props: Props) {

  const { onPageChange } = props;

  // state: 유저 아이디 상태 //
  const [userId, setUserId] = useState<string>('');
  // state: 유저 비밀번호 상태 //
  const [userPassword, setUserPassword] = useState<string>('');
  // state: 유저 아이디 메세지 상태 //
  const [userIdMessage, setUserIdMessage] = useState<string>('');
  // state: 유저 비밀번호 메세지 상태 //
  const [userPasswordMessage, setUserPasswordMessage] = useState<string>('');

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

  // event handler: 로그인 버튼 클릭 이벤트 처리 //\
  const onLoginButtonClick = () => {
    if (!userId) setUserIdMessage('아이디를 입력하세요');
    if (!userPassword) setUserPasswordMessage('비밀번호를 입력하세요');
    if (!userId || !userPassword) return;

    // todo: 로그인 처리 로직 //
  };

  // effect: 아이디 혹은 비밀번호 변경 시 실행할 함수 //
  useEffect(() => {
    setUserIdMessage('');
    setUserPasswordMessage('');
  }, [userId, userPassword]);

  // render: 로그인 컴포넌트 렌더링 //
  return (
    <div id='auth-login-container'> {/* 실제 컨텐츠가 들어가는 곳 */}
    <div className='header'>Memories</div> {/* 헤더 메세지 */}
    <div className='input-container'> {/* 아이디 & 비밀번호 입력 인터페이스 배치하는 곳 */}
      <InputBox type={'text'} label={'아이디'} value={userId} placeholder={'아이디를 입력해주세요.'} message={userIdMessage} isErrorMessage onChange={onUserIdChangeHandler}/> {/* ID 입력칸 */}
      <InputBox type={'password'} label={'비밀번호'} value={userPassword} placeholder={'비밀번호를 입력해주세요.'} message={userPasswordMessage} isErrorMessage onChange={onUserPasswordChangeHandler} /> {/* 비밀번호 입력칸 */}
    </div> 
    <div className='button-container'>
      <div className='button primary fullwidth' onClick={onLoginButtonClick}>로그인</div> {/* 로그인 버튼 */}
      <div className='link' onClick={() => onPageChange('sign-up')}>회원가입</div> {/* 회원가입 버튼 */}
    </div> 
      <div className='divider'></div> {/* 구분선 */}
      <div className='sns-container'> {/* SNS 로그인 버튼 배치하는 곳 */}
        <div className='sns-header'>SNS 로그인</div>
        <div className='sns-button-box'> {/* SNS 로그인 페이지 전환 버튼 */}
          <div className='sns-button kakao'></div> {/* 카카오 SNS 로그인 버튼 */}
          <div className='sns-button naver'></div> {/* 네이버 SNS 로그인 버튼 */}
        </div>
      </div>
    </div>
  )
}