//checkpoint 2- Ezio Lorenzetti, Anderson, Ana Carolina E william

//function select(id){
  //  return document.getElementById(id)
//}

let nameRef= document.querySelector('#name')
let userRef = document.querySelector('#user')
let emailRef = document.querySelector('#email')
let pwdRef = document.querySelector('#pwd')
let pwdRepRef = document.querySelector('#pwdRep')
let formRef = document.querySelector('form')

let usuario  =[]
 

for(let input of inputsRef){
    let verCampo = inputRef.children[1]
    verCampo.addEventListener('keyup', function(ev){
        if(verCampo.checkValidity()){
            controladorReferencia.classList.remove('erro')
            botaoLoginReferencia.disabled = false
        }else{
            controladorReferencia.classList.add('erro')
            botaoLoginReferencia.disabled = true
        }
    })
}

formRef.addEventListener('submit', function(ev){
    ev.preventDefault()
    usuario.nome = inputNomeReferencia.value.trim()
    if(usuario.nome  === " "){
        usuario.push("O campo está vazio")
    }
})

for(let input of inputsReferences){
    if(input.type ==='checkbox'){
        input.addEventListener('click', function(){
            if(input.checked){
                if(hobbies.length < 4){
                    hobies.push(input.id)
                }else{
                    input.checked = false

                    console.log('O numero máximo de hobbies foi preenchido!')
                }
            }
        }
    }
}
