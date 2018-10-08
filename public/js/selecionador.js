var Selecionador = function(divBotoes) {
    this.divBotoes = divBotoes;

    this.selecionar = function(botao) {
        divBotoes.querySelectorAll('.pure-button-active')
            .forEach(e => e.classList.remove('pure-button-active'));
        botao.classList.add('pure-button-active');
    };

    this.divBotoes.querySelectorAll('.pure-button')
        .forEach(e => {
            e.addEventListener('click', ev => {
                this.selecionar(ev.target);
            })
        });
}

