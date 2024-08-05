# Aplicativo de Chat em Tempo Real - Backend
## Descrição
Este é o backend para um aplicativo de chat em tempo real, desenvolvido usando Node.js, Express e Socket.io. O sistema gerencia a comunicação em tempo real entre usuários, armazena mensagens e informações dos usuários em uma base de dados SQLite, e utiliza Prisma para o gerenciamento de banco de dados.

## Tecnologias Utilizadas
- Node.js: Ambiente de execução para JavaScript do lado do servidor.
- Express: Framework para construção de APIs e gerenciamento de rotas.
- Socket.io: Biblioteca para comunicação em tempo real via WebSockets.
- Prisma: ORM para gerenciamento do banco de dados.
- SQLite: Banco de dados relacional usado para armazenar dados de mensagens e usuários.
- TypeScript: Superset do JavaScript para fornecer tipagem estática e recursos adicionais.
- Configuração do Projeto
## Requisitos

Node.js (versão 16 ou superior)
```bash 
npm ou yarn ou pnpm
```

## Instalação
Clone este repositório:
```bash 
git clone <URL_DO_REPOSITÓRIO>
```
Navegue até o diretório do projeto:
```bash 
cd <NOME_DO_DIRETÓRIO>
```
Instale as dependências:
```bash 
npm install
```
Configure o ambiente. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
```bash 
.env
DATABASE_URL="file:./dev.db"
PORT=3333
```
Gere os arquivos do Prisma:
```bash 
npx prisma generate
```

## Scripts
Desenvolvimento: Para rodar o servidor em modo de desenvolvimento (com recarga automática):

```bash  
npm run dev
``` 
Construir: Para compilar o código TypeScript para JavaScript:
```bash 
npm run build
```
Iniciar: Para iniciar o servidor após a compilação:
```bash 
npm start
```
## Estrutura do Projeto
src/
- server.ts: Arquivo principal do servidor que configura o Express e o Socket.io.
- app.ts: Configuração do aplicativo Express e integração com o Prisma.
socket/
- socketService.ts: Configuração e lógica de comunicação em tempo real com Socket.io.
config/
- corsConfig.ts: Configurações de CORS.
- env.ts: Carrega e exporta variáveis de ambiente.
prisma/
- schema.prisma: Definição do esquema do banco de dados.

## Executando o Projeto
Inicie o servidor em modo de desenvolvimento:
```bash 
npm run dev
```
O servidor estará disponível em http://localhost:3333.

## Endpoints
#### Endpoint de teste para verificar se o servidor está funcionando.

```http
 GET /
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Hello World |

####  Recupera todas as mensagens para uma sala específica.

```http
GET /messages/:room
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Uma lista de mensagens na sala especificada, cada mensagem incluindo detalhes do usuário.mensagens. |
| `room` | `string` | **Obrigatório**. O nome da sala para a qual você deseja recuperar as mensagens. |


####  Remove todas as mensagens de uma sala específica.

```http
DELETE /messages/:room
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Uma lista de mensagens na sala especificada, cada mensagem incluindo detalhes do usuário.mensagens. |
| `room` | `string` | **Obrigatório**. O nome da sala cujas mensagens devem ser excluídas. |

####  Cria um novo usuário se ele não existir. Este endpoint é usado para garantir que um usuário esteja presente antes de criar uma mensagem.

```http
POST /users
```

```bash  
{
  "userId": "string"
}
```

Observações
Certifique-se de que o banco de dados SQLite está corretamente configurado e acessível.
Se você deseja contribuir para o projeto, por favor, abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para mais detalhes.

Sinta-se à vontade para ajustar qualquer seção conforme necessário!
