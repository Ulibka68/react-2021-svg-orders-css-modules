import React from "react";
// CLEANER API
import { Counter } from "./counter";

// 🙇‍ USE LOOKUP TYPE
type SomeType = Counter["props"] & {
  dopProps: string;
};

// const defaultProps = Object.freeze({ who: "Johnny 5" });

export class Consumer extends React.Component<SomeType> {
  static readonly defaultProps = Counter.defaultProps;

  render() {
    return (
      <>
        <h2>Consumer component test</h2>
        <Counter who={this.props.who} />
        <h2>{this.props.dopProps}</h2>
      </>
    );
  }
}
