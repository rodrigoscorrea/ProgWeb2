Esse é o repositório do trabalho da disciplina de Programação Web 2

Preparando o projeto

1. clone este repositório
2. Copie os conteúdos dos arquivos ".env.example" para arquivos ".env". Há um arquivo no backend, um no frontend e outro na main da aplicação
3. Execute "npm install" no frontend, no backend e no main da aplicação, para instalar as dependências utilizadas no projeto
4. Execute o comando "docker compose up" para levantar os containeres da aplicação
5. Estabeleça a conexão com o banco de dados utilizando a senha e o nome presentes no arquivo .env
   5.1. Se estiver utilizando Dbeaver, lembre-se de marcar a opção "allowPublicKeyRetrieval" para TRUE
6. Na pasta backend, execute o comando "npm run prisma migrate deploy" para aplicar no banco de dados as tabelas criadas
7. Ainda na pasta backend, execute o comando "npm run prisma db seed" para povoar a tabela tipoUsuario
8. Pronto, a aplicação está pronta para uso
   
