/** @jsxImportSource @emotion/react */

import React from "react";
import "./App.css";
import Text from "./components/common/Text";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import TextField from "./components/common/TextLabel";

function App() {
  return (
    <div>
      <Button>테스트</Button>
      <Input placeholder="로그인하세요" aria-invalid={false} />

      <TextField label="아이디" helpMessage="메세지를 입력해주세요" />
    </div>
  );
}

export default App;
