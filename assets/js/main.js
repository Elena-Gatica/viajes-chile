//Se carga el DOM//
$(function() {

  //Smoth Scroll//
  $ ("a").click(function(event){
    if (this.hash !== ""){
      event.preventDefault ();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  //Tooltip en nav-bar link Destacados//
  $('[data-toggle="tooltip"]').tooltip();
  });
