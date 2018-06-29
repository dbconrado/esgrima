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
	// FIXME: o posicionamento e o tamanho dos marcadores tem que seguir o tamanho da imagem do boneco, que varia conforme a resolução da tela

	// os deslocamentos são por causa da imagem do boneco, que não está centralizada na imagem. (stickman)
	let deslocamentoX = 14;
	let deslocamentoY = 5;

	let atleta = document.querySelector('#atleta1');
	let x = y = 0;

	let cabeca = document.querySelector('.cabeca');
	let centroX = (m) => atleta.width / 2 - m.offsetWidth / 2 + deslocamentoX;

	x = 68.5; //centroX(cabeca);
	y = 23.1; // atleta.y + atleta.height / 5 - cabeca.offsetHeight / 2 - deslocamentoY;
	cabeca.style.left = x + 'px';
	cabeca.style.top = y + 'px';

	let tronco = document.querySelector('.tronco');
	x = 68.5; //centroX(tronco);
	y = 65.5; // atleta.y + atleta.height / 2 - tronco.offsetHeight / 2 + deslocamentoY;
  tronco.style.left = x + 'px';
  tronco.style.top = y + 'px';

	let bracoEsq = document.querySelector('.braco.esquerdo');
	x = 56; //centroX(bracoEsq) - 20;
	y = 54; //atleta.y + atleta.height / 4 + deslocamentoY - 2;
	bracoEsq.style.left = x + 'px';
	bracoEsq.style.top = y + 'px';

	let bracoDir = document.querySelector('.braco.direito');
	x = 96; //centroX(bracoDir) + 20;
	y = 54; //atleta.y + atleta.height / 4 + deslocamentoY - 2;
	bracoDir.style.left = x + 'px';
	bracoDir.style.top = y + 'px';

	let maoEsq = document.querySelector('.mao.esquerdo');
	// 41 e 65
	x = 41;
	y = 65;
	maoEsq.style.left = x + 'px';
	maoEsq.style.top = y + 'px';

	let maoDir = document.querySelector('.mao.direito');
	x = 113;
	y = 65;
	maoDir.style.left = x + 'px';
	maoDir.style.top = y + 'px';

	let pernaEsq = document.querySelector('.perna.esquerdo');
	x = 63;
	y = 96;
	pernaEsq.style.left = x + 'px';
	pernaEsq.style.top = y + 'px';

	let pernaDir = document.querySelector('.perna.direito');
	x = 90;
	y = 96;
	pernaDir.style.left = x + 'px';
	pernaDir.style.top = y + 'px';

	let peEsq = document.querySelector('.pe.esquerdo');
	x = 50;
	y = 111;
	peEsq.style.left = x + 'px';
	peEsq.style.top = y + 'px';

	let peDir = document.querySelector('.pe.direito');
	x = 106;
	y = 111;
	peDir.style.left = x + 'px';
	peDir.style.top = y + 'px';
}
