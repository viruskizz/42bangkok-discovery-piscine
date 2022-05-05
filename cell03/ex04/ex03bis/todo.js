// const todo = ['aa', 'bbb', 'ccc'];
const todo = [];

$('document').ready(() => {
	renderList();
})

function renderList() {
	const id = '#ft_list'
	$(id).empty();
	todo.forEach((el, i) => createListElement(`todo${i}`, el).appendTo(id));
}

function newItem() {
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

function createListElement(id, value) {
	return $('<li>', {
		id,
		class: 'list-item',
		text: value,
		click: removeItem,
	});
}