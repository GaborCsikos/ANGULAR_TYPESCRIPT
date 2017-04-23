myApp.factory("kartService", function() {
	var kart = [];
	
	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart.push(book);
		},
		buy: function(book) {
			alert("Thanks for buying: " + book.name);
		}
	}
});