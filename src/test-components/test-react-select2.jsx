import React from "react";
import Select from "react-select";
import chroma from "chroma-js";

const colourOptions = [
  { value: "chocolate", label: "Chocolate", color: "red" },
  { value: "strawberry", label: "Strawberry", color: "blue" },
  { value: "vanilla", label: "Vanilla", color: "green" },
];

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const dot_single = (data) => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: "#ffca",
    borderRadius: 10,
    // content: `"${data.label}"`,
    content: "&#169;",
    display: "block",
    marginRight: 8,
    height: 10,
    width: 100,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, state) => {
    console.log("state ", state);
    const { data, isDisabled, isFocused, isSelected, isMulti } = state;
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot_single(data) }),
};

export const TestSelectCustStyles = () => (
  <Select
    defaultValue={colourOptions[2]}
    label="Single select"
    options={colourOptions}
    styles={colourStyles}
  />
);
