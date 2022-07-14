import React from 'react';
import Button from "./Button";
import TextLink from "./TextLink";
import Input from "./Input";

function Modal(){
    return(
      <div className="modal">
        <p><Input></Input></p>
        <p ><Input ></Input></p>
        <p><Button>로그인</Button></p>
        <TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </div>
    )
  }

  export default Modal;