var BookListCtrl = (function () {
    function BookListCtrl($scope, bookService, kartService) {
        $scope.books = bookService.getBooks();
        $scope.addToKart = function (book) {
            alert('Bought');
        };
    }
    return BookListCtrl;
}());
