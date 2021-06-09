/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";

const button = css`
  background: black;
  color: white;
  & {
    margin-left: 8px;
  }
`;

const buttonPrimary = css`
  background: red;
`;
const buttonSecondary = css`
  background: green;
`;

const Button = ({ variation = "primary", ...rest }) => (
  <button
    css={[
      // css prop accepts arrays.
      // This makes it easy to large blocks of conditional styles
      css`
        outline: none;
        border: none;
        display: block;
        box-sizing: border-box;
        padding: 16px 32px;
        font-size: 0.75rem;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 4px inset;
        text-align: center;
      `,

      variation === "primary" &&
        css`
          background-color: rgb(111, 62, 209);
          color: rgb(236, 233, 251);
        `,
      // string and object styles can be mixed
      variation === "secondary" && {
        backgroundColor: `rgb(236, 233, 251)`,
        color: `rgb(111, 62, 209)`,
      },
    ]}
    {...rest}
  />
);
const Button2 = ({
  primary,
  variation,
  children,
  ...rest
}: {
  primary?: boolean;
  variation?: string;
  children: React.ReactNode;
}) => (
  <button
    css={[
      button,

      primary && buttonPrimary,
      // string and object styles can be mixed
      variation === "secondary" && {
        backgroundColor: `rgb(236, 233, 251)`,
        color: `rgb(111, 62, 209)`,
      },
    ]}
    {...rest}
  >
    {children}
  </button>
);

export const CxTest3 = () => (
  <div>
    {/*<Button>Ssadasd</Button>*/}
    {/*<Button variation="secondary">Solo</Button>*/}
    <Button2 primary>primary</Button2>
    <Button2 variation="secondary">variation = secondary</Button2>
  </div>
);
