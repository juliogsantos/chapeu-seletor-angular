angular.module('chapeuseletor')
.controller('sorteioCtrl', function($scope, indiceAleatorioService, getNomesService){
    
    $scope.lista = getNomesService.getListaNomesArquivoJson()
    $scope.selecionados  = [ ]
    console.log(Array.isArray($scope.lista))
    
    $scope.sorteio = function () {
        if(Object.keys($scope.lista).length > 0){

        }
    }
   
    $scope.msg = indiceAleatorioService.sortear(1)
    console.log() 
}) 
  