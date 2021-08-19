import React from "react";
import s from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Review } from "./components/Review/Review";

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Review />
    </div>
  );
}

export default App;
