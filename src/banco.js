import mysql from 'mysql2'; //importando um modulo

//armazenar uma conexão em uma variavel

//conexao local
const conexao = mysql.createConnection({
    hot: "db4free.net",
    user: "bazao10",
    password: "bazao10sp@",
    database: "bazaoescola"
});
//const conexao = mysql.createConnection({
  //  hot: "locslhost",
    //user: "root",
    //password: "",
    //database: "escola-api"
//});

conexao.connect(erro => {
    if(erro){
        console.error(`erro ao conectar : ${erro.message}`);
    }else {
        console.log(`banco de dados conectado em:${conexao.config.host}.`)
        //apresenta o host qual estamos conectados
    }
});

//exportando o recurso
export default conexao;

