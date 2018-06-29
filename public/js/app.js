window.addEventListener('load', function() {

  var pista = document.querySelector('#pista');
  var hammer = new Hammer(pista);

  hammer.on('tap', (ev) => {
  	pista.appendChild(novoToque(ev.center.x, ev.center.y));
  });



  var clickPulsar = (e) => {
    // para "restartar" a animação, tem que tirar o elemento e colocar de novo (ou novo)
    e.target.classList.remove('clicado');
    let node = e.target.cloneNode(true);
    e.target.parentNode.replaceChild(node, e.target);
    node.classList.add('clicado');
    node.addEventListener('click', clickPulsar);
  };

  let marcadores = document.querySelectorAll('.marcador');
  marcadores.forEach(m => {
    m.addEventListener('click', clickPulsar);
  });

  posicionarMarcadores();
});
