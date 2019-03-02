"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            another.email === this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "a@email.com": new User("Usuario A", "a@email.com", "123456"),
    "b@email.com": new User("Usuario B", "b@email.com", "123456")
};
//# sourceMappingURL=users.js.map