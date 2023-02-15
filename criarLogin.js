function loginFake() {


    let userFake = document.getElementById("user").value;
   
    let passwordFake = document.getElementById("pass").value;

    if (userFake == "administrador" && passwordFake == "administrador") {
        alert("Logado")
    }
    else {
        alert("Credenciais Incorretas")
    }

}