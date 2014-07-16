//index.js
//
//
//
//
//
//Z. Ames 7/14/14
//
//
/*jshint -W069*/
///*global prompt:true*/
'use strict';

//var prompt = require('sync-prompt').prompt;
var Pet = require('./models/pet.js');

var p1 = new Pet ('fredrick', 7, 'male', 'camel');
var p2 = new Pet ('lassy', 4, 'female', 'bee');

p1.walk();
p1.eat();
p1.sleep();

while(!p2.isZombie){
  console.log(p2);
  p1.attack(p2);
}
console.log('The winner is',p1);
console.log('The loser is',p2);
