// const todo = ['aa', 'bbb', 'ccc'];
const todo = [];

window.onload = () => {
	if (todo.length > 0) {
		renderList();
	}
}
function newItem(event) {
	let value = prompt("Please enter your new todo");
	todo.unshift(value);
	renderList();
};

function removeItem(event) {
	const value = event.target.textContent;
	const confirm = window.confirm(`Do you want to remove "${value}"`);
	if (confirm) {
		const index = todo.findIndex(el => el === value);
		todo.splice(index, 1);
		renderList();
	}
}

function renderList() {
	const idName = 'todo';
	const elments = [];
	const list = document.getElementById('ft_list');
	todo.forEach((el, i) => {
		const item = createListElement(idName + i, el);
		elments.push(item);
	});
	list.replaceChildren(...elments);
}

function createListElement(id, value) {
	li = document.createElement('li');
	li.id = id;
	li.className = 'list-item';
	li.addEventListener('click', (event) => removeItem(event));
	li.textContent = value;
	return li;
}