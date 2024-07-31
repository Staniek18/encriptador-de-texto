
function encriptadorPrincipal(btn_1,btn_2){

    let obtenerTexto = document.getElementById("texto_ingrsado").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafoMensaje = document.getElementById("parrafo_mensaje");
    let muneco = document.getElementById("muneco");
    let mostrarMensaje = document.getElementById("mostrar_mensaje");
    let boton_3 = document.getElementById("btn_3");

    if(obtenerTexto.length !=0 && obtenerTexto === obtenerTexto.toLowerCase()){

        if(btn_1==1){

            let textoCifrado = obtenerTexto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

            mostrarMensaje.style.display ="block"
            mostrarMensaje.textContent =  textoCifrado;
            tituloMensaje.textContent = "";
            parrafoMensaje.textContent = "";
            document.getElementById("texto_ingrsado").value = ""

            muneco.style.display="none";
            mostrarMensaje.style.display ="block";
            boton_3.style.display = "block";

            //https://sweetalert2.github.io/#themes

            Swal.fire({
                icon: "success",
                title: "Genial...",
                text: "¡Texto Encriptado Correctamente.!",
                footer: ''
              });

            


        }

        else if (btn_2==2){

            let textoCifrado = obtenerTexto
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");

            mostrarMensaje.style.display ="block"
            mostrarMensaje.textContent =  textoCifrado;
            tituloMensaje.textContent = "";
            parrafoMensaje.textContent = "";
            document.getElementById("texto_ingrsado").value = ""
            muneco.style.display="none";
            mostrarMensaje.style.display ="block";
            boton_3.style.display = "block";

            Swal.fire({
                icon: "success",
                title: "Genial...",
                text: "¡Texto Desencriptado Correctamente.!",
                footer: ''
              });
        }
    }

    else{

        
        boton_3.style.display = "none";
        document.getElementById("texto_ingrsado").value = ""
        mostrarMensaje.textContent = "";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafoMensaje.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡Debes ingresar algún texto en letras minusculas.!",
          footer: ''
        });

    }
 
    return;

}

function encriptar(){

    encriptadorPrincipal(1,0);
    return;
}

function desencriptar(){

    encriptadorPrincipal(0,2);
    return;
}

function copiar(){

    let parrafoCopiado = document.getElementById('mostrar_mensaje').textContent;

    try {
        navigator.clipboard.writeText(parrafoCopiado);

        Swal.fire({
            icon: "success",
            title: "Genial...",
            text: "¡Texto copiado al portapapeles.!",
            footer: ''
          });
      
    } catch (err) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡No se pudo copiar el texto.!",
            footer: ''
          });

    }
    


}
