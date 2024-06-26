$(document).ready(function() {
    $('.btn-default').on('click', function() {
        alert('Adicionado ao carrinho!');
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

$(document).ready(function() {
    
    var $img = $('#banner img');
    
    
    $img.hide();
    
    
    $img.fadeIn(1000); 
});

