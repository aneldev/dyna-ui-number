"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var dyna_ui_fast_click_1 = require("dyna-ui-fast-click");
var dyna_ui_field_wrapper_1 = require("dyna-ui-field-wrapper");
exports.EColor = dyna_ui_field_wrapper_1.EColor;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
var dyna_loops_1 = require("dyna-loops");
var faIcon_1 = require("./utils/faIcon");
require("./layout.less");
require("./color.less");
var DynaNumber = /** @class */ (function (_super) {
    __extends(DynaNumber, _super);
    function DynaNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaNumber.prototype.handleChange = function (value) {
        var _a = this.props, name = _a.name, precision = _a.precision, min = _a.min, max = _a.max, onChange = _a.onChange;
        if (!dyna_loops_1.isNumber(value))
            return;
        var n = dyna_loops_1.round(Number(value), precision);
        if (min != null && n < min)
            return;
        if (max != null && n > max)
            return;
        onChange && onChange(name, n);
    };
    DynaNumber.prototype.handleButtonValueClick = function (factor) {
        var _a = this.props, name = _a.name, step = _a.step, value = _a.value, min = _a.min, max = _a.max, onChange = _a.onChange;
        var newValue = value + (factor * step);
        if (min != null && newValue < min)
            return;
        if (max != null && newValue > max)
            return;
        onChange(name, newValue);
    };
    DynaNumber.prototype.renderValueButton = function (factor) {
        var touchTimeout = this.props.touchTimeout;
        var icon = factor === +1 ? 'plus-circle' : 'minus-circle';
        return (React.createElement(dyna_ui_fast_click_1.DynaFastClick, { className: "dn-number--value-button", nodeType: "div", touchTimeout: touchTimeout, onClick: this.handleButtonValueClick.bind(this, factor) }, faIcon_1.faIcon(icon)));
    };
    DynaNumber.prototype.getFormatedValue = function () {
        var _a = this.props, value = _a.value, precision = _a.precision;
        return dyna_loops_1.roundToString(value, precision);
    };
    DynaNumber.prototype.render = function () {
        var _this = this;
        var _a = this.props, style = _a.style, color = _a.color, mode = _a.mode, size = _a.size, label = _a.label, required = _a.required, inputProps = _a.inputProps, validationMessage = _a.validationMessage, footer = _a.footer;
        return (React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, { className: "dyna-number", mode: mode, style: style, color: color, size: size, inputElementSelector: "input", label: label, required: required, validationMessage: validationMessage, footer: footer },
            React.createElement("div", { className: "dn-number--input-content" },
                this.renderValueButton(-1),
                React.createElement("input", __assign({ readOnly: true, value: this.getFormatedValue() }, inputProps, { onChange: function (e) { return _this.handleChange(e.target.value); } })),
                this.renderValueButton(+1))));
    };
    DynaNumber.defaultProps = {
        mode: dyna_ui_field_wrapper_1.EMode.EDIT,
        style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
        color: dyna_ui_field_wrapper_1.EColor.WHITE_BLACK,
        size: dyna_ui_field_wrapper_1.ESize.MEDIUM,
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
        onChange: function (name, value) { return undefined; },
    };
    return DynaNumber;
}(React.Component));
exports.DynaNumber = DynaNumber;
//# sourceMappingURL=DynaNumber.js.map