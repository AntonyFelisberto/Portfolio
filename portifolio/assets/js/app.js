var app = angular.module('mainApp', ['pascalprecht.translate'])

app.config(['$translateProvider',
  function($translateProvider) {

    $translateProvider.useStaticFilesLoader({
            prefix: 'assets/js/translation_',
            suffix: '.json'
        });
        
    $translateProvider.preferredLanguage("en");
  }
]);

app.controller('myMainController', function msgController($scope,$translate) {
    $scope.idade = (new Date().getFullYear() - 2002);
    $scope.tempoDeServicos = new Date().getFullYear() - 2021

    var _this = this;

    this.versions = {
      ajs: angular.version.full,
      translate: $translate.versionInfo()
    };
    
    this.currentLanguage = $translate.use();
  
    this.chooseLanguage = function (lang) {
      $translate.use(lang)
      .then(function (languageId) {
        _this.currentLanguage = languageId;
      });
    };
});