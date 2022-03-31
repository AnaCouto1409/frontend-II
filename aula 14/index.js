//API - manipular navegador
//get, post, delete,

const baseDeDados ={
    usuarios:[
        {
            id: 1,
            name:"Folha de Bananeira",
            e-mail:"folhadebananeira@gmail.com",
            password:"folhadebananeira.value",
        },
        {
            id: 2,
            name:"Folha de Bananeira1",
            e-mail:"folhadebananeira1@gmail.com",
            password:"folhadebananeira1.value",
        },
        {
            id: 3,
            name:"Folha de Bananeira2",
            e-mail:"folhadebananeira2@gmail.com",
            password:"folhadebananeira2.value",
        },
        {
            id: 4,
            name:"Folha de Bananeira3",
            e-mail:"folhadebananeira3@gmail.com",
            password:"folhadebananeira3.value",
        },
        {
            id: 4,
            name:"Folha de Bananeira4",
            e-mail:"folhadebananeira4@gmail.com",
            password:"folhadebananeira4.value",
        },
        {
            id: 5,
            name:"Folha de Bananeira5",
            e-mail:"folhadebananeira5@gmail.com",
            password:"folhadebananeira5.value",
        },
    ],
};

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, se as validações que já temos no local tiverem sido bem sucedidas,
// devemos armazenar a informação do utilizador no LocalStorage.

// 2) Na mensagem de boas-vindas que já tínhamos implementado, teremos de acrescentar
// o nome da pessoa e um e um botão "Logout".

// 3) Uma vez iniciada a sessão, a sessão deve ser mantida nesse estado no caso de a pessoa
// recarregar a página. Para fazer isso, terá de validar se a informação do utilizador existe neste momento em
// quando a página é carregada, e com base nessa condição decidir quais os elementos mostrar.

// 4) No caso de a pessoa clicar no botão "Logout", deverá ser eliminada
// a informação do utilizador, exibir uma mensagem indicando que a sessão foi encerrada, e recarregar
// a página para voltar a exibir o formulário de login.