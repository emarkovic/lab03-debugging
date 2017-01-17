"use strict";
var StringBuilder = (function () {
    function StringBuilder(input) {
        this.data = input;
    }
    StringBuilder.prototype.getString = function () {
        return this.data;
    };
    StringBuilder.prototype.setString = function (data) {
        this.data = data;
    };
    StringBuilder.prototype.reverse = function () {
        var chars = this.data.split('');
        var end = chars.length - 1;
        for (var i = 0; i < chars.length / 2; i++) {
            var cTmp = chars[i];
            chars[i] = chars[chars.length - 1 - i];
            chars[chars.length - 1 - i] = cTmp;
        }
        this.data = chars.join('');
    };
    return StringBuilder;
}());
var processor = new StringBuilder('woah');
console.log(processor.getString());
processor.reverse();
console.log(processor.getString());
processor.setString('hello');
console.log(processor.getString());
processor.reverse();
console.log(processor.getString());
//# sourceMappingURL=stringBuilder.js.map