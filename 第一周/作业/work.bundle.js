"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButtom = function () {
    function PraiseButtom(zan) {
        _classCallCheck(this, PraiseButtom);

        this.num = zan ? zan : 0;
    }

    _createClass(PraiseButtom, [{
        key: "Praise",
        value: function Praise() {
            this.num++;
        }
    }]);

    return PraiseButtom;
}();

var Thumb = function (_PraiseButtom) {
    _inherits(Thumb, _PraiseButtom);

    function Thumb(zan, el, callback) {
        _classCallCheck(this, Thumb);

        var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, zan));

        _this.el = el;
        if (el.length > 0) {
            var that = _this;
            el.click(function () {
                that.Praise();
                callback(that.num);
                console.log(that);
            });
        }

        return _this;
    }

    return Thumb;
}(PraiseButtom);

module.exports = Thumb;
