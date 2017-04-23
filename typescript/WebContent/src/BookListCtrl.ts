import {myApp} from './app';

export class BookListCtrl{

	constructor($scope, BookService, KartService){
	$scope.books = BookService.getBooks();
	
	$scope.addToKart = function(book) {
		alert('Bought');
	}
	
	}

}

myApp.component('BookListCtrl', BookListCtrl);
