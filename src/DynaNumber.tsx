import * as React from "react";
import {DynaFastClick} from "dyna-ui-fast-click";
import {DynaFieldWrapper, EMode, EColor, EStyle, ESize} from "dyna-ui-field-wrapper"
import {isNumber, round, roundToString} from "dyna-loops";

import {faIcon} from "./utils/faIcon";

import "./layout.less";
import "./color.less";

export {EColor, EStyle}

export interface IDynaNumberProps {
  style?: EStyle;
  mode?: EMode;
  color?: EColor;
  size?: ESize;
  name?: string;
  label?: TContent;
  required?: TContent;
  min?: number;
  max?: number;
  value: number;
  step?: number;
  precision?: number; // decimal
  validationMessage?: TContent;
  footer?: TContent;
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  onChange?: (name: string, value: number) => void;
}

export type TContent = string | JSX.Element;

export class DynaNumber extends React.Component<IDynaNumberProps> {
  static defaultProps: IDynaNumberProps = {
    mode: EMode.EDIT,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    name: '',
    label: null,
    min: null,
    max: null,
    value: 0,
    step: 1,
    precision: 0,
    validationMessage: null,
    inputProps: {},
    footer: null,
    onChange: (name: string, value: number) => undefined,
  };

  private handleChange(value: string) {
    const {name, precision, min, max, onChange} = this.props;
    if (!isNumber(value)) return;
    const n: number = round(Number(value), precision);
    if (min != null && n < min) return;
    if (max != null && n > max) return;
    onChange && onChange(name, n);
  }

  private handleButtonValueClick(factor: number): void {
    const {name, step, value, min, max, onChange} = this.props;
    const newValue: number = value + (factor * step);
    if (min != null && newValue < min) return;
    if (max != null && newValue > max) return;
    onChange(name, newValue);
  }

  private renderValueButton(factor: number): JSX.Element {
    const icon: string = factor === +1 ? 'plus-circle' : 'minus-circle';

    return (
      <DynaFastClick
        className="dn-number--value-button"
        nodeType="div"
        onClick={this.handleButtonValueClick.bind(this, factor)}
      >{faIcon(icon)}</DynaFastClick>
    );
  }

  private getFormatedValue(): string {
    const {value, precision} = this.props;
    return roundToString(value, precision);
  }

  public render(): JSX.Element {
    const {
      style, color, mode, size,
      label, required,
      inputProps,
      validationMessage, footer,
    } = this.props;

    return (
      <DynaFieldWrapper
        className="dyna-number"
        mode={mode}
        style={style}
        color={color}
        size={size}
        inputElementSelector="input"
        label={label}
        required={required}
        validationMessage={validationMessage}
        footer={footer}
      >
        <div className="dn-number--input-content">
          {this.renderValueButton(-1)}
          <input
            readOnly
            value={this.getFormatedValue()}
            {...inputProps}
            onChange={e => this.handleChange(e.target.value)}
          />
          {this.renderValueButton(+1)}
        </div>
      </DynaFieldWrapper>
    );
  }
}
