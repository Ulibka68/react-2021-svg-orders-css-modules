import React from "react";
import { SvgDocComponent } from "@/components/svg-doc-component";
import { TopFormFloating } from "@/components/top-form-floating";
import style from "./svg-doc.module.css";

const defaultProps = {
  leftHeight: 250,
  rightHeight: 400,
  width: 300,
  leftInterval: 20,
  rightInterval: 20,
  topInterval: 30,
  downInterval: 40,
  paddingCommon: 20, // отступ от края
  strokeWidth: 4,
  sw: "400px",
  sh: "400px",
};

type Nullable<T> = {
  [P in keyof T]?: T[P];
};

export class SvgDoc extends React.Component<typeof defaultProps> {
  static readonly defaultProps = defaultProps;

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
      sw,
      sh,
    } = this.props;
    return (
      <div className={style.svgDocContainer}>
        <div className={style.topFormFloatingContainer}>
          <TopFormFloating addClassName={style.topFormFloating} />
        </div>

        {/*   <SvgDocComponent
          leftHeight={350}
          rightHeight={500}
          width={350}
          leftInterval={40}
          rightInterval={30}
          topInterval={60}
          downInterval={40}
          paddingCommon={20}
          maxwh={600}
        />*/}

        <SvgDocComponent
          leftHeight={500}
          rightHeight={350}
          width={350}
          leftInterval={40}
          rightInterval={30}
          topInterval={60}
          downInterval={40}
          paddingCommon={20}
          maxwh={600}
        />
      </div>
    );
  }
}
