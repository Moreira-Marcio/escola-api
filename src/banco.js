import mysql from 'mysql2'; //importando um modulo

//armazenar uma conexão em uma variavel

const conexao = mysql.createConnection({
    hot: "locslhost",
    user: "root",
    password: "",
    database: "escola-api"
});

conexao.connect(erro => {
    if(erro){
        console.error(`erro ao conectar : ${erro.message}`);
    }else {
        console.log(`banco de dados conectado com sucesso`)
    }
});

//exportando o recurso
export default conexao;

