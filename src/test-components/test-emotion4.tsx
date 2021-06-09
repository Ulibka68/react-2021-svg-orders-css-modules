import React from "react";
import { ClassNames, css } from "@emotion/react";
import classnames from "classnames";

// this might be a component from npm that accepts a wrapperClassName prop
const SomeComponent = ({
  wrapperClassName,
  className,
  children,
}: {
  wrapperClassName: string;
  className: string;
  children: React.ReactNode;
}) => (
  <div className={wrapperClassName}>
    in the wrapper!
    <div className={className}>{children}</div>
  </div>
);

const redClass = css("color: red");
const boldClass = css(`
font-style: bold;
text-decoration: underline;
`);

export const CxTest4_1 = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p className={[redClass, boldClass].join(" ")}>
        Start editing to see some magic happen!
      </p>
      <p className={classnames({ [redClass]: true, [boldClass]: true })}>
        Start editing to see some magic happen!
      </p>
    </div>
  );
};

export const CxTest4 = () => (
  <div>
    <ClassNames>
      {({ css, cx }) => (
        <SomeComponent
          wrapperClassName={css({ color: "green" })}
          className={css`
            color: hotpink;
          `}
        >
          from children!!
        </SomeComponent>
      )}
    </ClassNames>
    <CxTest4_1 />
  </div>
);
