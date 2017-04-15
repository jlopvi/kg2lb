'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kg2lb = kg2lb;
exports.lb2kg = lb2kg;
function kg2lb(number) {
  return (number * 2.20462).toFixed(2) + 'lb';
}
function lb2kg(number) {
  return (number * 0.453592).toFixed(2) + 'kg';
}