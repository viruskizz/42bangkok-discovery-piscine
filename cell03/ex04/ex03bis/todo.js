function newItem() {
	let value = prompt("Please enter your new todo");
	createListElement(value).prependTo('#ft_list');
};

function removeItem(event) {
	const target = $(event.currentTarget);
	const value = target.text();
	const confirm = window.confirm(`Do you want to remove "${value}"`);
	if (confirm) {
		target.remove();
	}
}

function createListElement(value) {
	return $('<li>', {
		class: 'list-item',
		text: value,
		click: removeItem,
	});
}