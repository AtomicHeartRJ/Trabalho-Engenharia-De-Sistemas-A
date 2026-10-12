🚀 Sistema de Gerenciamento de Clientes (Full-Stack)

Este repositório contém uma aplicação Full-Stack completa para o gerenciamento de clientes, estruturada com separação de responsabilidades entre Backend (Node.js/API) e Frontend (React/Interface).

O projeto inclui um sistema CRUD completo (Criar, Ler, Atualizar e Deletar) com atualizações em tempo real na interface e validações de usuário.

🛠️ Tecnologias Utilizadas

Backend (API)

Node.js & TypeScript: Ambiente de execução e tipagem.

Fastify: Framework web de alta performance.

Prisma ORM: Gerenciamento e comunicação com o banco de dados.

MongoDB Atlas: Banco de dados NoSQL na nuvem.

CORS: Configuração de segurança para comunicação entre origens.

Frontend (Interface Web)

React.js (com Vite): Biblioteca para construção da interface de usuário.

Tailwind CSS: Estilização ágil e responsiva.

Axios: Cliente HTTP para consumo da API.

React Icons: Biblioteca de ícones visuais (Lixeira, Lápis de edição).

📋 Pré-requisitos

Para rodar este projeto na sua máquina, você precisará de:

Node.js (versão 18 ou superior).

Git instalado.

Uma conta e um cluster configurado no MongoDB Atlas (ou MongoDB local) para a Connection String.

⚙️ Instalação e Configuração

1. Clonar o Repositório

Abra o terminal e execute:

git clone https://github.com/AtomicHeartRJ/Trabalho-Engenharia-De-Sistemas-A.git
cd Trabalho-Engenharia-De-Sistemas-A


2. Configurando o Backend (Terminal 1)

Abra um terminal, navegue até a pasta do backend e instale as dependências:

cd backend
npm install


Configuração do Banco de Dados:
Crie um arquivo chamado .env na raiz da pasta backend e adicione a sua string de conexão do MongoDB:

DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority"


Sincronizar o Prisma e Iniciar o Servidor:

npx prisma generate
npm run dev


O backend estará rodando em http://localhost:3333.

3. Configurando o Frontend (Terminal 2)

Mantenha o terminal do backend aberto. Abra um novo terminal, navegue até a pasta do frontend e inicie a aplicação:

cd frontend
npm install
npm run dev


Acesse a interface no seu navegador através de http://localhost:5173.

✨ Funcionalidades Implementadas para Teste

Ao abrir a aplicação no navegador, você poderá testar o ciclo completo de vida dos dados (CRUD):

Validação de Formulário: Tente cadastrar um cliente com os campos vazios. O sistema bloqueará o envio, a borda dos campos ficará vermelha e alertas de texto exigindo o preenchimento aparecerão.

Cadastro (POST): Preencha nome e e-mail e clique em "Cadastrar". O cliente aparecerá instantaneamente na lista abaixo e os campos do formulário serão limpos.

Listagem (GET): Todos os clientes salvos no banco de dados são carregados automaticamente ao abrir a página.

Edição (PUT): Clique no botão azul (lápis) em qualquer cartão. Os dados voltarão para o formulário no topo, o botão mudará para "Atualizar Cliente" e um botão "Cancelar" aparecerá. Ao salvar, a lista é atualizada em tempo real.

Exclusão (DELETE): Clique no botão vermelho (lixeira). O cliente será apagado do banco de dados e removido imediatamente da tela.

👥 Colaboradores

Autora: Rebeca Dias

Professor: Clique33
