import React from "react";
import { Button } from "@/components/button";
import { theme } from "@/utils/theme";
import { Consumer } from "@/test-components/consumer";

export class TestComponents extends React.Component {
  render() {
    return (
      <div>
        <h1>Button</h1>
        <Button
          variant="solid"
          color="primary"
          size="medium"
          enableElevation={false}
          disabled={false}
          theme={theme}
        >
          Button
        </Button>
        <Consumer dopProps="Иванов" />
      </div>
    );
  }
}
