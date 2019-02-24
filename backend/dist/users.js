"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "usuario1@email.com": new User('Usuario 01', 'usuario1@email.com', '123456'),
    "usuariow@email.com": new User('Usuario 02', 'usuario2@email.com', '123456')
};
