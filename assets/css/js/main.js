
  //se ha cargado en DOM//
$(function () {

    //smoth scroll//
    $ ("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });

    //tooltip en Destacados, navbar//
    $('[data-toggle="tooltip"]').tooltip();
    });

});
