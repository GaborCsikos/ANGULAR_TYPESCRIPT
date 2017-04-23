class HeaderCtrl{

	constructor($scope, $location){
		$scope.appDetails = {};
		$scope.appDetails.title = "BooKart";
		$scope.appDetails.tagline = "We have collection of 1 Million books";
	
		$scope.nav = {};
		$scope.nav.isActive = function(path) {
			if (path === $location.path()) {
				return true;
			}
		
			return false;
		}

	}
}