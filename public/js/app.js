(function() {

  var gerenciadorToques = new GerenciadorToques();

  // TODO: documentar
  var selecionarMarcador = (e) => {
    e.preventDefault();
    e.target.classList.add('clicado');
  };

  let marcadores = document.querySelectorAll('.marcador');
  marcadores.forEach(m => {
    m.addEventListener('click', selecionarMarcador);
  });

  // ações
  gerenciadorToques.configurarBotoesAcao();

  let abrirAcoes = function(marcador) {
    var popper = new Popper(marcador, document.querySelector('#acoes'),
      {
        placement: 'right',
      }
    );
    document.querySelector('#acoes').style.display = 'block';
  };

  document.querySelectorAll('.marcador')
    .forEach(m => m.addEventListener('click', ev => abrirAcoes(ev.target)));

  window.addEventListener('load', function() {

    // FIXME: deixar apontar o local da pista apenas uma vez
    var pista = document.querySelector('#pista');
    var hammer = new Hammer(pista);

    hammer.on('tap', (ev) => {
    	pista.appendChild(gerenciadorToques.novoToque(ev.center.x, ev.center.y));
    });

    document.querySelectorAll('.atleta')
      .forEach(e => gerenciadorToques.posicionarMarcadores(e));

  });
})();
