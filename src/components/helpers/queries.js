//La funcion recibe por parametro el objeto usuario.
export const login = async (usuario) =>{
    try{
        //pedir la lista de usuarios a json-server
        const respuesta = await fetch("http://localhost:3004/usuarios")
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios)
        //buscar si el usuario que completo el formulario esta dentro de la lista de json-server.
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        //preguntar si encontre el usuario existe
        if(usuarioBuscado) {
            //Si encontre el usuario verifico pass
            if(usuarioBuscado.password === usuario.password){
                console.log("todo bien")
                return usuarioBuscado
            }else{
                console.log("pass erroneo")
                return null
            }

        }else{
            //caso contrario
            console.log("email incorrecto");
            return null;
        }
        //si encontre el usuario y su pass es correcto, esta todo ok.

        //caso contrario tendria que decir que salio algo mal.


    }catch(error){
        console.log(error)
    }

}