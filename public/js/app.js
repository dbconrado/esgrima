(function() {

  var gerenciadorToques = new GerenciadorToques();

  //gerenciadorToques.configurarMarcadores();
  gerenciadorToques.configurarBotoesAcao();

  window.addEventListener('load', function() {

    document.querySelectorAll('.atleta')
      .forEach(e => gerenciadorToques.posicionarMarcadores(e));

  });
  /*
  // FIXME: deixar apontar o local da pista apenas uma vez
  var pista = document.querySelector('#pista');
  var hammer = new Hammer(pista);

  hammer.on('tap', (ev) => {
    pista.appendChild(gerenciadorToques.novoToque(ev.center.x, ev.center.y));
  });
  */

  var MarcadorTracker = function() {
    this.marcadores = {
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

    this.toggle = function(marcador) {
      var valorOriginal = this.marcadores[marcador].selecionado;
      this.marcadores[marcador].selecionado = !valorOriginal;
      Object.entries(this.marcadores)
        .filter(entry => entry[0] !== marcador)
        .forEach(entry => entry[1].selecionado = false);
    }

    this.isSelecionado = function(marcador) {
      return this.marcadores[marcador].selecionado;
    }
  }

  var app = new Vue({
    el: '#boneco',
    data: {
      tracker: new MarcadorTracker()
    }
  });

})();
