import React, { ChangeEvent } from 'react'
import './style.css';

// interface: 공통 인풋 박스 컴포넌트 속성 //
interface Props {
  label: string;
  value: string;
  placeholder: string;
  type: 'text' | 'password';
  buttonName: string;
  message: string;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// component: 공통 인풋 박스 컴포넌트 //
export default function InputBox(props: Props) {

  const {label, value, placeholder, type, buttonName, message} = props;
  const { onChange } = props;

  // render: 공통 인풋 박스 컴포넌트 렌더링 //
  return (
    <div className='input-box'>
      <div className='label'>{label}</div> {/* 아이디 입력창 헤더 메세지 */}
      <div className='input-contents'>
        <div className='input-area'> {/* 아이디 입력 인터페이스 배치 장소 */}
          <input type={type} value={value} placeholder={placeholder} onChange={onChange} /> {/* 아이디 입력칸 */}
          <div className='button second'>{buttonName}</div> {/* 아이디 중복 확인 버튼 */}
        </div>
        <div className='message error'>{message}</div> {/* 아이디 중복 없음 확인 메세지 */}
      </div>
    </div>
  )
}
