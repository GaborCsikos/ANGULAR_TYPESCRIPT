"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var BookListCtrl = (function () {
    function BookListCtrl($scope, BookService, KartService) {
        $scope.books = BookService.getBooks();
        $scope.addToKart = function (book) {
            alert('Bought');
        };
    }
    return BookListCtrl;
}());
exports.BookListCtrl = BookListCtrl;
app_1.myApp.component('BookListCtrl', BookListCtrl);
