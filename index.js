"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.Checkbox = exports.NormalField = exports.HorizontalField = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function parameterize(string) {
  return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}

var DefaultInput = function DefaultInput(_ref) {
  var type = _ref.type,
      name = _ref.name,
      required = _ref.required,
      options = _objectWithoutProperties(_ref, ["type", "name", "required"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, _extends({
    id: parameterize(name),
    type: type,
    name: name,
    placeholder: name,
    required: required,
    "aria-label": name
  }, options));
};

var HorizontalField = function HorizontalField(_ref2) {
  var label = _ref2.label,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'text' : _ref2$type,
      _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? 'Default Name' : _ref2$name,
      _ref2$required = _ref2.required,
      required = _ref2$required === void 0 ? true : _ref2$required,
      children = _ref2.children,
      className = _ref2.className,
      options = _objectWithoutProperties(_ref2, ["label", "type", "name", "required", "children", "className"]);

  var default_input = /*#__PURE__*/_react["default"].createElement(DefaultInput, _extends({
    name: name,
    required: required,
    type: type
  }, options));

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    row: true,
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": parameterize(name),
    sm: 4
  }, label ? label : name, required ? '*' : ''), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    sm: 8
  }, children ? children : default_input));
};

exports.HorizontalField = HorizontalField;

var Checkbox = function Checkbox(_ref3) {
  var name = _ref3.name,
      text = _ref3.text,
      options = _objectWithoutProperties(_ref3, ["name", "text"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    check: true,
    className: "mb-2"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": parameterize(name),
    check: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, _extends({
    id: parameterize(name),
    type: "checkbox",
    name: name
  }, options)), ' ', text));
};

exports.Checkbox = Checkbox;

var NormalField = function NormalField(_ref4) {
  var label = _ref4.label,
      _ref4$name = _ref4.name,
      name = _ref4$name === void 0 ? 'Default Name' : _ref4$name,
      _ref4$type = _ref4.type,
      type = _ref4$type === void 0 ? 'text' : _ref4$type,
      _ref4$required = _ref4.required,
      required = _ref4$required === void 0 ? true : _ref4$required,
      children = _ref4.children,
      className = _ref4.className,
      options = _objectWithoutProperties(_ref4, ["label", "name", "type", "required", "children", "className"]);

  var label_text = typeof label !== 'undefined' ? label : name;

  var default_input = /*#__PURE__*/_react["default"].createElement(DefaultInput, _extends({
    type: type,
    name: name,
    required: required
  }, options));

  var input = children == null ? default_input : children;
  var asterix = required && label != false;
  var labelIfPresent = label !== false ? /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": parameterize(name)
  }, label_text, asterix ? '*' : '') : '';
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    className: className
  }, labelIfPresent, input);
};

exports.NormalField = NormalField;
var components = {
  horizontal: HorizontalField,
  normal: NormalField
};

var SelectOptions = function SelectOptions(_ref5) {
  var options = _ref5.options,
      name = _ref5.name,
      defaultValue = _ref5.defaultValue,
      required = _ref5.required,
      opts = _objectWithoutProperties(_ref5, ["options", "name", "defaultValue", "required"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, _extends({
    type: "select",
    id: parameterize(name),
    name: name,
    defaultValue: defaultValue
  }, opts, {
    required: required
  }), options.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: option.value,
      disabled: option.disabled ? option.disabled : false
    }, option.name ? option.name : option.value);
  }));
};

var Select = function Select(_ref6) {
  var label = _ref6.label,
      _ref6$fieldType = _ref6.fieldType,
      fieldType = _ref6$fieldType === void 0 ? 'horizontal' : _ref6$fieldType,
      _ref6$name = _ref6.name,
      name = _ref6$name === void 0 ? 'Default Name' : _ref6$name,
      _ref6$required = _ref6.required,
      required = _ref6$required === void 0 ? true : _ref6$required,
      options = _ref6.options,
      defaultValue = _ref6.defaultValue,
      opts = _objectWithoutProperties(_ref6, ["label", "fieldType", "name", "required", "options", "defaultValue"]);

  var Field = components[fieldType];
  var selectHash = options; // can pass either simple array eg. [1, 2, 3]
  // or can pass array with objects [{name: 1, value: 1, disabled: true}, {name: 2, value: 2}]
  // if simple array, must be converted into objects

  if (Array.isArray(options) && options[0].constructor !== Object) {
    selectHash = options.map(function (option) {
      return {
        value: option
      };
    });
  }

  return /*#__PURE__*/_react["default"].createElement(Field, _extends({
    label: label,
    name: name,
    required: required
  }, opts), options ? /*#__PURE__*/_react["default"].createElement(SelectOptions, {
    name: name,
    options: selectHash,
    defaultValue: defaultValue,
    required: required
  }) : null);
};

exports.Select = Select;
