class BookListCtrl{

	constructor($scope, BookService, KartService){
	$scope.books = BookService.getBooks();
	
	$scope.addToKart = function(book) {
		alert('Bought');
	}
	
	}

}
