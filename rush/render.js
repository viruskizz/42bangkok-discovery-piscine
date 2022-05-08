const names = ['header', 'home', 'aboutme', 'footer'];
const path = './components';
for (const name of names) {
	fetch(`${path}/${name}.html`)
		.then(response => response.text())
		.then(data => {
			document.querySelector(name).innerHTML = data;
		}); 
}