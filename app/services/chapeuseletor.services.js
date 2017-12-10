angular.module('chapeuseletor')
.service('indiceAleatorioService', function() {
    this.sortear = function (numeroPossibilidades) {
        return Math.round(Math.random() * numeroPossibilidades)
    }
})
.service('getNomesService', function($http) { 
    this.getListaNomesArquivoJson = function(){
        return $http.get('./app/local/nomes.json')
    }
})
.service('page404Service', function() {
    this.erro404 = function () {
        return "Erro 404 - Página não encontrada!"
    }
})