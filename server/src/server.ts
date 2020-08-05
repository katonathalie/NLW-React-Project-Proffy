import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// recebe a porta : localhost:3333
app.listen(3333); //ouvir requisicoes http

// Exemplo de ROTA: http://localhost:3333/users
// Exemplo de recurso: users, contacts, etc
// Metodos HTTP: GET (listar, buscar), POST (criar nova informacao), PUT (atualizar informacao existente), DELETE (deletar informacao)

// Corpo (Request body) : dados para criacao ou atualizacao de registro
// Route Params: identificar qual recurso eu quero atualizar ou deletar
// Query Params: listagens, paginação, filtros, ordenaçao

/// por padrao o express nao entende JSON




