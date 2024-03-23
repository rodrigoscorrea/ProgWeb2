# Projeto final Loja - Programação Web 2

Esse repositório é destinado ao trabalho desenvolvido ao longo da disciplina de Programação Web II, ministrada pelo professor David Fernandes no período 2023/2.


# Instalação e configuração

 1. Clone este repositório: `https://github.com/rodrigoscorrea/ProgWeb2`
 2. Copie os conteúdos dos arquivos ".env.example" para arquivos ".env". Há um arquivo no backend, um no frontend e outro na main da aplicação
 3. Execute `npm install` no frontend, no backend e no main da aplicação, para instalar as dependências utilizadas no projeto.
 4. Execute o comando `docker compose up` para levantar os containeres da aplicação
 5. Estabeleça a conexão com o banco de dados utilizando a senha e o nome presentes no arquivo .env
	 5.1. Se estiver utilizando Dbeaver, lembre-se de marcar a opção "allowPublicKeyRetrieval" para TRUE
6. Na pasta backend, execute o comando `npm run prisma migrate deploy` para aplicar no banco de dados as tabelas criadas
7. Ainda na pasta backend, execute o comando `npm run prisma db seed` para povoar a tabela tipoUsuario

## Implementações Funcionais
 1. CRUD de Produtos no Backend e no Frontend
 2. CRUD de Usuários no Backend e no Frontend, com variações para admin e cliente
 3. Carrinho de Compras, que registra o id do produto e a quantidade comprada, funcionando apenas no Backend da aplicação
 4. Segue o link do vídeo no youtube demonstrando a funcionalidade do carrinho: 
## Limitações conhecidas
 1. Carrinho de compras não foi implementado no Frontend da aplicação
 2. A verificação do middleware "isAdmin" não funciona corretamente no Frontend, ou seja, mesmo que se faça login com um usuário Admin, este não tem poder de criar, editar ou deletar produtos. Entretanto, o middleware funciona corretamente no backend

## Agradecimentos
Agradecimentos ao Professor David Fernandes pela oferta e condução da disciplina durante o período letivo, assim como ao monitor da disciplina.