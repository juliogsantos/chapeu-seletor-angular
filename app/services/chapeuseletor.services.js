angular.module('chapeuseletor')
.service('indiceAleatorioService', function() {
    this.sortear = function (numeroPossibilidades) {
        return Math.round(Math.random() * numeroPossibilidades)
    }
})
.service('getNomesService', function($http) { 
    this.getListaNomesArquivoJson = function(){
       $http.get('./app/local/nomes.json').then(function(data){
       console.log(data)
     }) 
   }
})
.service('page404Service', function() {
    this.erro404 = function () {
        return "Erro 404 - Página não encontrada!"
    }
})
.service('sortService', function(array) {
    this.sort = function (){
        let escolhido = array[Math.floor(Math.random() * array.length)]
        array.splice(array.indexOf(escolhido), 1)
        return escolhido
    }  
})
