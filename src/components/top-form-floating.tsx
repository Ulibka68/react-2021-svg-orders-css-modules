import React from "react";
import style from "./top-form-floating.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

const InputStyle = ({ ...rest }) => (
  <input className={[style.inpBaseFont, style.inpBase].join(" ")} {...rest} />
);

const Label = ({ ...rest }) => <label className={style.Label} {...rest} />;
const Option = ({ ...rest }) => (
  <option className={style.inpBaseFont} {...rest} />
);
const Select = ({ ...rest }) => (
  <select className={[style.inpBaseFont, style.inpBase].join(" ")} {...rest} />
);

type Inputs = {
  production_type: string;
  orderDate: Date;
  orderNumber: number;
  kantColor: string;
  kantWidth: number;
  podvesCounts: number;
  podvesLength: number;
  width: number;
  height1: number;
  height2: number;
  dividerWidth: number;
  leftDownToCenterDistance: number;
  horizontalDivider: boolean;
  verticalDivider: boolean;
};

export function TopFormFloating() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { orderDate: defaultDate() } });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it
  const dateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  };

  function defaultDate() {
    function addZero(n: number): string {
      if (n < 10) return "0" + n.toString();
      else return n.toString();
    }
    const d = new Date();
    const res = `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(
      d.getDate()
    )}`;
    console.log(res);
    return res;
  }
  // console.log(new Intl.DateTimeFormat("de-DE", options).format(date));

  function InputPrimary(props: {
    id: keyof Inputs;
    type: string;
    description: string;
  }) {
    return (
      <React.Fragment>
        <Label htmlFor={props.id}>{props.description}</Label>
        <InputStyle id={props.id} type={props.type} {...register(props.id)} />
      </React.Fragment>
    );
  }

  return (
    <div className={style.DivBG}>
      {/*"handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<Input2 defaultValue="input2" />*/}
        <InputPrimary id="orderDate" type="date" description="Дата" />
        <InputPrimary id="orderNumber" type="number" description="Заказ №" />
        <InputPrimary id="kantColor" type="input" description="Цвет канта" />
        <InputPrimary id="kantWidth" type="number" description="Ширина канта" />
        <InputPrimary
          id="podvesCounts"
          type="number"
          description="Подвесы количество"
        />
        <InputPrimary
          id="podvesLength"
          type="number"
          description="Подвесы длина"
        />
        <InputPrimary id="width" type="number" description="Ширина" />
        <InputPrimary id="height1" type="number" description="Высота1" />
        <InputPrimary id="height2" type="number" description="Высота2" />
        <InputPrimary
          id="dividerWidth"
          type="number"
          description="Ширина разделителя"
        />
        <InputPrimary
          id="leftDownToCenterDistance"
          type="number"
          description="Расстояние до центральной
оси от левого нижнего угла"
        />
        <Label htmlFor="production_type">Вид изделия</Label>
        <Select id="production_type" {...register("production_type")}>
          <Option value="blindWindow">Глухое окно</Option>
          <Option value="openingWindow">Открывающееся окно</Option>
          <Option value="door">Дверь</Option>
        </Select>
        <fieldset>
          <legend className={style.Legend}>Разделитель</legend>
          <Label htmlFor="horizontalDivider">Горизонтальный разделитель</Label>
          <InputStyle
            id="horizontalDivider"
            type="checkbox"
            {...register("horizontalDivider")}
          />{" "}
          <Label htmlFor="verticalDivider">Вертикальный разделитель</Label>
          <InputStyle
            id="verticalDivider"
            type="checkbox"
            {...register("verticalDivider")}
          />
        </fieldset>

        <InputStyle type="submit" />
      </form>
    </div>
  );
}
