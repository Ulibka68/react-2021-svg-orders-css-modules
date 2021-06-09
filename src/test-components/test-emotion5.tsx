import React from "react";
import { css } from "@emotion/css";
import classnames from "classnames";

const redClass = css("color: red");
const boldClass = css(`
font-style: bold;
text-decoration: underline;
`);

export const CxTest5 = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p className={redClass}>Start editing to see some magic happen!</p>
      <p className={classnames({ [redClass]: false, [boldClass]: true })}>
        Start editing to see some magic happen!
      </p>
      <p className={[redClass, boldClass].join(" ")}>
        Start editing to see some magic happen!
      </p>
    </div>
  );
};

// <p className={[redClass, boldClass].join(" ")}>
//     Start editing to see some magic happen!
// </p>

// <p className={classnames({ [redClass]: true, [boldClass]: true })}>
//     Start editing to see some magic happen!
// </p>
