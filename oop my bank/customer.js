"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var bankaccount_js_1 = require("./bankaccount.js");
var Customer = /** @class */ (function () {
    function Customer() {
        this.bankAccount = new bankaccount_js_1.default();
        this.Firstname = "";
        this.Lastname = "";
        (this.Gender = "Male"), (this.Age = 0), (this.MobileNumber = "");
    }
    Object.defineProperty(Customer.prototype, "firstname", {
        get: function () {
            return this.Firstname;
        },
        set: function (f_name) {
            this.Firstname = f_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastname", {
        get: function () {
            return this.Lastname;
        },
        set: function (l_name) {
            this.Lastname = l_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "gender", {
        get: function () {
            return this.Gender;
        },
        set: function (getGender) {
            this.Gender = getGender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this.Age;
        },
        set: function (getAge) {
            this.Age = getAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "mobileNumber", {
        get: function () {
            return this.MobileNumber;
        },
        set: function (m_number) {
            this.MobileNumber = m_number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "bankAccountBalance", {
        get: function () {
            return this.bankAccount.accountbalance;
        },
        set: function (amount) {
            this.bankAccount.accountbalance = amount;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.customerInfo = function () {
        return "\n            ".concat(chalk_1.default.yellowBright("Date: ".concat(new Date())), "\n            \n            Account Holder Name: ").concat(chalk_1.default.greenBright("".concat(this.Firstname, " ").concat(this.Lastname)), "\n            Gender: ").concat(chalk_1.default.greenBright(this.Gender), "\n            Age: ").concat(chalk_1.default.greenBright(this.Age), "\n            Mobile No: ").concat(chalk_1.default.greenBright(this.MobileNumber), "\n            Bank Balance: ").concat(chalk_1.default.greenBright(this.bankAccount.accountbalance), "\n            ");
    };
    return Customer;
}());
exports.default = Customer;
