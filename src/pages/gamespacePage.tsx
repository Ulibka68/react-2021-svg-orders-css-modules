import React from "react";
import { lifeState } from "@/redux/state_logic";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/redux/reducer/index";
import * as life from "@/redux/reducer/state_logic_reducer";

const FlexWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  margin-top: 20px;
`;

import { GameSpace } from "@/components/gameSpace";

class GameSpacePageClass extends React.Component<Props> {
  calcNextState = () => {
    this.props.nextState(null);
  };

  render() {
    return (
      <div>
        <FlexWrapper>
          <GameSpace cellSize={20} showNeighbors={false} />
          <GameSpace cellSize={20} showNeighbors={true} />
        </FlexWrapper>

        <Btn onClick={this.calcNextState}>Следующее состояние</Btn>
      </div>
    );
  }
}

const connector = connect((state: RootState) => state.lifeState, {
  caclNeighbors: life.caclNeighbors,
  nextState: life.nextState,
});

// The inferred type will look like:
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export const GameSpacePage = connector(GameSpacePageClass);
