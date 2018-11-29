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

var ofencivo=0;
var parada=0;
var efetividade=0;
var local=0;
var acao="";

function setOfencivo(val){
    if(ofencivo==val){
        ofencivo=0;
    }else{
        ofencivo=val;
        
    }
    alert(ofencivo);
}
function setDefencivo( val){
    if(defencivo==val){
        defencivo=0;
    }else{
        defencivo=val;
    }
    
}
function setLocal(val){
    if(local==val){
        local=0;
    }else{
        local=val;
    }
    alert(local);
}


function proximoMovi(){
  if(ofencivo==0){
  alert("Selecione o ataque" );
  }else if(efetividade==0){
    alert("Selecione se foi ponto ou se falhou" );
  }else if(local==0){
    alert("Selecione onde foi o atque" );
  }
  else {
        if(ofencivo==1){
            acao="um ataque ";
        }
        else if(ofencivo==2){
            acao="uma resposta ";
        }
        else if(ofencivo==3){
            acao="uma contra-resposta ";
        }
        else if(ofencivo==4){
            acao="um contra ataque ";
        }

        if(local==1){
            acao+="O adversario com "+acao+" mirou minha cabeça";
        }
        else if(local==2){
            acao+="O adversario, com "+acao+" mirou meu tronco";
        }
        else if(local==3){
            acao+="O adversario, com "+acao+" mirou meu braço direito";
        }
        else if(local==4){
            acao+="O adversario, com "+acao+" mirou meu braço esquerdo";
        }
        else if(local==5){
            acao+="O adversario, com "+acao+" mirou minha perna direita";
        }
        else if(local==6){
            acao+="O adversario, com "+acao+" mirou minha perna esquerda";
        }
        else if(local==7){
            acao+="Eu, com "+acao+" mirei a cabeça do adversario";
        }
        else if(local==8){
            acao+="Eu, com "+acao+" mirei o tronco do adversario";
        }
        else if(local==9){
            acao+="Eu, com "+acao+" mirei o braço direito do adversario";
        }
        else if(local==10){
            acao+="Eu, com "+acao+" mirei o braço esquerdo do adversario";
        }
        else if(local==11){
            acao+="Eu, com "+acao+" mirei a perna direita do adversario";
        }
        else if(local==12){
            acao+="Eu, com "+acao+" mirei a perna esquerda do adversario";
        }

        if(parada==1){
            acao+= ", mas ouve parada";
        }

        if(efetividade==1){
            acao+=" . Gerando ponto";
        }else{
            acao+=" . Não gerando ponto";
        }

        alert(acao);
  }

}

