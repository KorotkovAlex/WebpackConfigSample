webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(112);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactDom = __webpack_require__(53);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(54);

var _reactRouter = __webpack_require__(36);

var _propTypes = __webpack_require__(55);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuComponent = function (_React$Component) {
    (0, _inherits3.default)(MenuComponent, _React$Component);

    function MenuComponent(props) {
        (0, _classCallCheck3.default)(this, MenuComponent);
        return (0, _possibleConstructorReturn3.default)(this, (MenuComponent.__proto__ || (0, _getPrototypeOf2.default)(MenuComponent)).call(this, props));
    }

    (0, _createClass3.default)(MenuComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.reducer.basePath == '') {
                this.props.changeBasePath(this.props.basePath);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("MenuComponent" + (0, _stringify2.default)(this.props));
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { className: 'uk-card-default uk-card-body uk-list-divider uk-list uk-align-left' },
                    _react2.default.createElement(
                        'li',
                        { className: 'uk-text-center' },
                        'Menu'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: this.props.basePath + '/search' },
                            'Search'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: this.props.basePath + '/authorization' },
                            'Authorization'
                        )
                    )
                )
            );
        }
    }]);
    return MenuComponent;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        changeBasePath: function changeBasePath(event) {
            return dispatch({ type: 'CHANGE_BASE_PATH', value: event });
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return state;
};

var Menu = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MenuComponent);

exports.default = Menu;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};

/***/ })

});