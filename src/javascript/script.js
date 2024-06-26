$(document).ready(function() {
    $('.btn-default').on('click', function() {
        alert('Pedido enviado para o carrinho de compras!');
    });
});

$(document).ready(function() {
    
    $(".hidden").hide();
    
    $(".btn-default-test").click(function() {
        $(".hidden").slideToggle();
        
        
        $(this).text(function(i, text){
            return text === "Ver mais avaliações" ? "Ver menos avaliações" : "Ver mais avaliações";
        });
    });
});