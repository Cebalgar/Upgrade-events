//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.

const boton = document.createElement("button");
boton.setAttribute("id", "btnToClick");
boton.innerHTML="Click";
document.body.appendChild(boton);

const botonClick= document.querySelector(".click");



let clickToClick=function(evento){
    console.log(botonClick.value);
}

boton.addEventListener("click", clickToClick);



//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector(".focus");


inputFocus.addEventListener("focus",(evento)=>{

    console.log(evento.target.value);

});




 //1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

 const inputValue = document.querySelector(".value");

inputValue.addEventListener("input",(evento)=>{

    console.log(evento.inputValue,value);
    
});



//let valueClick=function(evento){
  //console.log(inputValue.value);
//}

//boton.addEventListener("input", valueClick);