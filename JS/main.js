let btn, frm, txt;

   btn = document.getElementById("btn_enviar");
 btn.addEventListener("click",enviar);
function enviar(event){
  frm = document.getElementById("formulario");
    if(frm.checkValidity())
    {
      txt = document.getElementById("boletin");
      txt.value = "";
      alert("¡Gracias por registrarte, espera proximante mas informacion de RBD!");
      event.preventDefault();  
    }
}