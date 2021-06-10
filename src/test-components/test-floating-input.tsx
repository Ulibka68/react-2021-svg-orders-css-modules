import React from "react";
import { FloatInput } from "components/floating-labels";

export const TestFloatingInput = () => (
  <div>
    <h1>TestFloatingInput</h1>
    <div className="wrapper-floating-labels">
      <FloatInput label="user1" type="email" color="blue" required />
      <FloatInput label="text" type="text" color="red" />
    </div>
  </div>
);
