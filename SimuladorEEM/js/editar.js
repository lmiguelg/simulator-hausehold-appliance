/*esquema inicial---------------------------------------
function processaTecla(event , contexto) {
            console.log(contexto, event);

            if (event.keyCode == 13) {

                event.preventDefault();

            }


        }*/


var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
$(document).ready(function () {



    $('#val1').change(function () {
        i1 = document.getElementById('val1').value;
    });
    $('#val2').change(function () {
        i2 = document.getElementById('val2').value;
    });
    $('#val3').change(function () {
        i3 = document.getElementById('val3').value;
    });
    $('#val4').change(function () {
        i4 = document.getElementById('val4').value;
    });
});


var idInput = 0;
function buttonClickMais(idInput) {
    if (idInput == 1) {
        i1++;
        document.getElementById('val1').value = i1;
    }
    if (idInput == 2) {
        i2++;
        document.getElementById('val2').value = i2;
    }
    if (idInput == 3) {
        i3++;
        document.getElementById('val3').value = i3;
    }
    if (idInput == 4) {
        i4++;
        document.getElementById('val4').value = i4;
    }



}
function buttonClickMenos(idInput) {


    if (idInput == 1) {
        if (i1 == 0) {

            i1 = 0;
        } else {
            i1--;
        }

    }
    if (idInput == 2) {
        if (i2 == 0) {

            i2 = 0;
        } else {
            i2--;

        }
    }
    if (idInput == 3) {
        if (i3 == 0) {

            i3 = 0;
        } else {
            i3--;

        }
    }
    if (idInput == 4) {
        if (i4 == 0) {

            i4 = 0;
        } else {
            i4--;
        }


    }


    document.getElementById('val1').value = i1;
    document.getElementById('val2').value = i2;
    document.getElementById('val3').value = i3;
    document.getElementById('val4').value = i4;

}
function atualizaValor() {
    var i = 0;
    document.getElementById('val1').value = i;
    document.getElementById('val2').value = i;
    document.getElementById('val3').value = i;
    document.getElementById('val4').value = i;

}

//script para botoes inverno verao



function estrutura() {



    var novaEstrutura = {
        tempoVerao: ["0", "0", "0", "0"],
        tempoInverno: ["0", "0", "0", "0"]
    }
    /*
    document.getElementById("lamp_verao").innerHTML = novaEstrutura.tempoVerao[0];
    document.getElementById("rad_verao").innerHTML = novaEstrutura.tempoVerao[1];
    document.getElementById("maq_verao").innerHTML = novaEstrutura.tempoVerao[2];
    document.getElementById("aq_verao").innerHTML = novaEstrutura.tempoVerao[3];

    document.getElementById("lamp_inverno").innerHTML = novaEstrutura.tempoInverno[0];
    document.getElementById("rad_inverno").innerHTML = novaEstrutura.tempoInverno[1];
    document.getElementById("maq_inverno").innerHTML = novaEstrutura.tempoInverno[2];
    document.getElementById("aq_inverno").innerHTML = novaEstrutura.tempoInverno[3];
    */
    localStorage.setItem('EstruturaVerao', JSON.stringify(novaEstrutura.tempoVerao));
    localStorage.setItem('EstruturaInverno', JSON.stringify(novaEstrutura.tempoInverno));

    var getEstrtutura = JSON.parse(localStorage.getItem('EstruturaVerao'));
    var getEstrtutura2 = JSON.parse(localStorage.getItem('EstruturaInverno'));


    var arrayVerao = [];
    var arrayInverno = [];
    //converter os numeros decimais para horas
    for (i = 0; i < getEstrtutura.length; i++) {

        var digits = getEstrtutura[i].toString().split('.');
        var digits2 = getEstrtutura2[i].toString().split('.');

        console.log(getEstrtutura[i]);
        if (digits[1] == "5") {

            arrayVerao[i] = digits[0].concat("h30");
            //console.log(arrayVerao[i]);


        } else {
            arrayVerao[i] = digits[0].concat("h00");
            //console.log(arrayVerao[i]);
        }

        if (digits2[1] == "5") {

            arrayInverno[i] = digits2[0].concat("h30");
            //console.log(arrayVerao[i]);


        } else {
            arrayInverno[i] = digits2[0].concat("h00");
            //console.log(arrayVerao[i]);
        }
    }
    //console.log(arrayVerao);
    //atualizar valores dos tempos no html
    document.getElementById("lamp_verao").innerHTML = arrayVerao[0];
    document.getElementById("rad_verao").innerHTML = arrayVerao[1];
    document.getElementById("maq_verao").innerHTML = arrayVerao[2];
    document.getElementById("aq_verao").innerHTML = arrayVerao[3];

    document.getElementById("lamp_inverno").innerHTML = arrayInverno[0];
    document.getElementById("rad_inverno").innerHTML = arrayInverno[1];
    document.getElementById("maq_inverno").innerHTML = arrayInverno[2];
    document.getElementById("aq_inverno").innerHTML = arrayInverno[3];



}

