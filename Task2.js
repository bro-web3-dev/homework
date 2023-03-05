'use strict';
    export function Calculator() {
      this.numsToBigInt = function(num){
        return BigInt(num);
      },
      this.sum = function (a, b){
        return (this.numsToBigInt(a) + this.numsToBigInt(b)).toString();
      },
      this.sub = function (a, b){
        return (this.numsToBigInt(a) - this.numsToBigInt(b)).toString();
      },
      this.mul = function (a, b){
        return (this.numsToBigInt(a) * this.numsToBigInt(b)).toString();
      },
      this.div = function (a, b){
        return (this.numsToBigInt(a) / this.numsToBigInt(b)).toString();
      }};



