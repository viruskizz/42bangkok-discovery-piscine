const components = [
	'navbar',
	'home',
	'aboutme',
	'education',
	'expertise',
	'footer'
];
const path = './components';
for (const name of components) {
	fetch(`${path}/${name}.html`)
		.then(response => response.text())
		.then(data => {
			document.querySelector(name).innerHTML = data;
		}); 
}