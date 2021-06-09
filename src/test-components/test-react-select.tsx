import React from "react";
import Select from "react-select";
import { ActionMeta, OptionTypeBase, ValueType } from "react-select/src/types";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type OptionsType = ReadonlyArray<Array<{ label: string; value: string }>>;

export class TestReactSelect extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (
    selectedOption: ValueType<typeof options, false>,
    actionMeta: ActionMeta<typeof options>
  ) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options as unknown as OptionsType}
      />
    );
  }
}

// TS2352: Conversion of type
// '{ value: string; label: string; }[]' to type
// 'OptionsType' may be a mistake because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.
