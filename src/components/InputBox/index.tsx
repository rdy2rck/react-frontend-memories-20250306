import React, { ChangeEvent } from 'react'
import './style.css';

// interface: 공통 인풋 박스 컴포넌트 속성 //
interface Props {
  label: string;
  value: string;
  placeholder: string;
  type: 'text' | 'password';
  buttonName?: string;
  message: string;
  isErrorMessage? : boolean;
  isButtonActive? : boolean;
  readOnly? : boolean;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

// component: 공통 인풋 박스 컴포넌트 //
export default function InputBox(props: Props) {

  const {label, value, placeholder, type, buttonName, message, isErrorMessage, isButtonActive, readOnly } = props;
  const { onChange, onButtonClick } = props;

  // variable: 메세지 클래스 //
  const messageClass = `message ${isErrorMessage ? 'error' : 'success'}`;

  // variable: 버튼 클래스 //
  const buttonClass = `button ${isButtonActive ? 'second' : 'disable'}`;

  // render: 공통 인풋 박스 컴포넌트 렌더링 //
  return (
    <div className='input-box'>
      <div className='label'>{label}</div> {/* 아이디 입력창 헤더 메세지 */}
      <div className='input-contents'>
        <div className='input-area'> {/* 아이디 입력 인터페이스 배치 장소 */}
          <input type={type} value={value} placeholder={placeholder} onChange={onChange} readOnly={readOnly} /> {/* 아이디 입력칸 */}
          {onButtonClick && buttonName && <div className={buttonClass} onClick={onButtonClick}>{buttonName}</div>} {/* 아이디 중복 확인 버튼 */}
        </div>
        <div className={messageClass}>{message}</div> {/* 아이디 중복 없음 확인 메세지 */}
      </div>
    </div>
  )
}
