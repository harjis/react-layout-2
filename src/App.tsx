import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";

function App() {
  return (
    <div className={s.container}>
      <Header />
    </div>
  );
}

export default App;
