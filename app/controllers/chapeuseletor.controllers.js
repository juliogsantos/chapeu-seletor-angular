angular.module('chapeuseletor')
.controller('sorteioCtrl', function($scope, indiceAleatorioService, getNomesService){
    //debug no console
    //chamada ao serviço getNomes
    let nomes = getNomesService.getListaNomesArquivoJson().then(function(data){
        
        console.log(data.data)
        
        //console.log(data.data.map((o) => o.nome))
        //return data.data.map((o) => o.nome)
        return data.data
        }) 
    //teste índice aleatório     
    $scope.msg = indiceAleatorioService.sortear(4)

    //console.log(nomes.length)
    let selecionados 
}) 
  