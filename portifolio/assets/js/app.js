var app = angular.module("mainApp",[]);

app.controller("myMainController",function($scope){
    $scope.idade = (new Date().getFullYear() - 2002);
    $scope.tempoDeServicos = new Date().getFullYear() - 2022
})
