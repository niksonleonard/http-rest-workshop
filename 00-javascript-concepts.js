// Javascript (ECMAScript 6) é uma linguagem de programação interpretada 
// geralmente por um navegador web mas isso mundou com o tempo e hoje é
// possível executar javascript em qualquer lugar, inclusive no servidor

// Definição de Variaveis em javascript
let nome = "João";
let idade = 25;
let listaTelefones = ["(11) 99999-9999", "(11) 99999-88888"];

// Definição de objeto em javascript
let endereco = {
    "rua": "Rua dos Bobos",
    "numero": 0,
    "bairro": "Vila do Chaves",
    "cidade": "São Paulo",
    "estado": "SP"
};

//Acessando os dados do objetos
console.log(endereco.estado); // Rua dos Bobos

// Outro exemplo de objeto
let endereco2 = {
    "rua": "Rua dos Jabutis",
    "numero": 30,
    "bairro": "Pereira",
    "cidade": "barretos",
    "estado": "SP"
};
//Aceessando os dados do objeto
console.log(endereco2.cidade); // Barretos

// // Definindo uma lista de objetos através de um array e dos objetos criados anteriormente
let listaEnderecos = [endereco, endereco2];

console.log(listaEnderecos[0].rua)
// // Juntando todos os conceitos
// let pessoa = {
//     "nome": "Beatriz",
//     "idade": 31,
//     "telefones": ["(11) 99999-9999", "(17) 77777-88888"],
//     "enderecos": [
//         {
//             "rua": "Rua dos Bobos",
//             "numero": 0,
//             "bairro": "Vila do Chaves",
//             "cidade": "São Paulo",
//             "estado": "SP"
//         },
//         {
//             "rua": "Rua dos Jabutis",
//             "numero": 30,
//             "bairro": "Pereira",
//             "cidade": "barretos",
//             "estado": "SP"
//         }
//     ]
// };

// // Funções em javascript
// // Funções são blocos de código que geralmente podem ser reutilizados

// function cadastrarPessoaEmUnidadeSaoPaulo(nome, idade) {
//     let pessoa = {
//         "nome": nome,
//         "idade": idade,
//         "telefones": ["(11) 99999-9999", "(17) 77777-88888"],
//         "enderecos": [
//             {
//                 "rua": "Rua dos Bobos",
//                 "numero": 0,
//                 "bairro": "Vila do Chaves",
//                 "cidade": "São Paulo",
//                 "estado": "SP"
//             }
//         ]
//     };

//     return pessoa;
// }
