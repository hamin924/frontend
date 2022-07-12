import React from 'react';
import BigButton from "./BigButton";
import SmallButton from "./SmallButton";
import Input from "./Input";

function Modal(){
    return(
      <div className="modal">
        <p><Input></Input></p>
        <p ><Input ></Input></p>
        <p><BigButton>로그인</BigButton></p>
        <SmallButton>회원가입</SmallButton>
        <SmallButton>ID/PW찾기</SmallButton>
        </div>
    )
  }

  export default Modal;