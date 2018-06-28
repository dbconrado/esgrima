window.addEventListener('load', function() {

  var pista = document.querySelector('#pista');
  var hammer = new Hammer(pista);

  hammer.on('tap', (ev) => {
  	pista.appendChild(novoToque(ev.center.x, ev.center.y));
  });

  document.querySelector('.marcador.apagado').addEventListener('click', e => {
  	
  });

});