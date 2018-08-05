### REST API

# Implementação de CRUD de pessoas e seus contatos

# Stack
- NodeJS
- Express Framework
- Jest test
- Docker
- Babel
- Eslint
- Prettier

# Endpoints
- ```GET /api/person```
- ```POST /api/person```
   - Exemplo de payload
```json
{
  "name": "Luiz Filipe",
  "contacts": [
    {
      "service": "facebook",
      "contact": "luizfilipemoresco"
    }
  ]
}
```
- ```PUT /api/person([0-9]+)```
   - Exemplo de payload
```json
{
  "name": "Luiz Filipe",
  "contacts": [
    {
      "service": "facebook",
      "contact": "luizfilipemoresco"
    },
    {
      "service": "phone",
      "contact": "48 9 96**-5****"
    }
  ]
}
```
- ```DELETE /api/person/([0-9]+)```

# Como executar em ambiente de desenvolvimento
- Rodar o comando ```make``` e irá usar docker-compose para iniciar o postgres e a aplicação em modo de desenvolvimento

# Como executar em ambiente de produção
- Rodar o comando ```make prod``` e irá iniciar o docker com postgres e a aplicação

# Como executar com docker
- Rodar ```make``` para fazer o build da imagem.
- Rodar ```make run string='string_a_ser_validada'``` para fazer o build da imagem.

# Rodar os teste
- Rodar ```yarn``` para instalar as depêndencias
- Rodar ```yarn test``` para executar todos os testes
- Rodar ```yarn test``` para executar todos os testes
- Rodar ```yarn dev:coverage``` em implementação dos testes
- Rodar ```yarn coverage``` irá gerar um diretório chamado  ```coverage``` onde pode ser visto via browser o coverage. Exemplo ```firefox coverage/lcov-report/index.html```

Obs: Neste projeto não foi implementado e garantido 100% de cobertura de testes. Apenas foi implementado uma parte para desmonstrar conhecimento e dado foco em outras questões do projeto.
