# Validador de Notas

Sistema simples para validação de notas de alunos, cálculo de média e determinação da situação (Aprovado, Recuperação ou Reprovado). O projeto possui interface web e testes automatizados com cobertura de código.

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