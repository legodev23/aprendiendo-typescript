// Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = "hola";
var myNumber = 2;
var myBool = true;
var myVar = "cualquier tipo de dato.";
// Arrays
var stringArray = ["asd", "234", ""];
// Tuple
var strNumArray = ["hi!", 23];
// Void, Null, Undefined
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var getSum2 = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// lastName es opcional
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function showToDo(todo) {
    console.log(todo.title + ": " + todo.text);
}
var myToDo = {
    title: "Aprender TypeScript con React",
    text: "Lorem"
};
showToDo(myToDo);
// Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        return this.name + " is registered!";
    };
    User.prototype.AgeInYear = function () {
        return this.age + " Years old.";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Leonardo = new User("Leonardo", "legodev23@gmail.com", 21);
var Eleazar = new Member(3, "Eleazar", "ele@prueba.com", 25);
Eleazar.payInvoice();
document.write(Leonardo.AgeInYear());
