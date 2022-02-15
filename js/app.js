
function validate(){
    // Creacion de variable global para obtener por id el elemento
   var nameUser = document.getElementById("nameUser");
    //medimos la longitud del contenido del elmento y se compara    
   if(nameUser.value.length == 0){
        // Si el contenido es vacio es decir 0 se adiciona la clase css de error
        nameUser.classList.remove('success');
       nameUser.classList.add('error');
        //Se agrega contenido HTML desde JS a un span   
       document.getElementById("errorNameUser").innerHTML = 'El Campo de Nombre es Obligatorio';
        //Se retorna para parar  la funcion
       return 0;
   }else{
    nameUser.classList.remove('error');
    nameUser.classList.add('success');
    document.getElementById("errorNameUser").innerHTML = '';
   }
   var lastName = document.getElementById("lastName");
   if(lastName.value.length == 0){
       lastName.classList.add('error');
   }else{
    lastName.classList.add('success');
   }
}