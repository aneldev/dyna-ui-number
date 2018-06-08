import * as React from "react";
import { EMode, EColor, EStyle, ESize } from "dyna-ui-field-wrapper";
import "./layout.less";
import "./color.less";
export { EColor, EStyle };
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
    precision?: number;
    validationMessage?: TContent;
    footer?: TContent;
    touchTimeout?: number;
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    onChange?: (name: string, value: number) => void;
}
export declare type TContent = string | JSX.Element;
export declare class DynaNumber extends React.Component<IDynaNumberProps> {
    static defaultProps: IDynaNumberProps;
    private handleChange;
    private handleButtonValueClick;
    private renderValueButton;
    private getFormatedValue;
    render(): JSX.Element;
}
