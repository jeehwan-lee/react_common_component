/** @jsxImportSource @emotion/react */

import React from "react";
import "./App.css";
import Text from "./components/common/Text";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import TextField from "./components/common/TextLabel";
import Alert from "./components/common/Alert";
import { useAlertContext } from "./contexts/AlertContext";

function App() {
  const { open } = useAlertContext();

  return (
    <div>
      <Button>테스트</Button>
      <Input placeholder="로그인하세요" aria-invalid={false} />
      <TextField label="아이디" helpMessage="메세지를 입력해주세요" />

      <Button
        onClick={() => {
          open({
            title: "Alert 띄우기",
            description: "세부내용입니다.",
            onButtonClick: () => {
              console.log("hello");
            },
          });
        }}
      >
        alert창 띄우기
      </Button>
    </div>
  );
}

export default App;
