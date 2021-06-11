import React from "react";
import style from "./top-form-floating.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types/utils";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import {
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form/dist/types/form";

const InputStyle = ({
  register = null as any,
  name = "",
  additionalClassname = "",
  ...rest
}) => (
  <input
    {...register(name)}
    className={[style.inpBaseFont, style.inpBase, additionalClassname].join(
      " "
    )}
    {...rest}
  />
);

const Label = ({ ...rest }) => <label className={style.label} {...rest} />;
const Option = ({ ...rest }) => (
  <option className={style.inpBaseFont} {...rest} />
);
const Select = ({ ...rest }) => (
  <select className={[style.inpBaseFont, style.inpBase].join(" ")} {...rest} />
);

const SelectReg = ({
  register = null as any,
  name = "",
  options = [] as Array<{ val: string; descr: string }>,
  ...rest
}) => {
  return (
    <select
      className={[style.inpBaseFont, style.inpBase].join(" ")}
      {...register(name)}
      {...rest}
    >
      {options.map((value) => (
        <option key={value.val} className={style.inpBaseFont} value={value.val}>
          {value.descr}
        </option>
      ))}
    </select>
  );
};

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
    // console.log(res);
    return res;
  }
  // console.log(new Intl.DateTimeFormat("de-DE", options).format(date));

  function InputPrimary(props: {
    id: keyof Inputs;
    type: string;
    description: string;
  }) {
    // console.log("props : ", props);
    return (
      <div className={style.inputPrimaryContainer}>
        <label className={style.label} htmlFor={props.id}>
          {props.description}
        </label>
        <input
          id={props.id}
          type={props.type}
          className={[style.inpBaseFont, style.inpBase].join(" ")}
          {...register(props.id)}
        />
      </div>
    );
  }

  return (
    <div className={style.divBg}>
      {/*"handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
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
          description="Расстояние до центральной оси от левого нижнего угла"
        />

        <div className={style.inputPrimaryContainer}>
          <Label htmlFor="production_type">Вид изделия</Label>
          <SelectReg
            id="production_type"
            register={register}
            name="production_type"
            options={[
              { val: "blindWindow", descr: "Глухое окно" },
              { val: "openingWindow", descr: "Открывающееся окно" },
              { val: "door", descr: "Дверь" },
            ]}
          />
        </div>

        <div className={style.fieldsetContainer}>
          <fieldset>
            <legend className={style.legend}>Разделитель</legend>
            <Label htmlFor="horizontalDivider">
              Горизонтальный разделитель
            </Label>
            <InputStyle
              id="horizontalDivider"
              type="checkbox"
              register={register}
              name="horizontalDivider"
            />
            <Label htmlFor="verticalDivider">Вертикальный разделитель</Label>
            <InputStyle
              id="verticalDivider"
              type="checkbox"
              register={register}
              name="verticalDivider"
            />
          </fieldset>
        </div>

        {/*    <div className={style.centeredSubmitButtonContainer}>
          <InputStyle type="submit" additionalClassname={style.submitButton} />
        </div>*/}
      </form>
    </div>
  );
}
