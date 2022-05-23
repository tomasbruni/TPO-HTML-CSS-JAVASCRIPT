const nombre = document.getElementById(`nombre`)
const apellido = document.getElementById(`apellido`)
const telefono = document.getElementById(`telefono`)
const correo = document.getElementById(`correo`)
const mensaje = document.getElementById(`mensaje`)
const parrafo1 = document.getElementById(`error1`)
const parrafo2 = document.getElementById(`error2`)
const parrafo3 = document.getElementById(`error3`)
const parrafo4 = document.getElementById(`error4`)
const parrafo5 = document.getElementById(`error5`)
const enviado = document.getElementById(`enviado`)



form.addEventListener(`submit`, function(e){
    e.preventDefault()
    let regexNombre= /^[a-zA-ZÁ-ý]+$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexTelefono = /[0-9]+/
    parrafo1.innerHTML =""
    parrafo2.innerHTML =""
    parrafo3.innerHTML =""
    parrafo4.innerHTML =""
    parrafo5.innerHTML =""
    enviado.innerHTML=""
    let crosbal = false
    if(!regexNombre.test(nombre.value)){
        parrafo1.innerHTML += `El nombre solo puede contener letras<br>`
        crosbal = true
    }
    if(!regexNombre.test(apellido.value)){
        parrafo2.innerHTML += `El apellido solo puede contener letras<br>`
        crosbal = true
    }
    if(telefono.value.length !== 10 || !regexTelefono.test(telefono.value)){
        parrafo3.innerHTML += `El número de teléfono debe tener 10 dígitos y solo pueden ser numeros<br>`
        crosbal = true
    }
    if(!regexEmail.test(correo.value)){
         parrafo4.innerHTML += `El email no es válido <br>`
         crosbal = true
    }
    if(mensaje.value.length < 5 || mensaje.value.length > 280){
        crosbal = true
        parrafo5.innerHTML += `El mensaje debe tener entre 5 y 280 caracteres`
    }

    if(crosbal === false){
        enviado.innerHTML = "Enviado correctamente"
    }
})



