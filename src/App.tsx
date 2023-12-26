/** @jsxImportSource @emotion/react */

import React from "react";
import "./App.css";
import Text from "./components/common/Text";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

function App() {
  return (
    <div className="App">
      <Button>테스트</Button>
      <Input placeholder="로그인하세요" aria-invalid={false} />
    </div>
  );
}

export default App;
