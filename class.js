class fruit{
	constructor(name){
		this.name = name;
	}

	fol(){
		console.log(this.name+ ' is too much tasty')
	}

	static jackfruite(){
		console.log('Jack fruite is very popular')
	}
}

let add = new fruit('Mango');
add.fol(); 

fruit.jackfruite();