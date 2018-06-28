function novoToque(x,y) {
	let toque = document.createElement('i');
	['fas','fa-dot-circle', 'toque']
		.forEach(e => toque.classList.add(e));
	toque.style.left = x + 'px';
	toque.style.top = y + 'px';
	return toque;
}