/*global dancersData*/
'use strict';

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  for (var i = 0; i < dancersData.length; i++) {
    var dancer_i = dancersData[i];
    var sex = dancer_i.sex;
    var name = dancer_i.name;
    var dancer = new Dancer(name, sex);
    if (sex === 'F') {
      females.enqueue(dancer);
    } else {
      males.enqueue(dancer);
    }
  }
}

function dance(males, females) {
  console.log('The dance partener are:\n');
  var person;
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    console.log('Female dancer is: ' + person.name);
    person = males.dequeue();
    console.log(' and the male dancer is: ' + person.name + '\n');
  }
}
