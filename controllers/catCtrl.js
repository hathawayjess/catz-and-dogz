angular.module('rainingCatzAndDogz')
	.controller('catCtrl', function($scope, catServ, $state) {

		var catArr = catServ.allCats;
		$scope.catz = catArr;
		$scope.Cat = '';

		for (var i = 0; i < catArr.length; i++) {
			if (catArr[i].breed === $state.params.catID) {
				$scope.Cat = catArr[i];
			}
		}
});