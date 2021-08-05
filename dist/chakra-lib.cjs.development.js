'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactSelect = _interopDefault(require('react-select'));
var react = require('@chakra-ui/react');
var icons = require('@chakra-ui/icons');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children", "name"];
var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return React.createElement(react.FormLabel, Object.assign({
    htmlFor: name,
    fontSize: "0.84rem",
    width: "100%",
    mb: "6px"
  }, props), children);
};

var _excluded$1 = ["name", "value", "options", "isMulti", "isInvalid", "leftAddon", "label"];
var Select = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var name = _ref.name,
      value = _ref.value,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$isMulti = _ref.isMulti,
      isMulti = _ref$isMulti === void 0 ? false : _ref$isMulti,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var themeBgControl = react.useColorModeValue('#ffffff', 'inherit');
  var themeColorSingleValue = react.useColorModeValue('#000000', '#ffffff');
  var themeControlBorderColor = react.useColorModeValue('#E2E8F0', 'rgba(255, 255, 255, 0.16)');
  var themeControlBorderColorFocused = react.useColorModeValue('#3182ce', '#63b3ed');
  var themeControlBoxShadowFocused = react.useColorModeValue('0 0 0 1px #3182ce', '0 0 0 1px #63b3ed');
  var themeControlBorderColorHoverFocused = react.useColorModeValue('#3182ce', '#63b3ed');
  var themeControlBorderColorHover = react.useColorModeValue('#CBD5E0', 'rgba(255, 255, 255, 0.24)');
  var themeBgMenuList = react.useColorModeValue('#ffffff', '#2D3748');
  var themeBgOptionSelected = react.useColorModeValue('#3182ce', '#90cdf4');
  var themeBgOptionHoverSelected = react.useColorModeValue('#3182ce', '#90cdf4');
  var themeBgOptionHover = react.useColorModeValue('#EDF2F6', 'rgba(255, 255, 255, 0.06)');
  var themeColorOptionActiveSelected = react.useColorModeValue('#000000', '#000000');
  var themeColorOptionActive = react.useColorModeValue('#3182ce', 'rgba(255, 255, 255, 0.80)');
  var themeColorOption = react.useColorModeValue('#ffffff', '#000000');
  var themeColorOptionSelected = react.useColorModeValue('#000000', '#ffffff');
  var themePlaceholderColor = react.useColorModeValue('#A0AEC0', 'rgba(255, 255, 255, 0.24)');
  var themeColorNoOptionsMessage = react.useColorModeValue('#A0AEC0', 'rgba(255, 255, 255, 0.24)');
  var themeBgMultiValue = react.useColorModeValue('#EDF2F7', '#2D3748');
  var themeColorMultiValueLabel = react.useColorModeValue('#000000', '#fffff');
  var themeColorInput = react.useColorModeValue('#000000', '#ffffff');
  var themeColorInvalid = react.useColorModeValue('#e53e3e', '#FC8181');
  var themeShadowInvalid = react.useColorModeValue('0 0 0 1px #e53e3e', '0 0 0 1px #FC8181');
  var indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginBottom: 8,
    marginTop: 8,
    width: 0
  };

  var IndicatorSeparator = function IndicatorSeparator(_ref2) {
    var innerProps = _ref2.innerProps;
    return React.createElement("span", Object.assign({
      style: indicatorSeparatorStyle
    }, innerProps));
  };

  var LoadingIndicator = function LoadingIndicator() {
    return React.createElement(react.Spinner, {
      color: "blue.500",
      size: "xs"
    });
  };

  var DropdownIndicator = function DropdownIndicator(_ref3) {
    var innerProps = _ref3.innerProps;
    return React.createElement(react.Flex, Object.assign({
      alignItems: "center",
      alignContent: "center"
    }, innerProps), React.createElement(react.Icon, {
      as: icons.ChevronDownIcon,
      fontSize: "1.5rem"
    }));
  };

  var ClearIndicator = function ClearIndicator(_ref4) {
    var innerProps = _ref4.innerProps;
    return React.createElement(react.Flex, Object.assign({
      alignItems: "center",
      alignContent: "center",
      width: "20px"
    }, innerProps), React.createElement(react.Icon, {
      as: icons.SmallCloseIcon,
      fontSize: "1.1rem"
    }));
  };

  var LoadingMessage = function LoadingMessage(config) {
    return React.createElement("div", Object.assign({}, config.innerProps, {
      style: config.getStyles('loadingMessage', config)
    }), "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
  };

  var customStyles = {
    control: function control(provided, state) {
      var isFocused = state.isFocused;
      var isSearchable = state.selectProps.isSearchable;
      return _extends({}, provided, {
        borderColor: isInvalid ? themeColorInvalid : isFocused ? themeControlBorderColorFocused : themeControlBorderColor,
        boxShadow: isInvalid ? themeShadowInvalid : isFocused && themeControlBoxShadowFocused,
        padding: isSearchable ? '0.063rem 0.5rem 0.063rem 0.34rem' : '0.313rem 0.5rem 0.313rem 0.3rem',
        backgroundColor: themeBgControl,
        transition: '0.3s',
        borderRadius: '0.375rem',
        '&:hover': {
          borderColor: isInvalid ? themeColorInvalid : isFocused ? themeControlBorderColorHoverFocused : themeControlBorderColorHover,
          boxShadow: isInvalid && '0 0 0 1px #fffff'
        }
      });
    },
    menu: function menu(provided) {
      return _extends({}, provided, {
        backgroundColor: 'inherit',
        zIndex: 999,
        borderWidth: '1px',
        //borderColor: '#E2E8F0',
        borderRadius: '0.375rem',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)'
      });
    },
    menuList: function menuList(provided) {
      return _extends({}, provided, {
        backgroundColor: themeBgMenuList,
        transition: 'background-color 220ms,color 220ms',
        borderRadius: '0.25rem'
      });
    },
    option: function option(provided, state) {
      var isSelected = state.isSelected;
      return _extends({}, provided, {
        backgroundColor: isSelected && themeBgOptionSelected,
        color: isSelected ? themeColorOption : themeColorOptionSelected,
        ':active': {
          color: isSelected ? themeColorOptionActiveSelected : themeColorOptionActive
        },
        ':hover': _extends({}, provided[':hover'], {
          backgroundColor: isSelected ? themeBgOptionHoverSelected : themeBgOptionHover
        })
      });
    },
    multiValue: function multiValue(provided) {
      return _extends({}, provided, {
        backgroundColor: themeBgMultiValue
      });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _extends({}, base, {
        color: themeColorMultiValueLabel
      });
    },
    dropdownIndicator: function dropdownIndicator(provided) {
      return _extends({}, provided, {
        color: '#1A202C',
        ':hover': '#1A202C'
      });
    },
    clearIndicator: function clearIndicator(provided) {
      return _extends({}, provided, {
        color: '#1A202C',
        ':hover': '#1A202C'
      });
    },
    singleValue: function singleValue(provided, state) {
      var opacity = state.isDisabled ? 0.5 : 1;
      var transition = 'opacity 300ms';
      return _extends({}, provided, {
        opacity: opacity,
        transition: transition,
        color: themeColorSingleValue
      });
    },
    placeholder: function placeholder(base) {
      return _extends({}, base, {
        fontSize: '1em',
        color: themePlaceholderColor
      });
    },
    noOptionsMessage: function noOptionsMessage(base) {
      return _extends({}, base, {
        color: themeColorNoOptionsMessage
      });
    },
    input: function input(base) {
      return _extends({}, base, {
        fontSize: '1em',
        color: themeColorInput
      });
    }
  };

  var customTheme = function customTheme(theme) {
    return _extends({}, theme, {
      borderRadius: 4
    });
  };

  var getValue = function getValue() {
    if (!isMulti) {
      return options.find(function (item) {
        return item.value === value;
      });
    } else {
      return value;
    }
  };

  return React.createElement(react.FormControl, {
    isInvalid: isInvalid
  }, label && React.createElement(FormLabel, null, label), React.createElement(ReactSelect, Object.assign({
    ref: ref,
    options: options,
    name: name,
    isMulti: isMulti,
    styles: customStyles,
    components: {
      IndicatorSeparator: IndicatorSeparator,
      LoadingIndicator: LoadingIndicator,
      LoadingMessage: LoadingMessage,
      DropdownIndicator: DropdownIndicator,
      ClearIndicator: ClearIndicator
    },
    noOptionsMessage: function noOptionsMessage() {
      return 'Нет опций';
    },
    theme: customTheme,
    value: getValue()
  }, props)));
});

exports.Select = Select;
//# sourceMappingURL=chakra-lib.cjs.development.js.map
