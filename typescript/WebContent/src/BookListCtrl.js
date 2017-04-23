myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
	$scope.books = bookService.getBooks();
	
	$scope.addToKart = function(book) {
		alert('Bought');
	}
});