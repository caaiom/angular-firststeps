function ListaComprasController($scope) {
    $scope.itens = [
        {produto: 'Nutella', quantidade: 2, comprado: false},
        {produto: 'Dentadura Fini', quantidade: 12, comprado: false}
    ];

  	$scope.adicionaItem = function () {
        $scope.itens.push({
        	produto: $scope.item.produto,
			quantidade: $scope.item.quantidade,
            comprado: false
        });
        $scope.item.produto = $scope.item.quantidade = '';
    };

    $scope.editaItem = function () {
    	$scope.item.push({
    		produto: $scope.item.produto,
    		quantidade: $scope.item.quantidade
    	}); 
    };

    $scope.removeItem = function (index) {
    	var deleteItem = confirm("Deseja realmente excluir o item?");
    	if (deleteItem) {
			$scope.itens.splice(index, 1);    		
    	};
    };
}