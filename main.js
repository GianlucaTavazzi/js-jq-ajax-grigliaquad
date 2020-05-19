var template_html = $('#template').html();
var template_function = Handlebars.compile(template_html);

$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
        var quadrato = {
            'classe' : 'quadrato'
        }
        var quadrato_griglia = template_function(quadrato);
        $('.conteiner').append(quadrato_griglia);
    }

    $('.quadrato').each(function(){
        $(this).click(function(){
            // var numero_casuale = Math.floor(Math.random() * 10);
            // console.log(numero_casuale);
            // if (numero_casuale <= 5) {
            //     $(this).addClass('yellow');
            //     $(this).unbind("click");
            //     $(this).append('<p>' + numero_casuale + '</p>')
            // } else {
            //     $(this).addClass('green');
            //     $(this).unbind("click");
            //     $(this).append('<p>' + numero_casuale + '</p>')
            // }
            $.ajax({
                'context' : this,
                'url' : "https://flynn.boolean.careers/exercises/api/random/int",
                'method' : "GET",
                'success' : function (data){
                    var numero_casuale = data.response;
                    console.log(numero_casuale);
                    if (numero_casuale <= 5) {
                        $(this).addClass('yellow');
                        $(this).unbind("click");
                        $(this).append('<p>' + numero_casuale + '</p>')
                    } else {
                        $(this).addClass('green');
                        $(this).unbind("click");
                        $(this).append('<p>' + numero_casuale + '</p>')
                    }
                },
                'error' : function() {
                    alert('si è verificato un errore');
                }
            })
        })
    })
});
