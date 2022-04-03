let tasks
donoTarefa = [ 
{
    name:''
    id:''
}
{
    name:''
    id:''
}
{
    name:''
    id:''
}
]
botaoSignupRef.addEventListener('click', (e) =>{
    e.preventDefault();
    let nome = inputNomeRef.value;
    let apelido = inputApelidoRef.value;
    let email = inputEmailRef.value;
    let senha = inputSenhaRef.value;
    let confirmaSenha = inputConfirmaSenhaRef.value;
    if(senha === confirmaSenha){
        let usuario ={
            nome : nome,
            apelido : apelido,
            email: email,
            senha: senha,
        }
    }
})

let usuario = JSON.parse('usuario', localStorage.getItem('usuario'));
if(usuario === null){
    salvar(usuario);
}else{
    for(let usuario of usuario){
        if (usuario.email === email){
            return alert('Email já cadastrado');
        }
    }
    else{
        alert('As senhas não conferem!!');
    }
}
function salvar (usuario){
    usuario.push(usuario);
    localStorage.setItem('usuario', json.stringify(usuario));
    alert('Cadastro realizado com SUCESSO!');
    window.location.href=  'index.html'
}


//node.js

//front End-- back-end 

//devops







