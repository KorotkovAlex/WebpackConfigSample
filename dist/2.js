webpackJsonp([2],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(54);

var _propTypes = __webpack_require__(55);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainComponent = function (_React$Component) {
    (0, _inherits3.default)(MainComponent, _React$Component);

    function MainComponent(props) {
        (0, _classCallCheck3.default)(this, MainComponent);
        return (0, _possibleConstructorReturn3.default)(this, (MainComponent.__proto__ || (0, _getPrototypeOf2.default)(MainComponent)).call(this, props));
    }

    (0, _createClass3.default)(MainComponent, [{
        key: 'render',
        value: function render() {
            //this.props.children рендер всех дочерних компонентов(search,authorization). 
            //Зависит какие в MainArea.jsx вложенные Router 
            return _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2 uk-align-center uk-text-center' },
                'Main Area',
                this.props.children
            );
        }
    }]);
    return MainComponent;
}(_react2.default.Component);

exports.default = MainComponent;

/***/ })

});