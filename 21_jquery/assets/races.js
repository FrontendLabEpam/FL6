'use strict';

var colors = ['Red', 'White', 'Green', 'Blue', 'Yellow', 'Pink', 'Black']

function createCar(colorNumber) {
    return {
        color: colors[colorNumber]
    }
}

function launchCar(car) {
    var deferred = jQuery.Deferred();

    setTimeout(function() {
        console.log(car.color + ' car has reached finish line');
        deferred.resolve();
    }, Math.random() * 1000);

    return deferred.promise();
}

var red = createCar(0), green = createCar(2), blue = createCar(3);

$.when(launchCar(red), launchCar(green), launchCar(blue))
    .then(function() {
        console.log('Last has reached the finish!!!');
    });
