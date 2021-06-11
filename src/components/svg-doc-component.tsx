import React from "react";
import { calcInnerLine2 } from "@/utils/sizes";
import style from "./svg-doc-component.module.css";

type SVGContainer = {
  sw: string;
  sh: string;
  vWidth: number;
  vHeight: number;
  children: React.ReactNode;
};

const SVGContainer = ({ sw, sh, vWidth, vHeight, children }: SVGContainer) => {
  return (
    <svg
      width={sw}
      height={sh}
      viewBox={`0 0 ${vWidth} ${vHeight}`}
      className={style.svgBackground}
    >
      {children}
    </svg>
  );
};

const SvgDefs = () => (
  <svg style={{ display: "none" }}>
    <g id="luversSmall">
      <circle
        fill="none"
        stroke="rgb(255,165,0)"
        strokeWidth={4}
        r="10"
        cx="0"
        cy="0"
      />
      <circle fill="red" stroke="none" r="2" cx="0" cy="0" />
    </g>
  </svg>
);

const defaultProps = {
  leftHeight: 250,
  rightHeight: 400,
  width: 300,
  leftInterval: 20,
  rightInterval: 30,
  topInterval: 30,
  downInterval: 40,
  paddingCommon: 20, // отступ от края
  strokeWidth: 4,
  maxwh: 600,
  top_y_repeat_cnt: 4,
};

type Nullable<T> = {
  [P in keyof T]?: T[P];
};

export class SvgDocComponent extends React.Component<typeof defaultProps> {
  static readonly defaultProps = defaultProps;
  state = {
    maxHeight: 0,
    viewbox_width: 0,
    viewbox_height: 0,

    sw: "0",
    sh: "0",
    paddingLeft: 0,
    paddingTop: 0,
    e: 0,
    b: 0,
    c: 0,
    tan34: 0,
    z: 0,
    y0_top_left: 0,
    y_direction: 1,
    luvers_paths: [] as Array<{ x: number; y: number }>,
  };
  constructor(props: SvgDocComponent["props"]) {
    super(props);
    this.state.maxHeight = Math.max(props.leftHeight, props.rightHeight);

    this.state.viewbox_width = props.width + props.paddingCommon * 2;
    this.state.viewbox_height = this.state.maxHeight + props.paddingCommon * 2;
    this.state.sw = props.maxwh + "px";
    this.state.sh =
      Math.round(
        (props.maxwh * this.state.viewbox_height) / this.state.viewbox_width
      ) + "px";

    this.state.paddingLeft = (this.state.viewbox_width - props.width) / 2;
    this.state.paddingTop =
      (this.state.viewbox_height - this.state.maxHeight) / 2;

    const y0_top_left =
      this.state.viewbox_height - this.state.paddingTop - props.leftHeight;

    this.state.y0_top_left = y0_top_left;
    const calcInnerLine2args = {
      ...props,
      x0_left: this.state.paddingLeft,
      y0_top_left,
    };
    Object.assign(this.state, calcInnerLine2(calcInnerLine2args));

    const x_strt = this.state.paddingLeft + props.leftInterval / 2;
    const x_rpt_interval =
      (props.width - x_strt) / (props.top_y_repeat_cnt - 1);
    const y1 = y0_top_left + this.state.c / 2;
    const x1 = this.state.paddingLeft;
    const tan34 = this.state.tan34;
    let y_direction = -1;
    if (props.leftHeight > props.rightHeight) y_direction = 1;
    this.state.y_direction = y_direction;

    for (let i = 0; i < props.top_y_repeat_cnt; i++) {
      const x = x_strt + x_rpt_interval * i;
      const y = y1 + (x - x1) * tan34 * y_direction;
      this.state.luvers_paths.push({ x, y });
    }
  }
  render() {
    const {
      leftHeight,
      rightHeight,
      width,
      leftInterval,
      rightInterval,
      topInterval,
      downInterval,
      paddingCommon,
      top_y_repeat_cnt,
    } = this.props;
    const {
      maxHeight,
      viewbox_width,
      viewbox_height,
      sw,
      sh,
      paddingLeft,
      paddingTop,
      e,
      b,
      c,
      y0_top_left,
      tan34,
      luvers_paths,
      y_direction,
    } = this.state;
    const x1 = paddingLeft;
    const y1 = y0_top_left + c / 2;
    const x2 = paddingLeft + width;
    const y2 = y1 + (x2 - x1) * tan34 * y_direction;

    /*  RENDER */

    return (
      <div className="svg-component">
        <SvgDefs />
        <SVGContainer
          sw={sw}
          sh={sh}
          vWidth={viewbox_width}
          vHeight={viewbox_height}
        >
          <g
            vectorEffect="non-scaling-stroke"
            stroke="red"
            strokeWidth="4"
            fill="none"
          >
            <path
              d={`M ${paddingLeft} ${viewbox_height - paddingTop - leftHeight}
                V ${viewbox_height - paddingTop}
                H ${paddingLeft + width}
                V ${viewbox_height - paddingTop - rightHeight} Z`}
            />

            <path
              d={`M ${paddingLeft + leftInterval}
                      ${viewbox_height - paddingLeft - leftHeight + b}
                V ${viewbox_height - paddingTop - downInterval}
                H ${paddingLeft + width - rightInterval}
                V ${viewbox_height - paddingTop - rightHeight + e} Z
                `}
            />
          </g>
          <line stroke="blue" strokeWidth="1" x1={x1} y1={y1} x2={x2} y2={y2} />
          <use xlinkHref="#luversSmall" x="20" y="20" />
          {luvers_paths.map((elm) => (
            <use xlinkHref="#luversSmall" x={elm.x} y={elm.y} key={elm.x} />
          ))}

          <g strokeWidth="0" fill="yellow">
            <rect
              x={paddingLeft - paddingCommon}
              y={viewbox_height - paddingTop}
              width={paddingCommon}
              height={paddingCommon}
            />{" "}
            <rect
              x={viewbox_width - paddingLeft}
              y={viewbox_height - paddingTop}
              width={paddingCommon}
              height={paddingCommon}
            />
          </g>
        </SVGContainer>
      </div>
    );
  }
}
