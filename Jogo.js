var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0
matriz_jogo['a'][2] = 0
matriz_jogo['a'][3] = 0

matriz_jogo['b'][1] = 0
matriz_jogo['b'][2] = 0
matriz_jogo['b'][3] = 0

matriz_jogo['c'][1] = 0
matriz_jogo['c'][2] = 0
matriz_jogo['c'][3] = 0

$(document).ready( function(){
    
    $('#btn_iniciar_jogo').click(function(){

        //Valida nome
        if($('#nameplayer1').val() == ''){
            alert('Digite o apelido do jogador 1')
            return false
        }
        if($('#nameplayer2').val() == ''){
            alert('Digite o apelido do jogador 2')
            return false
        }

        $('#player1').html($('#nameplayer1').val())
        $('#player2').html($('#nameplayer2').val())

        $('#pagina_incial').hide();
        $('#palco_jogo').show();

    });

    $('.jogada').click(function(){
        var id_clicado = this.id;
        jogada(id_clicado)

    })

    function jogada(id){
        var position = id.split('-')
        // alert('p0: ' + position[0] + ' p1: ' + position[1])
        
        if(matriz_jogo[position[0]][position[1]] == 0){

            var icone = '';
            var ponto = 0;

            if((rodada % 2) == 1){
                icone = 'url("imagens/marcacao_1.png")'
                ponto = -1
            }
            else{
                icone = 'url("imagens/marcacao_2.png")'
                ponto = 1
            }

            rodada++;
            $('#'+id).css('background-image',icone);

            matriz_jogo[position[0]][position[1]] = ponto;

            checapontos();
        }
    }

    function checapontos(){

        var potuacao = 0
        for(var i = 1; i <=3; i++){
            potuacao = potuacao + matriz_jogo['a'][i]
        }
        ganhador(potuacao)

        var potuacao = 0
        for(var i = 1; i <=3; i++){
            potuacao = potuacao + matriz_jogo['b'][i]
        }
        ganhador(potuacao)

        var potuacao = 0
        for(var i = 1; i <=3; i++){
            potuacao = potuacao + matriz_jogo['c'][i]
        }
        ganhador(potuacao)        

        
        for(var i = 1; i <=3; i++){
            var potuacao = 0
            potuacao += matriz_jogo['a'][i]
            potuacao += matriz_jogo['b'][i]
            potuacao += matriz_jogo['c'][i]
            ganhador(potuacao)
        }
        


    }

    function ganhador(potuacao){

        if (potuacao == -3){
            alert('Jogador 1 ganhou');
        }
        else if (potuacao == 3) {
            alert('Jogador 1 ganhou');
        }

    }

});