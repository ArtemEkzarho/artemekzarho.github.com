'use strict';

var myApp=angular.module('myApp');
myApp.controller('phoneController', function($scope) {
  
    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    },{
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: {
            name: 'Samsung',
            country: 'Республика Корея'
        }
    },{
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: {
            name: 'Xiaomi',
            country: 'Китай'
        }
    }];

    $scope.tablets = [{
        name: 'Samsung Galaxy Tab S4',
        year: 2014,
        price: 300,
        company: 'Samsung'
    },{
        name: 'LG G PAD 8.3',
        year: 2013,
        price: 180,
        company: 'LG'
    },{
        name: 'IdeaTab A8',
        year: 2014,
        price: 220,
        company: 'Lenovo'
    }];

    $scope.data = {};
    $scope.setFile = function () {
        if ($scope.data.mode = 'Tablets') {
            return 'tabletsList.html';
        } else {
            return 'phonesList.html';
        }
    };

    $scope.modes = [{
            value: 'Tablets',
            label: 'Планшеты'
        },{
            value: 'Phones',
            label: 'Смартфоны'
    }];
});