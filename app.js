import express from 'express';
import {ler,inserir,lerUm,excluirUmAluno, atualizar} from './src/aluno.js';



const app = express();
const porta = 3000;

//habilitando para funcionar/dar suporte para o formato json
app.use(express.json());

//habilitando para dar suporte a dados inseridos a partir de imputs de formulario
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send(`API utilizando Node.js,Express e MySQL`);
});
app.get('/alunos',(req,res)=>{
   // res.send(`exibindo todos os alunos`);
   ler(res);
});

app.get('/alunos/:id',(req,res)=>{
    //res.send(`Exibindo dados de um aluno`);
    //capturando o id que vem, do endpoint
    const id = parseInt(req.params.id);
    
    //chamando a função
    lerUm(id,res);
  
});

app.post('/alunos',(req,res)=>{
   // res.send(`INSERINDO ALUNOS`);
   //capturar os dados a partir do corpo da requisição
   const novoAluno = req.body;
   //executando a função inserir e passando os parametros novoAluno e res
   inserir(novoAluno,res);
});

app.patch('/alunos/:id',(req,res) => {
    //capturar o id
//res.send(`Atualizando dados do aluno`);
    const id= parseInt(req.params.id);

    //pegando informação do body
    const aluno = req.body;
    atualizar(id,aluno,res);
});

app.delete('/alunos/:id',(req,res) => {
    //res.send(`Aluno excluido com sucesso`);
    const id = parseInt(req.params.id);

    excluirUmAluno(id,res);
    });

app.listen(porta,() => {
    console.log(`Servidor rodando na porta ${porta}`);
});