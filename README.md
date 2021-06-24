#  Ponte Arco-Iris

**versão:** 1.0.0
<br>
**autora:** Beatriz Ramerindo
<br>
**descrição:** A aplicação tem como objetivo mapear todas as casas que acolhem LGBTQI no Rio, seja elas Governamental ou não.



# Resumo - Host

*base-url :::* **'acolhida/'**

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/' | Retorna todas as casas de acolhimento.
 GET | '/{id}' | Retorna uma casa de acolhimento
 POST | '/' | Cria uma entidade de acolhimento.
 PUT | '/{id}' | Substitue toda essa entidade.
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de uma entidade.
 DELETE | '/{id}' | Deleta uma entidade de acolhimento.
 

## GET

---
**Resposta do Servidor**

```
[{
    _id : "60d011354c1a556b04fd2386",
    createAt : "2021-06-21T04:10:26.398Z",
    "name": "Ponte Arco-Iris",
    "description": "É uma API voltada para conectar profissionais de Assistância Social e Voluntários a esses espaços e ao mesmo tempo, conectar quem precisa a um espaço seguro mais proximo.",
    "foundedAt": "06/24/2021",
    "activityDomain": "Organização de Diretos Humanos",
    "type": "Organização não governamental",
    cnpj: "00000/00"
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ],
}]
```
<br>
<br>

---
## POST, PUT, PATCH
<br>
<br>

```
{
    _id : "**GERADO AUTOMATICAMENTE | Não é possivel modificar**",
    createAt : "**GERADO AUTOMATICAMENTE | Não é possivel modificar**",
    "name": "Ponte Arco-Iris", 
    "description": "É uma API voltada para conectar profissionais de Assistância Social e Voluntários a esses espaços e ao mesmo tempo, conectar quem precisa a um espaço seguro mais proximo.",
    "foundedAt": "06/24/2021",
    "activityDomain": "Organização de Diretos Humanos",
    "type": "Organização não governamental",
    cnpj: 12345678
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ],
}
```
**Resposta do Servidor**
```
{
    mensagem : String,
    data : { Host }
}
```

## DELETE 
**Resposta do Servidor**
```
{
    mensagem : String,
}
```

### Especificações - MODEL HOST

KEY | ATRIBUTO | TYPE | REQUIRIDO
------- | ---- | ------- | ---------------------------
_id | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar
createAt | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar.
description | "string" | String | SIM 
foundedAt | "string" | Date | SIM 
activityDomain | "string" | Date | SIM 
activitiesAndProjects | Array[{Object}] | Array | Opcional
type | "string" | String | Opcional
cnpj | "number" | Number | Opcional

---
<br>
<br>

# Resumo - Adress

*base-url :::* **'localizacao/'**

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/' | Retorna todas as casas de acolhimento.
 GET | '/{id}' | Retorna uma casa de acolhimento
 POST | '/' | Cria uma entidade de acolhimento.
 PUT | '/{id}' | Substitue toda essa entidade.
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de uma entidade.
 DELETE | '/{id}' | Deleta uma entidade de acolhimento.
 

## GET

---
**Resposta do Servidor**

```
[{ 
    "type": "Organização não governamental", 
    "district": "Bairro",
    "city": "Cidade",
    "state": "Estado",
    "uf" : "RJ",
    "road": "Rua do Arco Iris",
    "number": 24,
    "cep": 22220040,
    "host": "60d260377b95e043a892de80"
}]
```
<br>
<br>

---
## POST, PUT, PATCH
<br>
<br>

```
{
    _id : "**GERADO AUTOMATICAMENTE | Não é possivel modificar**",
    createAt : "**GERADO AUTOMATICAMENTE | Não é possivel modificar**",
    "type": "Organização não governamental", 
    "district": "Bairro",
    "city": "Cidade",
    "state": "Estado",
    "uf" : "RJ",
    "road": "Rua do Arco Iris",
    "number": 24,
    "cep": 22220040,
    "host": "60d260377b95e043a892de80"
}
```
**Resposta do Servidor**
```
{
    mensagem : String,
    data : { Adress  }
}
```

## DELETE 
**Resposta do Servidor**
```
{
    mensagem : String,
}
```
### Especificações - MODEL ADRESS

KEY | ATRIBUTO | TYPE | REQUIRIDO
------- | ---- | ------- | ---------------------------
_id | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar
createAt | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar.
state | "string" | String | SIM 
city | "string" | String | SIM 
district | "string" | String | SIM 
uf | "string" | String | SIM 
road | "string" | String | Sim
complement | "string" | String | Opcional
number | 0000 | Number | Sim
cep | 0000 | Number | Sim
host | "id" | String | sim



# Outras Rotas

*base-url:* [ "/" ]

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/doc' | Retorna a documentação em formato Markdown
 GET | '/' | Retorna um front demo construido com React  em formato HTML



