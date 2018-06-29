function novoToque(x,y) {
	let toque = document.createElement('i');
	['fas','fa-dot-circle', 'toque']
		.forEach(e => toque.classList.add(e));
	toque.style.left = x + 'px';
	toque.style.top = y + 'px';
	return toque;
}

function posicionarMarcadores() {
	// TODO: tem que posicionar dos dois atletas
	let deslocamentoX = 14;
	let deslocamentoY = 5;
	let atleta = document.querySelector('#atleta1');
	let x = y = 0;

	let cabeca = document.querySelector('.cabeca');
	let centroX = (m) => atleta.width / 2 - m.offsetWidth / 2 + deslocamentoX;

	x = centroX(cabeca);
	y = atleta.y + atleta.height / 5 - cabeca.offsetHeight / 2 - deslocamentoY;
	cabeca.style.left = x + 'px';
	cabeca.style.top = y + 'px';

	let tronco = document.querySelector('.tronco');
	x = centroX(tronco);
	y = atleta.y + atleta.height / 2 - tronco.offsetHeight / 2 + deslocamentoY;
  tronco.style.left = x + 'px';
  tronco.style.top = y + 'px';

	let bracoEsq = document.querySelector('.braco.esquerdo');
	x = centroX(bracoEsq) - 20;
	y = atleta.y + atleta.height / 4 + deslocamentoY - 2;
	bracoEsq.style.left = x + 'px';
	bracoEsq.style.top = y + 'px';

	let bracoDir = document.querySelector('.braco.direito');
	x = centroX(bracoDir) + 20;
	y = atleta.y + atleta.height / 4 + deslocamentoY - 2;
	bracoDir.style.left = x + 'px';
	bracoDir.style.top = y + 'px';
}
