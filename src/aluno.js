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

//função para inserir alunos no banco de dados

function inserir(aluno,res){
    const sql ="INSERT INTO alunos SET ?";
    conexao.query(sql,aluno,(erro)=>{
      if(erro){
        res.status(400).json(erro.code);
      }else{
          res.status(201).json({"status": "aluno inserido!"});
      }
    });
}

//função ler um aluno
function lerUm(id,res){
       const sql = "SELECT * FROM alunos WHERE id=?";
       conexao.query(sql,id,(erro,resultados)=>{
        //checando se há resultado
        if(resultados === 0){
          res.status(204).end();
          return;// forçar interrupção do codigo
        }  
        //if para erro
        if(erro){
          res.status(400).json(erro.code);
        }else {
          res.status(200).json(resultados);
        }
       });
}

//function atualizaUmAluno(aluno,res){
//  const sql ="UPDATE alunos SET alunos=? WHERE id=? "
//}


function excluirUmAluno(id,res){
  const sql= "DELETE FROM alunos WHERE id=?";
  conexao.query(sql,id,(erro,resultados)=>{
    if(erro){
      res.status(400).json(erro.code);
    }else {
      res.status(200).json({"status":"aluno excluido",id});
    }
  });
}

//função para atualizar os dados de um aluno

function atualizar(id,aluno,res) {
  const sql= "UPDATE alunos SET ? WHERE id=?";
  conexao.query(sql,[aluno,id],(erro,resultados) =>{
    if(erro){
      res.status(400).json(erro.code);

    }else{//...retcencias é chamado spread operador (operador de espalhamento de objeto)
      res.status(200).json({...aluno,id});
    }
  });
}


export {ler,inserir,lerUm,excluirUmAluno,atualizar};