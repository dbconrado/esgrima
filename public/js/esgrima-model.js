/**
 * modelo de dados do app esgrima
 * @module esgrima/esgrima-model
 * @author Daniel Conrado <daniel.conrado@ifmg.edu.br>
*/

var Movimento = function() {
  this.atacante = null;
  this.acaoOfensiva = null;
  this.acaoDefensiva = null;
  this.localPista = null;
}

var Acao = function() {
  this.nome = null;
  this.id = null;
  this.eficaz = null;
}

var LocalPista = function() {
  this.local = null;
  this.x = null;
  this.y = null;
}

var MovimentoControlador = function() {
  this.movimentos = [];
  this.movimento = new Movimento();
  this.salvo = false;
  this.atual = 0;

  this.salvar = function() {
    this.movimentos[this.atual] = this.movimento;
    this.salvo = true;
  }

  this.proximo = function() {
    if (!this.salvo) {
      this.salvar();
    }

    this.atual++;
    if (!(this.atual in this.movimentos)) {
      this.movimento = new Movimento(); // criar um novo
      this.salvo = false;
    } else {
      this.movimento = this.movimentos[this.atual]; // pegar o já existente
      this.salvo = true;
    }
  }

  this.anterior = function() {
    if (this.atual === 0) {
      return;
    }

    if (!this.salvo)
      this.salvar();
    }

    this.atual--;
    this.movimento = this.movimentos[this.atual];
    this.salvo = true;
  }

  this.quantidade = function() {
    return this.movimentos.length;
  }
}
