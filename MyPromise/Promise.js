// types for promise
// My Promise class
var MyPromise = /** @class */ (function () {
    function MyPromise(initializer) {
        var _this = this;
        this.thenCallback = null;
        this.catchCallBack = null;
        this.then = function (thenCallback) {
            _this.thenCallback = thenCallback;
            return _this;
        };
        this["catch"] = function (catchCallback) {
            _this.catchCallBack = catchCallback;
            return _this;
        };
        this.resolve = function (value) {
            var _a;
            (_a = _this.thenCallback) === null || _a === void 0 ? void 0 : _a.call(_this, value);
        };
        this.reject = function (reason) {
            var _a;
            (_a = _this.catchCallBack) === null || _a === void 0 ? void 0 : _a.call(_this, reason);
        };
        initializer(this.resolve, this.reject);
    }
    return MyPromise;
}());
var promise = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve(5);
    }, 1000);
}).then(function (res) { return console.log(res); })["catch"](function (err) { return console.log(err); });
