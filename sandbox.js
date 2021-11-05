//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.

function mostrarEventoJs(evento) {
    console.log('Evento JS:', evento);
}
  
  function addEventListener(){
    document.getElementById("btn").addEventListener("click", mostrarEventoJs);
  
  }

  window.onload = function() {
  
    addListeners();
  }



//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
function mostrarEventoJs(evento) {
    console.log('Evento JS:', evento);
  }
  function addEventListener(){
    document.getElementsByClassName("focus").addEventListener("focus", input);
  }
  window.onload = function() {
  
    addListeners();
  }


 //1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

 function mostrarEventoJs(evento) {
    console.log('Evento JS:', evento);
  }
  
  function addEventListener(){
    document.getElementsByTagName("input").addEventListener("input", input);
  }
    window.onload = function() {
  
        addListeners();
      }