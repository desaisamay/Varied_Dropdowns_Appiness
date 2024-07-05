var app = angular.module('myApp', ['isteven-multi-select']);

app.controller('myController', function($scope){
    $scope.myArray = [
      {name:'Rahul'},
       {name:'Sudan'},
        {name:'Mayank'},
         {name:'Arunraj'},
    ];
    
});