var novoItem = JSON.parse(localStorage.getItem('EstruturaVerao'));
//console.log(novoItem);


//script para select2---------------------------------
$(".selectorTabela").select2({
    tags: true
});



//slider-----------------------------


var handlesSlider4 = document.getElementById('slider-link');

noUiSlider.create(handlesSlider4, {//verão
    start: [5, 10, 15, 20],
    behaviour:'drag-tap',
    step: 0.5,
    connect: [false, true, false, true, false],
    tooltips: true,
    range: {
        'min': [0],
        'max': [24]
    }
});


var handlesSlider2 = document.getElementById('slider-link2');

noUiSlider.create(handlesSlider2, {//inverno
    start: [5, 10, 15, 20],
    behaviour: 'drag-tap',
    step: 0.5,
    connect: [false, true, false, true, false],
    tooltips: true,
    range: {
        'min': [0],
        'max': [24]
    }
});


function converteParaHoras(decimal) {
    var novaVariavel = decimal.split('.');
    var novaVariavel2 = 0;
    if (novaVariavel[1] == "50") {
        novaVariavel2 = novaVariavel[0].concat("h30");
    }
    else {
        novaVariavel2 = novaVariavel[0].concat("h00");
    }
    return novaVariavel2;
}



function insereValoresPredefinidos(idColuna, var1_2) {
    var conjuntoValores = [];
    if (idColuna == 0) {
        conjuntoValores = localStorage.getItem('EstruturaPredefinidosCol1');
    }
    if (idColuna == 1) {
        conjuntoValores = localStorage.getItem('EstruturaPredefinidosCol2');
    }
    if (idColuna == 2) {
        conjuntoValores = localStorage.getItem('EstruturaPredefinidosCol3');
    }
    if (idColuna == 3) {
        conjuntoValores = localStorage.getItem('EstruturaPredefinidosCol4');
    }

    console.log('valor do id de tras: ' + idColuna);
    console.log('valor do conjunto val: ' + conjuntoValores);


    var conjuntoValores2 = JSON.parse(conjuntoValores);
    var valVerao = conjuntoValores2[0];
    var valInverno = conjuntoValores2[1];

    var todosElementos = [];
    todosElementos = document.getElementsByClassName('definirHorariroVerao');
    //console.log('todosEleme: ' + valVerao[0]);

    if (var1_2 == 1) {
        for (i = 0; i < 4; i++) {

            if (valVerao[i] != 0) {
                //todosElementos[i].innerHTML = valVerao[i];
                todosElementos[i].innerHTML = 'Das ' + converteParaHoras(valVerao[i][0]) + ' as '
                    + converteParaHoras(valVerao[i][1]) + '<br>Das ' + converteParaHoras(valVerao[i][2]) + ' as '
                    + converteParaHoras(valVerao[i][3]);
            }
            else {
                todosElementos[i].innerHTML = "Clique aqui para selecionar o periodo horario";
            }

        }
    }
    if (var1_2 == 2) {
        var todosElementos2 = [];
        todosElementos2 = document.getElementsByClassName('definirHorariroInverno');
        for (i = 0; i < 4; i++) {
            if (valInverno[i] != 0) {
                //todosElementos2[i].innerHTML = valInverno[i];
                todosElementos2[i].innerHTML = 'Das ' + converteParaHoras(valInverno[i][0]) + ' as '
                    + converteParaHoras(valInverno[i][1]) + '<br>Das ' + converteParaHoras(valInverno[i][2]) + ' as '
                    + converteParaHoras(valInverno[i][3]);
            }
            else {
                todosElementos2[i].innerHTML = "Clique aqui para selecionar o periodo horario";
            }
        }

    }


    console.log('conjunto valores: ' + conjuntoValores);
    console.log('conjunto valores2: ' + conjuntoValores2);
    console.log('conjunto valoresVerao: ' + valVerao);
    console.log('conjunto valoresInverno: ' + valInverno);
}


function selectElementStorage(idStorage, estacao, coluna) {//retorna uma array;estacao-0=verao;1=inverno
    var arrayFinal = [];
    if (idStorage == 0) {
        arrayFinal = JSON.parse(localStorage.getItem('EstruturaPredefinidosCol1'));
    }
    if (idStorage == 1) {
        arrayFinal = JSON.parse(localStorage.getItem('EstruturaPredefinidosCol2'));
    }
    if (idStorage == 2) {
        arrayFinal = JSON.parse(localStorage.getItem('EstruturaPredefinidosCol3'));
    }
    if (idStorage == 3) {
        arrayFinal = JSON.parse(localStorage.getItem('EstruturaPredefinidosCol4'));
    }
    //console.log('arrfinalsasassaaaaaaaa: ' + idStorage);
    //return arrayFinal[coluna];
    return arrayFinal[estacao][coluna - 1];
}


