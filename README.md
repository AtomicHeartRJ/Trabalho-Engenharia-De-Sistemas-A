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
git clone https://github.com/AtomicHeartRJ/Trabalho-Engenharia-De-Sistemas-A.git
cd Trabalho-Engenharia-De-Sistemas-A
```

---

### 2. Configurando e Executando o Backend

1. Navegue até a pasta do backend (ou raiz, dependendo da estrutura do seu repositório):
   ```bash
   cd backend
   ```
   *(Caso o projeto seja estruturado em monorepo, ajuste o diretório correspondente).*

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz da pasta do backend.
   - Adicione a string de conexão do seu MongoDB Atlas no seguinte formato:
     ```env
     DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority"
     ```

4. Execute as migrações/configuração do Prisma:
   ```bash
   npx prisma generate
   ```

5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   O servidor backend estará rodando na porta padrão (geralmente `http://localhost:3333` ou a configurada no Fastify).

---

## 👥 Colaboradores
- **Autora:** Rebeca Dias
- **Professor:** Clique33 
