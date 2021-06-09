export function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}

/*
function calcInnerLine(
  props: {
    leftHeight: number;
    rightHeight: number;
    width: number;
    leftInterval: number;
    rightInterval: number;
    topInterval: number;
    downInterval: number;
    paddingCommon: number;
  },
  state: {
    maxHeight: number;
    viewBoxSize: number;
    paddingLeft: number;
    paddingTop: number;
  }
): number {
  const {
    leftHeight,
    rightHeight,
    width,
    leftInterval,
    rightInterval,
    topInterval,
    downInterval,
    paddingCommon,
  } = props;
  const { maxHeight, viewBoxSize, paddingLeft, paddingTop } = state;

  //  предположим что leftHeight < rightHeight
  const ugl34 = Math.atan((rightHeight - leftHeight) / width);
  console.log("ugl34 : ", radToDeg(ugl34));
  const ugl56 = Math.PI / 2 - ugl34;
  console.log("ugl56 : ", radToDeg(ugl56));
  const ugl124 = ugl34 + Math.PI / 2;
  console.log("ugl124 : ", radToDeg(ugl124));
  const c = topInterval / Math.sin(ugl56);
  console.log("c:", c);
  const e = rightInterval / Math.tan(ugl56);
  const l5 = c - e;
  return l5;
}

console.log(
  calcInnerLine(
    {
      leftHeight: 42,
      rightHeight: 94.05,
      width: 77.16,
      leftInterval: 10,
      rightInterval: 10,
      topInterval: 10,
      downInterval: 10,
      paddingCommon: 20,
    },
    {
      maxHeight: 0,
      viewBoxSize: 0,
      paddingLeft: 0,
      paddingTop: 0,
    }
  )
);
*/

/*
 * возвращает {b,e}
 * b - сколько надо отнять от левой высоты
 * e - сколько отнять от правой высоты
 */
export function calcInnerLine2(props: {
  leftHeight: number;
  rightHeight: number;
  width: number;
  leftInterval: number;
  rightInterval: number;
  topInterval: number;
  // x0_left: number;
  // y0_top_left: number;
}) {
  const {
    leftHeight,
    rightHeight,
    width,
    leftInterval,
    rightInterval,
    topInterval,
    // x0_left,
    // y0_top_left,
  } = props;

  //  предположим что leftHeight < rightHeight - просто приведем по модулю
  const ugl34 = Math.atan(Math.abs(rightHeight - leftHeight) / width);
  // console.log("ugl34 : ", radToDeg(ugl34));

  const tan34 = Math.tan(ugl34);
  const a = leftInterval * tan34;
  const c = topInterval / Math.cos(ugl34);
  let g = a;
  if (leftInterval !== rightInterval) g = rightInterval * Math.tan(ugl34);
  let b = c - a;
  let e = c + g;
  if (leftHeight > rightHeight) {
    const xx = e;
    e = b;
    b = xx;
  }
  // console.log("a c b g e", a, c, b, g, e);
  /*
  уравнение средней линии имеет формулу:
    -tan(34)*x+z
    минус потому что y смотрит вниз
     z= y0_top_left +tan(34)*x0_left
   */

  return { b, e, c, tan34 };
}

/*

console.log(
  calcInnerLine2({
    leftHeight: 42,
    rightHeight: 94.05,
    width: 77.16,
    leftInterval: 10,
    rightInterval: 12,
    topInterval: 15,
  })
);
*/
