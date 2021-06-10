import React from "react";
import style from "./floating-labels.module.scss";

type colorData = "blue" | "red";

export const FloatInput = ({
  type = "text",
  label = "label",
  color = "blue" as colorData,
  ...rest
}) => (
  <React.Fragment>
    <div className={style.materialTextfield} data-color={color}>
      <input type={type} className={style.input} {...rest} />
      <label data-content={label}>{label}</label>
    </div>
    {/*
    <div className={style.materialTextfield} data-red>
      <input type="text" required className={style.input} />
      <label data-content="password">password</label>
    </div>*/}
  </React.Fragment>
);
