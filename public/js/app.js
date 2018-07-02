(function() {

  var gerenciadorToques = new GerenciadorToques();

  gerenciadorToques.configurarMarcadores();
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

})();
