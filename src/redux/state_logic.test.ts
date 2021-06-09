import { lifeState } from "./state_logic";

describe("Field", () => {
  it("first teset", () => {
    const matrixSize = 6;
    const a = new lifeState(matrixSize, matrixSize );

    // a.beehiveSeed(1, 1);
    a.squareSeed(1, 1);
    a.caclNeighbors();
    a.printSize();
    a.nextState();
    console.log("******* NEXT");
    a.printSize();
    expect(a.sizex).toBe(matrixSize);
  });
});
