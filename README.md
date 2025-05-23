# Validador de Notas

Sistema simples para validação de notas de alunos, cálculo de média e determinação da situação (Aprovado, Recuperação ou Reprovado). O projeto possui interface web e testes automatizados com cobertura de código.


## Estrutura do projeto
```
├── tests
│   ├── script.test.js
│   └── setupTests.js
├── index.html
├── script.js
├── style.css
├── jest.config.js
├── package.json

```

## Funcionalidades

- Cadastro de nome e notas dos alunos
- Validação das notas (apenas valores entre 0 e 10 são aceitos)
- Cálculo automático da média
- Exibição da situação do aluno:
  - **Aprovado**: média ≥ 7
  - **Recuperação**: 5 ≤ média < 7
  - **Reprovado**: média < 5
- Listagem dos alunos cadastrados
- Armazenamento dos dados no `localStorage`
- Testes automatizados com [Jest](https://jestjs.io/)
- Pipeline CI com GitHub Actions e integração com SonarCloud

## Como usar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/WendelBitencourt/validador-notas-ci.git
   cd validador-notas-ci

2. **Instale as dependências:**
   ```sh
    npm install
    ```
3. **Inicie o servidor:**
   ```sh
   npm start
   ```
4. **Acesse a aplicação:**
   Abra o navegador e acesse `http://localhost:3000`.

5. **Adicione alunos e notas:**
   Preencha os campos de nome e notas, e clique em "Adicionar Aluno". As notas devem estar entre 0 e 10.

6. **Visualize os resultados:**
   Após adicionar os alunos, você verá a lista com os nomes, notas, média e situação de cada aluno.

7. **Teste a aplicação:**   
   Execute os testes automatizados com o comando:
   ```sh
   npm test
   ```
   Isso garantirá que todas as funcionalidades estejam funcionando corretamente.

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- Jest
- GitHub Actions
- SonarCloud


## Integração Contínua
- O projeto utiliza GitHub Actions para executar testes automatizados sempre que houver um push ou pull request.
- A cobertura de código é verificada e relatada no SonarCloud, garantindo a qualidade do código.
