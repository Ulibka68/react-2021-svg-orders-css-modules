/** @jsx jsx */
import React from "react";
import "@/css/fa_font_local.css";
import "@/css/all_signs.css";
import { css, jsx } from "@emotion/react";

export const TestFontAwesome = () => (
  <div>
    <p>Regular</p>
    <i
      className="far fa-atom-alt "
      css={css`
        color: red;
      `}
    ></i>
    <i className="far fa-acorn"></i>
    <i className="far fa-arrow-alt-square-up"></i>

    <p>Двери&nbsp;пробел</p>
    <div
      css={css`
        font-size: 30px;
        letter-spacing: 1em;
        color: aquamarine;
      `}
    >
      <i className="fas fa-dungeon" />
      <i className="fas fa-window-frame-open"></i>
      <i className="fas fa-window-frame"></i>
    </div>
  </div>
);
