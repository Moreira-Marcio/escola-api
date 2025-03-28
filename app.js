import express from 'express';
import {ler} from './src/aluno.js';



const app = express();
const porta = 3000;

app.get('/',(req,res)=>{
    res.send(`API utilizando Node.js,Express e MySQL`);
});
app.get('/alunos',(req,res)=>{
   // res.send(`exibindo todos os alunos`);
   ler(res);
});

app.get('/alunos/:id',(req,res)=>{
    res.send(`Exibindo dados de um aluno`);
});

app.post('/alunos',(req,res)=>{
    res.send(`INSERINDO ALUNOS`);
});

app.patch('/alunos/:id',(req,res) => {
res.send(`Atualizando dados do aluno`);
});

app.delete('/alunos/:id',(req,res) => {
    res.send(`Aluno excluido com sucesso`);
    });

app.listen(porta,() => {
    console.log(`Servidor rodando na porta ${porta}`);
});