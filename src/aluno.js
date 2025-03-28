import conexao from './banco.js';

// função para CRUD
function ler(res){
    //comando sql ordenando banco alunos ordenando pelo nome
    const sql = "SELECT * FROM alunos ORDER BY nome";

    //executando a query a partir da conexao
    conexao.query(sql, (erro, resultados) =>{
      if(resultados === 0){
        res.status(204).end();
        return;// o retaurn vai forçar a interrupçao do codigo
      }  

      //verificaçao basica de erro
      if(erro){
        // se err, exibir 400 e informar qual foi o erro
        res.status(400).json(erro.code);
      }else {
        // se der certo apresenta o status 200 e exibe resultado ( no formato)
         res.status(200).json(resultados);
      }
    })
}

export {ler};