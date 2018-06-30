window.addEventListener('load', function() {

  var pista = document.querySelector('#pista');
  var hammer = new Hammer(pista);

  hammer.on('tap', (ev) => {
  	pista.appendChild(novoToque(ev.center.x, ev.center.y));
  });



  var selecionarMarcador = (e) => {
    e.target.classList.add('clicado');
  };

  let marcadores = document.querySelectorAll('.marcador');
  marcadores.forEach(m => {
    m.addEventListener('click', selecionarMarcador);
  });

  posicionarMarcadores();
});
