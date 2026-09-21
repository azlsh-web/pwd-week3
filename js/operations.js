"use strict";
const add = (left, right) => left + right;
const subtract = (left, right) => left - right;
const multiply = (left, right) => left * right;
const divide = (left, right) => {
    if (right === 0)
        throw new Error('0으로 나눌 수 없습니다.');
    return left / right;
};
// 함수도 값이므로 객체에 보관하고 다른 함수의 인수로 전달할 수 있습니다.
const operations = { '+': add, '-': subtract, '*': multiply, '/': divide };
function calculate(left, right, operation) {
    return operation(left, right);
}
