import React from "react";
import style from "./floating-labels.module.css";

export const FloatInput = () => (
  <div className={style.floatingLabel}>
    <input
      className={style.floatingInput}
      type="text"
      placeholder=" "
      defaultValue="test"
    />
    <span className={style.highlight}>8888</span>
    <label>Text22</label>
  </div>
);
