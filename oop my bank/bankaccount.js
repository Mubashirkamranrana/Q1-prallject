"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.AccountBalance = 100;
    }
    Object.defineProperty(BankAccount.prototype, "accountbalance", {
        get: function () {
            return this.AccountBalance;
        },
        set: function (amount) {
            this.AccountBalance = amount;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.Debit = function (amount) {
        var statement = chalk_1.default.redBright("Sorry! You have insufficient balance!");
        if (this.AccountBalance > 0) {
            statement = chalk_1.default.redBright("The amount you entered is wrong!");
            if (this.AccountBalance > amount) {
                this.AccountBalance -= amount;
                statement = "Transaction successfull! New account balance is ".concat(chalk_1.default.greenBright(this.AccountBalance));
            }
            else {
                statement = chalk_1.default.magentaBright("You don't have enough money to do this transaction");
            }
        }
        return statement;
    };
    BankAccount.prototype.Credit = function (amount) {
        var statement = chalk_1.default.redBright("Transaction failed!");
        if (amount > 0) {
            this.AccountBalance += amount;
            if (amount > 100) {
                this.AccountBalance -= 1;
            }
            statement = chalk_1.default.greenBright("Your account has been credited successfully!");
        }
        return statement;
    };
    return BankAccount;
}());
exports.default = BankAccount;
