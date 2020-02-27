webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/LifeTimeline.js":
/*!*******************************!*\
  !*** ./pages/LifeTimeline.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LifeTimeline; });
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/affix/style */ "./node_modules/antd/lib/affix/style/index.js");
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-gsap */ "./node_modules/react-gsap/dist/index.es.js");












var _jsxFileName = "/Users/calvin.korver/code_private/new_next/pages/LifeTimeline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;
 // import Datapoint from './Datapoint';




var LifeTimeline =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(LifeTimeline, _React$Component);

  function LifeTimeline(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, LifeTimeline);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(LifeTimeline).call(this, props));
    _this.state = {
      width: 0,
      height: 0
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(LifeTimeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var lineLength = .75 * this.state.width;
      var midpoint = 600 / 2; // const x_arr = [75, 340, 540, 630, 840];

      var triggers = ['#t1', '#t2', '#t3', '#t4'];
      var x_arr = [350, 650, 850, 1050];
      var timeline_adjust_right = this.state.width + 50;
      var timeline_points = x_arr.map(function (element, i) {
        var down = i % 2 == 0 ? false : true;
        var x_change = -1 * timeline_adjust_right;
        return __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_14__["Controller"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_14__["Scene"], {
          triggerElement: triggers[i],
          duration: 1000,
          pin: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, function (progress) {
          return __jsx(react_gsap__WEBPACK_IMPORTED_MODULE_15__["Tween"], {
            from: {
              css: {},
              attr: {
                transform: 'translate(0 0)'
              },
              ease: 'Power1'
            },
            to: {
              css: {
                opacity: '1'
              },
              attr: {
                transform: 'translate(' + x_change + ' 0)'
              },
              ease: 'Strong.easeOut',
              duration: '100'
            },
            totalProgress: progress,
            paused: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("g", {
            id: "animate3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, __jsx(DataPoint, {
            midpoint: midpoint,
            xPoint: x_arr[i] + timeline_adjust_right,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }), __jsx(DataLine, {
            midpoint: midpoint,
            xPoint: x_arr[i] + timeline_adjust_right,
            up: down,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }), __jsx(Image, {
            x: x_arr[i] - 30 + timeline_adjust_right,
            y: midpoint + (down ? -150 : 90),
            midpoint: midpoint,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          })));
        }));
      });
      console.log(this.state.width);
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_5___default.a, {
        offsetTop: 300,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("svg", {
        width: "100%",
        height: midpoint * 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_14__["Controller"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_14__["Scene"], {
        triggerElement: "#t1",
        duration: 1000,
        pin: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, function (progress) {
        return __jsx(react_gsap__WEBPACK_IMPORTED_MODULE_15__["Tween"], {
          to: {
            attr: {
              x1: '200'
            },
            cx: '200'
          },
          ease: "Strong.easeOut",
          totalProgress: progress,
          paused: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, __jsx("line", {
          className: "timeline",
          x1: _this2.state.width * 0.7,
          y1: midpoint,
          x2: "100%",
          y2: midpoint,
          style: {
            strokeWidth: 4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), __jsx("circle", {
          className: "label-circle",
          cx: _this2.state.width * 0.7,
          cy: midpoint,
          r: "9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }));
      })), timeline_points, __jsx("text", {
        x: "95%",
        fill: "black",
        fontSize: "24px",
        textAnchor: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("tspan", {
        x: "95%",
        y: midpoint - 80,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "living in Oakland, CA. "), __jsx("tspan", {
        x: "95%",
        y: midpoint - 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "from Seattle. ")), __jsx("text", {
        x: "97%",
        fill: "black",
        fontSize: "24px",
        textAnchor: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("tspan", {
        x: "97%",
        y: midpoint + 80,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "passionate about data science, music,"), __jsx("tspan", {
        x: "97%",
        y: 400 + 110,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "weather, and all things skiing."))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        span: 24,
        style: {
          height: '100px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("div", {
        id: "t1",
        style: {
          color: 'black',
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "TRIGGER"))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        span: 24,
        style: {
          height: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        id: "t2",
        style: {
          color: 'black',
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), "TRIGGER 2/>")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        span: 24,
        style: {
          height: '500px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("div", {
        id: "t3",
        style: {
          color: 'black',
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), "TRIGGER 3/>")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        span: 24,
        style: {
          height: '1000px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("div", {
        id: "t4",
        style: {
          color: 'black',
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), "TRIGGER 4/>")));
    }
  }]);

  return LifeTimeline;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



function DataPoint(props) {
  return __jsx("circle", {
    className: "label-circle",
    cx: props.xPoint,
    cy: props.midpoint,
    r: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  });
}

function DataLine(props) {
  return __jsx("line", {
    className: "label-line-color",
    x1: props.xPoint,
    y1: props.midpoint,
    x2: props.xPoint,
    y2: props.up ? props.midpoint - 85 : props.midpoint + 85,
    style: {
      strokeWidth: 3,
      strokeDasharray: 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  });
}

function Image(props) {
  return __jsx("rect", {
    x: props.x,
    y: props.y,
    width: "60",
    height: "60",
    style: {
      strokeWidth: 1,
      stroke: 'black',
      strokeDasharray: 4,
      fill: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.7a1eb30050aece1e102b.hot-update.js.map