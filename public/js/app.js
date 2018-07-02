(function() {
  "use strict";

  var gerenciadorToques = new GerenciadorToques();

  //gerenciadorToques.configurarMarcadores();
  gerenciadorToques.configurarBotoesAcao();

  window.addEventListener('load', function() {

    document.querySelectorAll('.atleta')
      .forEach(e => gerenciadorToques.posicionarMarcadores(e));

  });

  // FIXME: deixar apontar o local da pista apenas uma vez
  var pista = document.querySelector('#pista');
  var hammer = new Hammer(pista);

  hammer.on('tap', (ev) => {
    pista.appendChild(gerenciadorToques.novoToque(ev.center.x, ev.center.y));
  });

  var app = new Vue({
    el: '#boneco',
    data: {
      tracker: new MarcadorTracker()
    }
  });

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
    m.addEventListener('click', abrirAcoes);
  });

})();
