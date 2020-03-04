var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Father = /** @class */ (function () {
    function Father(name) {
        this._name = name;
    }
    Father.prototype.getName = function () {
        return this._name;
    };
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
    }
    return Son;
}(Father));

