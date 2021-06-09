import React, { Component } from "react";

// counter.tsx
type State = typeof initialState;

const initialState = { counter: 0 };
const defaultProps = Object.freeze({ who: "Johnny 5" });

export class Counter extends Component<typeof defaultProps, State> {
  readonly state = initialState;
  static readonly defaultProps = defaultProps;

  render() {
    return (
      <div>
        <h1>{this.props.who}</h1>
      </div>
    );
  }
}
