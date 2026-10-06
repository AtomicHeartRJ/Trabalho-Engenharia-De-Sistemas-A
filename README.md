# 🚀 API e Sistema de Gerenciamento de Clientes

Este repositório contém o projeto de uma aplicação completa de gerenciamento de clientes, estruturada em uma arquitetura de separação de responsabilidades (Backend em Node.js com Fastify e Prisma + Frontend em React com Vite e Tailwind CSS).

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** & **TypeScript**: Ambiente de execução e tipagem estática.
- **Fastify**: Framework web rápido e de baixo overhead.
- **Prisma ORM**: Gerenciamento e comunicação com o banco de dados.
- **MongoDB Atlas**: Banco de dados NoSQL hospedado na nuvem.
- **CORS**: Habilitação de requisições seguras entre origens.

### Frontend
- **React.js** (com **Vite**): Biblioteca para construção de interfaces e empacotamento rápido.
- **Tailwind CSS**: Estilização utilitária e padronização dos componentes.
- **Axios**: Cliente HTTP para comunicação e consumo da API.
- **React Icons**: Biblioteca para renderização dos ícones visuais na interface.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
1. **Node.js** (versão 18 ou superior recomendada).
2. **Git** para clonar o repositório.
3. Uma conta e um cluster configurado no **MongoDB Atlas** (ou uma instância local do MongoDB).

---

## ⚙️ Passo a Passo para Instalação e Execução

### 1. Clonando o Repositório
Abra o seu terminal e execute o comando abaixo para clonar o projeto:

```bash


git clone [https://github.com/AtomicHeartRJ/Trabalho-Engenharia-De-Sistemas-A.git](https://github.com/AtomicHeartRJ/Trabalho-Engenharia-De-Sistemas-A.git)
cd Trabalho-Engenharia-De-Sistemas-A
2. Configurando e Executando o Backend
Navegue até a pasta do backend (ou raiz, dependendo da estrutura do seu repositório):

Bash
cd backend
Instale as dependências do projeto:

Bash
npm install
(Dica: Se estiver a executar num ambiente com restrições de script como o PowerShell, utilize npm.cmd install)

Configure as variáveis de ambiente:

Crie um arquivo .env na raiz da pasta do backend.

Adicione a string de conexão do seu MongoDB Atlas no seguinte formato:

Snippet de código
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority"
Execute as migrações/configuração do Prisma:

Bash
npx prisma generate 
(Dica: Caso ocorra o erro PrismaClientInitializationError no Windows, adicione binaryTargets = ["native", "windows"] no seu schema.prisma e rode npx.cmd prisma generate)

Inicie o servidor em modo de desenvolvimento:

Bash
npm run dev  
O servidor backend estará rodando na porta padrão (geralmente http://localhost:3333). Pode testar a rota de criação no Insomnia com um POST enviando no Body JSON:

JSON
{
  "name": "Nome do Teste",
  "email": "teste@email.com"
}
3. Configurando e Executando o Frontend
Abra um novo terminal e navegue até a pasta do frontend:

Bash
cd frontend
Instale as dependências da interface web:

Bash
npm install
Inicie o servidor de desenvolvimento do React:

Bash
npm run dev
A página estará acessível no seu navegador, geralmente através do endereço local http://localhost:5173.
