angular.module('rainingCatzAndDogz')
	.controller('dogCtrl', function($scope, dogServ, $state) {
	
		var dogArr = dogServ.allDogs;
		$scope.dogz = dogArr;
		$scope.Dog = '';

		for (var i = 0; i < dogArr.length; i++) {
			if (dogArr[i].breed === $state.params.dogID) {
				$scope.Dog = dogArr[i];
			}
		}
});