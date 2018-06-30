function novoToque(x,y) {
	let toque = document.createElement('i');
	['fas','fa-dot-circle', 'toque']
		.forEach(e => toque.classList.add(e));
	toque.style.left = x + 'px';
	toque.style.top = y + 'px';
	return toque;
}

function posicionarMarcadores(atleta) {
	// TODO: tem que posicionar dos dois atletas
	// FIXME: o posicionamento e o tamanho dos marcadores tem que seguir o tamanho da imagem do boneco, que varia conforme a resolução da tela

	//let atleta = document.querySelector('.atleta');
	let marcadores = atleta.querySelector('.marcadores');

	let img = atleta.querySelector('img');
	let offsetX = img.x;
	let offsetY = img.y;
	let x = y = 0;

	let cabeca = marcadores.querySelector('.cabeca');

	x = offsetX + 60.5;
	y = offsetY;
	cabeca.style.left = x + 'px';
	cabeca.style.top = y + 'px';

	let tronco = marcadores.querySelector('.tronco');
	x = offsetX + 60.5;
	y = offsetY + 41.5;
  tronco.style.left = x + 'px';
  tronco.style.top = y + 'px';

	let bracoEsq = marcadores.querySelector('.braco.esquerdo');
	x = offsetX + 48;
	y = offsetY + 30;
	bracoEsq.style.left = x + 'px';
	bracoEsq.style.top = y + 'px';

	let bracoDir = marcadores.querySelector('.braco.direito');
	x = offsetX + 88;
	y = offsetY + 30;
	bracoDir.style.left = x + 'px';
	bracoDir.style.top = y + 'px';

	let maoEsq = marcadores.querySelector('.mao.esquerdo');
	// 41 e 65
	x = offsetX + 33;
	y = offsetY + 41;
	maoEsq.style.left = x + 'px';
	maoEsq.style.top = y + 'px';

	let maoDir = marcadores.querySelector('.mao.direito');
	x = offsetX + 105;
	y = offsetY + 41;
	maoDir.style.left = x + 'px';
	maoDir.style.top = y + 'px';

	let pernaEsq = marcadores.querySelector('.perna.esquerdo');
	x = offsetX + 55;
	y = offsetY + 72;
	pernaEsq.style.left = x + 'px';
	pernaEsq.style.top = y + 'px';

	let pernaDir = marcadores.querySelector('.perna.direito');
	x = offsetX + 82;
	y = offsetY + 72;
	pernaDir.style.left = x + 'px';
	pernaDir.style.top = y + 'px';

	let peEsq = marcadores.querySelector('.pe.esquerdo');
	x = offsetX + 42;
	y = offsetY + 87;
	peEsq.style.left = x + 'px';
	peEsq.style.top = y + 'px';

	let peDir = marcadores.querySelector('.pe.direito');
	x = offsetX + 98;
	y = offsetY + 87;
	peDir.style.left = x + 'px';
	peDir.style.top = y + 'px';
}
