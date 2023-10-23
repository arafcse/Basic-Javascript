const Mango = {
	color: 'Yellow',
	price: 120,
	weight: 130,
	about: function(){
		// return 'This mango price is '+this.price+' USD';
		return `This Mangoo Color is ${this.color} Name`;
	}
}

console.log(Mango.about());