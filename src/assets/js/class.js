console.log('-------> Class');

// Class
class List {
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.push(data);
		console.log(this.data);
	}

	// static method
	static Calc(a, b) {
		return a + b;
	}
}

// Class extends
class TodoList extends List {
	constructor() {
		super();

		this.user = 'Iorgen';
	}

	showUser() {
		console.log(this.user);
	}
}

// Object
var myList = new TodoList();
document.getElementById('newTodo').onclick = function () {
	myList.add('New Todo');
}
myList.showUser();

// Call to static method
console.log(TodoList.Calc(10, 15));
