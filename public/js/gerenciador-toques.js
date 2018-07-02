'use strict';
var GerenciadorToques = function() {
	function novoToque(x,y) {
		var toque = document.createElement('i');
		['fas','fa-dot-circle', 'toque']
			.forEach(e => toque.classList.add(e));
		x = x - 8;
		y = y - 8;
		toque.style.left = x + 'px';
		toque.style.top = y + 'px';
		return toque;
	}

	function configurarMarcadores() {
		// TODO: documentar
	  var selecionarMarcador = function(e) {
	    e.preventDefault();
	    e.target.classList.add('clicado');
	  };

		var abrirAcoes = function(e) {
			var marcador = e.target;
	    var popper = new Popper(marcador, document.querySelector('#acoes'),
	      {
	        placement: 'right',
	      }
	    );
	    document.querySelector('#acoes').style.display = 'block';
	  };

	  var marcadores = document.querySelectorAll('.marcador');
	  marcadores.forEach(m => {
	    m.addEventListener('click', selecionarMarcador);
			m.addEventListener('click', abrirAcoes);
	  });
	}

	function posicionarMarcadores(atleta) {
		// TODO: tem que posicionar dos dois atletas
		// FIXME: o posicionamento e o tamanho dos marcadores tem que seguir o tamanho da imagem do boneco, que varia conforme a resolução da tela

		//let atleta = document.querySelector('.atleta');
		var marcadores = atleta.querySelector('.marcadores');

		var img = atleta.querySelector('img');
		var offsetX = img.x;
		var offsetY = img.y;
		var x = 0;
		var y = 0;

		var cabeca = marcadores.querySelector('.cabeca');

		x = offsetX + 60.5;
		y = offsetY;
		cabeca.style.left = x + 'px';
		cabeca.style.top = y + 'px';

		var tronco = marcadores.querySelector('.tronco');
		x = offsetX + 60.5;
		y = offsetY + 41.5;
	  tronco.style.left = x + 'px';
	  tronco.style.top = y + 'px';

		var bracoEsq = marcadores.querySelector('.braco.esquerdo');
		x = offsetX + 48;
		y = offsetY + 30;
		bracoEsq.style.left = x + 'px';
		bracoEsq.style.top = y + 'px';

		var bracoDir = marcadores.querySelector('.braco.direito');
		x = offsetX + 88;
		y = offsetY + 30;
		bracoDir.style.left = x + 'px';
		bracoDir.style.top = y + 'px';

		var maoEsq = marcadores.querySelector('.mao.esquerdo');
		// 41 e 65
		x = offsetX + 33;
		y = offsetY + 41;
		maoEsq.style.left = x + 'px';
		maoEsq.style.top = y + 'px';

		var maoDir = marcadores.querySelector('.mao.direito');
		x = offsetX + 105;
		y = offsetY + 41;
		maoDir.style.left = x + 'px';
		maoDir.style.top = y + 'px';

		var pernaEsq = marcadores.querySelector('.perna.esquerdo');
		x = offsetX + 55;
		y = offsetY + 72;
		pernaEsq.style.left = x + 'px';
		pernaEsq.style.top = y + 'px';

		var pernaDir = marcadores.querySelector('.perna.direito');
		x = offsetX + 82;
		y = offsetY + 72;
		pernaDir.style.left = x + 'px';
		pernaDir.style.top = y + 'px';

		var peEsq = marcadores.querySelector('.pe.esquerdo');
		x = offsetX + 42;
		y = offsetY + 87;
		peEsq.style.left = x + 'px';
		peEsq.style.top = y + 'px';

		var peDir = marcadores.querySelector('.pe.direito');
		x = offsetX + 98;
		y = offsetY + 87;
		peDir.style.left = x + 'px';
		peDir.style.top = y + 'px';
	}

	var Selecionador = function(divBotoesAcoes) {
		this.div = divBotoesAcoes;

		this.selecionar = function(botao) {
			divBotoesAcoes.querySelectorAll('.pure-button-active')
				.forEach(e => e.classList.remove('pure-button-active'));
			botao.classList.add('pure-button-active');
		};

		this.div.querySelectorAll('.pure-button')
			.forEach(e => {
				e.addEventListener('click', ev => {
					this.selecionar(ev.target);
				})
			});
	}

	function configurarBotoesAcao() {
		var acoes = document.querySelector('#acoes');

		var selecionadores = [];
		acoes.querySelectorAll('.botoesacoes').forEach(ba => {
			selecionadores.push(new Selecionador(ba));
		});
	}

	return {
		configurarBotoesAcao: configurarBotoesAcao,
		posicionarMarcadores: posicionarMarcadores,
		novoToque: novoToque,
		configurarMarcadores: configurarMarcadores
	};
};

var MarcadorTracker = function() {
	var Partes = function() {
		return {
			cabeca: {selecionado: false},
			tronco: {selecionado: false},
			bracoEsquerdo: {selecionado: false},
			bracoDireito: {selecionado: false},
			maoEsquerda: {selecionado: false},
			maoDireita: {selecionado: false},
			pernaEsquerda: {selecionado: false},
			pernaDireita: {selecionado: false},
			peEsquerdo: {selecionado: false},
			peDireito: {selecionado: false},
		};
	};

	this.marcadores = {
		atleta1: new Partes(),
		atleta2: new Partes()
	};

	this.toggle = function(atleta, marcador) {
		var valorOriginal = this.marcadores[atleta][marcador].selecionado;
		for (var at in this.marcadores) {
			for (var parte in this.marcadores[at]) {
				this.marcadores[at][parte].selecionado = false;
			}
		}
		this.marcadores[atleta][marcador].selecionado = !valorOriginal;
		/*Object.entries(this.marcadores)
			.reduce((acc,e) => acc.push(e[1]), [])
			.filter(entry => entry[0] !== marcador)
			.forEach(entry => entry[1].selecionado = false);*/
	}

	this.isSelecionado = function(atleta, marcador) {
		return this.marcadores[atleta][marcador].selecionado;
	}
}
