window.addEventListener('load', function() {
console.log('here');
  var pista = document.querySelector('#pista');
  var hammer = new Hammer(pista);

  var dot = document.querySelector('#toque');

  hammer.on('tap', (ev) => {
    dot.style.left = ev.center.x + 'px';
    dot.style.top = ev.center.y + 'px';
    console.log(ev);
  });

});
