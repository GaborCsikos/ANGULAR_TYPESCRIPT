import {myApp} from './app';

export class KartService{

	constructor(){
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
	}
	

}
myApp.component('KartService', KartService);