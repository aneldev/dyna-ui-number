"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.faIcon = function (awesomeFontIconName, className) {
    if (className === void 0) { className = ''; }
    return React.createElement("i", { className: ("fa fa-" + awesomeFontIconName + " " + className).trim(), "aria-hidden": "true" });
};
//# sourceMappingURL=faIcon.js.map