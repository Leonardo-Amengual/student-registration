## Pré-requisitos

- **PHP** (versão 8.1 ou superior)
- **Composer** (para instalar dependências PHP)
- **Node.js** (v22.13.0)
- **npm** (para instalar dependências do React)
- **Servidor Web** (Apache ou Nginx, ou use o servidor embutido do PHP)

## Passo a Passo

### 1. Clonando o Repositório

Clone o repositório do GitHub:

```bash
git clone https://github.com/username/nome-do-repositorio.git

```

### 2. Configurando o Backend

2.1 Instalar Dependências PHP
Na raiz do projeto, onde o arquivo composer.json está localizado, execute o seguinte comando para instalar as dependências do backend

```bash
    composer install
```

2.2 Configurar o Ambiente do CodeIgniter

1.  Abra o arquivo .env e configure as variáveis de ambiente, como a URL base do site e configurações de banco de dados:

```bash
   app.baseURL = 'http://localhost:8080'
```

2.3 Rodar o Backend

```bash
    php spark serve
```

### 3. Configurando o Frontend

3.1 Instalar Dependências do React
Dentro da pasta do frontend, instale as dependências do React

```bash
    npm install
```

3.2 Rodar o Frontend

```bash
    npm start
```
