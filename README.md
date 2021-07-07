#  Ponte Arco-Iris

**versão:** 1.0.0
---
**autora:** Beatriz Ramerindo
---
**descrição:** Essa API irá organizar os abrigos por estados, basicamente ela servirá tanto para pessoas desabrigadas a acharem esse espaço ( no aplicativo/webapp que ou farei sozinha ou com ajuda no futuro ) , tanto para empresas e voluntários acharem esses espaços para fazer doação/trabalho.   E o mesmo servirá para profissionais de assistencia social e aliades( termo para pessoas cis que ajudam) a conseguir esse primeiro apoio a pessoa.
---
Como usar?
---
---
*base url* 
---
modo desenvolvimento
---

```
npm run dev
```

```
http://localhost:3030/
```

---
modo production
---

```
http://hospedagem/
```

---
utilizar o **Postman**  ou **Insomia** para testes
---
<br>
<br>
<br>

# API Documentation

### END-POITS

<br>
<br>

# Resumo - Host

# *lares/*

**ATENCÃO, *essa rota não retorna os endereços, somente os lares***

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/' | Retorna todas as casas de acolhimento.
 GET | '/{id}' | Retorna uma casa de acolhimento
 POST | '/' | Cria uma entidade de acolhimento.
 PUT | '/{id}' | Substitue toda essa entidade.
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de uma entidade.
 DELETE | '/{id}' | Deleta uma entidade de acolhimento.

<br>
<br>

## Especificações - MODEL HOST

 
<br>
<br>

KEY | ATRIBUTO | TYPE | REQUIRIDO
------- | ---- | ------- | ---------------------------
_id | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar
name | "string" |  SIM
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

## **GET**  " / "

---
**exemplo:** *{base-url}/api/v1/lares/'*
---
---
**descrição**: Retorna todes os lares de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **LIVRE**
---
**Resposta do Servidor** 
---
status **200** *ok*

```
[
   {
    "createdAt": "2021-07-06T21:08:53.698Z",
    "type": "Organização não governamental",
    "_id": "60e4cbdde5731c02d4188a0c",
    "name": "Ponte Arco-Iris",
    "description": "Essa API irá organizar os abrigos por estados, basicamente ela servirá tanto para pessoas desabrigadas a acharem esse espaço ( no aplicativo/webapp que ou farei sozinha ou com ajuda no futuro ) , tanto para empresas e voluntários acharem esses espaços para fazer doação/trabalho.   E o mesmo servirá para profissionais de assistencia social e aliades( termo para pessoas cis que ajudam) a conseguir esse primeiro apoio a pessoa.",
    "foundedAt": "2021-06-24T03:00:00.000Z",
    "activityDomain": "Organização de Diretos Humanos",
    "cnpj": 12345678,
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ],
    "__v": 0
  }
]
```
## **GET**  " /{id} "

---
**exemplo:** *{base-url}/api/v1/lares/{id}'*
---
---
**descrição**: Retorna uma casa de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: N/A
---
---
Acesso: **LIVRE**
---
### REQUIRIDO

 * ***params id**


**Resposta do Servidor** 
---
status **200** *ok*
```
   {
    "createdAt": "2021-07-06T21:08:53.698Z",
    "type": "Organização não governamental",
    "_id": "60e4cbdde5731c02d4188a0c",
    "name": "Ponte Arco-Iris",
    "description": "Essa API irá organizar os abrigos por estados, basicamente ela servirá tanto para pessoas desabrigadas a acharem esse espaço ( no aplicativo/webapp que ou farei sozinha ou com ajuda no futuro ) , tanto para empresas e voluntários acharem esses espaços para fazer doação/trabalho.   E o mesmo servirá para profissionais de assistencia social e aliades( termo para pessoas cis que ajudam) a conseguir esse primeiro apoio a pessoa.",
    "foundedAt": "2021-06-24T03:00:00.000Z",
    "activityDomain": "Organização de Diretos Humanos",
    "cnpj": 12345678,
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ],
    "__v": 0
  }
```

<br>
<br>

## **POST**  " / "

---
**exemplo:** *{base-url}/api/v1/lares/'*
---
---
**descrição**: Registra um lar de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
---

*Obrigatório enviar todas as propriedades requiridas*

```
{
    "name": "Ponte Arco-Iris", 
    "description": "Essa API irá organizar os abrigos por estados, basicamente ela servirá tanto para pessoas desabrigadas a acharem esse espaço ( no aplicativo/webapp que ou farei sozinha ou com ajuda no futuro ) , tanto para empresas e voluntários acharem esses espaços para fazer doação/trabalho.   E o mesmo servirá para profissionais de assistencia social e aliades( termo para pessoas cis que ajudam) a conseguir esse primeiro apoio a pessoa.",
    "foundedAt": "06/24/2021",
    "activityDomain": "Organização de Diretos Humanos",
    "type": "Organização não governamental",
    "cnpj": 12345678,
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ]
}
```

**Resposta do Servidor** 
---
status **201** *create*

```
{
    message : String,
    data : { Host }
}
```

## PATCH

## **PATCH**  " /{id} "

---
**exemplo:** *{base-url}/api/v1/lares/{id}'*
---
---
**descrição**: Retorna todes os lares de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
 * ***params id**

*Pode enviar uma ou mais propriedades a serem atualizadas*

```
{
    "name": "Ponte Arco-Iris ORG", 
}
```

**Resposta do Servidor** 
---
status **200** *OK*

```
{
    message : String,
    data : { Host }
}
```
<br>
<br>

## **PUT*  " /{id} "

---
**exemplo:** *{base-url}/api/v1/lares/{id}'*
---
---
**descrição**: Retorna todes os lares de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
 * ***params id**
 
*Pode enviar uma ou mais propriedades a serem atualizadas*

```
{
    "name": "Ponte Arco-Iris ONG", 
    "description": "Essa API irá organizar os abrigos por estados, basicamente ela servirá tanto para pessoas desabrigadas a acharem esse espaço ( no aplicativo/webapp que ou farei sozinha ou com ajuda no futuro ) , tanto para empresas e voluntários acharem esses espaços para fazer doação/trabalho.   E o mesmo servirá para profissionais de assistencia social e aliades( termo para pessoas cis que ajudam) a conseguir esse primeiro apoio a pessoa.",
    "foundedAt": "06/24/2021",
    "activityDomain": "Organização de Diretos Humanos",
    "type": "Organização não governamental",
    "cnpj": 99999999,
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ]
}
```

**Resposta do Servidor** 
---
status **200** *OK*

```
{
    message : String,
    data : { Host }
}
```

## **DELETE*  " /{id} "

---
**exemplo:** *{base-url}/api/v1/lares/{id}'*
---
---
**descrição**: Retorna todes os lares de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO
 * ***Baerer Token**
 * ***params id**
 
**Resposta do Servidor** 
---
status **200** *OK*

```
{
    message : String,
    data : { Host }
}
```

<br>
<br>
<br>

# Resumo ADRESS 

# *endereco/*
<br>
<br>

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/' | Retorna todas as casas de acolhimento e endereços.
 GET | '/{id}' | Retorna uma casa de acolhimento  e endereços
 POST | '/' | Cria uma entidade de acolhimento  e endereços.
 PUT | '/{id}' | Substitue toda essa entidade  e endereços .
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de uma entidade e endereços.
 DELETE | '/{id}' | Deleta uma entidade de acolhimento  e endereços.
 
<br>
<br>
<br>

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

<br>
<br>

## **GET**  " / "

---
**exemplo:** *{base-url}/api/v1/endereco/'*
---
---
**descrição**: Retorna todes os lares de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: 
---
query string
---
{ estado : string } - *filtra por estado - case sensitive*
---
Acesso: **LIVRE**
---
**Resposta do Servidor** 
---
status **200** *ok*

```
[{ 
    "district": "Bairro",
    "city": "Cidade",
    "state": "Estado",
    "uf" : "RJ",
    "road": "Rua do Arco Iris",
    "number": 24,
    "cep": 22220040,
    "createAt": "2021-07-02T06:22:16.011Z",
    "_id": "60df3d7998c9910ffc29a25f",
    "host": "60d260377b95e043a892de80"
}]
```
## **GET**  " /{id} "

---
**exemplo:** *{base-url}/api/v1/endereco/{id}'*
---
---
**descrição**: Retorna uma casa de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: N/A
---
---
Acesso: **LIVRE**
---
### REQUIRIDO

 * ***params id**


**Resposta do Servidor** 
---
status **200** *ok*


```
{ 
    "district": "Bairro",
    "city": "Cidade",
    "state": "Estado",
    "uf" : "RJ",
    "road": "Rua do Arco Iris",
    "number": 24,
    "cep": 22220040,
    "createAt": "2021-07-02T06:22:16.011Z",
    "_id": "60df3d7998c9910ffc29a25f",
    "host": "60d260377b95e043a892de80"
}
```
<br>
<br>

---


## **POST**  " / "

---
**exemplo:** *{base-url}/api/v1/enderecos/'*
---
---
**descrição**: Registra o endereco de um lar de acolhimento.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
---


*Obrigatório enviar todas as propriedades requiridas*

<br>
Body:

```
{
    "district": "Bairro",
    "city": "Cidade",
    "state": "Estado",
    "uf" : "RJ",  // max 2 values
    "road": "Rua do Arco Iris",
    "number": 24,
    "cep": 22220040,
    "host": "60d260377b95e043a892de80"
}
```

**Resposta do Servidor** 
---
status **201** *create*

```
{
    message : String,
    data : { Adress  }
}
```


## **PATCH**  " /{id} "

---
**exemplo:** *{base-url}/api/v1/enderecos/{id}'*
---
---
**descrição**: Atualiza uma ou mais propriedades da entidade endereço.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
 * ***params id**
---


*Atualiza uma ou mais propriedades*

<br>
Body:

```
{
    "district": "Novo Bairro",
}
```

**Resposta do Servidor** 
---
status **200** *ok*

```
{
    mensagem : String,
    data : { Adress  }
}
```

## **PUT**  " /{id} "

---
**exemplo:** *{base-url}/api/v1/enderecos/{id}'*
---
---
**descrição**: Subescreve um endereco de um lar completamente.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
 * ***params id**
---


Body:

```
{
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
---
status **200** *ok*

```
{
    mensagem : String,
    data : { Adress  }
}
```

## **DELETE**  " /{id} "

---
**exemplo:** *{base-url}/api/v1/enderecos/{id}'*
---
---
**descrição**: Subescreve um endereco de um lar completamente.
---
**Protocolo:** HTTP
---
Parametros opcionais: **N/A**
---
Acesso: **PRIVADO**
---

### REQUIRIDO

 * ***Body**
 * ***Baerer Token**
 * ***params id**
**Resposta do Servidor**
<br>
status : 200
<br>

```
{
    mensagem : String,
}
```

# Resumo - Colaboradores

## admin/

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/' | Retorna todes colaboradores.
 GET | '/{id}' | Retorna um colaborador(a, e)
 POST | '/register' | Cria um colaborador(a, e).
 PUT | '/{id}' | Substitue toda esse Colaborador(a, e).
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de um Colaborador(a, e).
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de um Colaborador(a, e).
 DELETE | '/{id}' | Deleta um  Colaborador(a, e).
 
<br>
<br>
<br>

### Especificações - MODEL Colaboradoras

KEY | ATRIBUTO | TYPE | REQUIRIDO
------- | ---- | ------- | ---------------------------
_id | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar
createAt | "string" | String | SIM > Gerado automaticamente \ não é possivel modificar.
email | "string" | String | SIM 
password | "string" | String | SIM 
nome | "string" | String | SIM 
sobrenome | "string" | String | SIM 

<br>
<br>

## GET

<br>
metodo HTTP:
<br>
Requirido : Header Baerer Token
<br>

---
**Resposta do Servidor**

```
[{ 
    "email": "colaboradora@gmail.com", 
    "nome": "Beatriz",
    "sobrenome": "Ramerindo dos Santos",
}]
```

<br>
<br>

---

## POST

<br>
<br>
Protocolo: HTTP
<br>
Metodo: POST
<br>
Requirido : Header Baerer Token
<br>

*Obrigatório enviar todas as propriedades requiridas*

<br>
Body:

```
{
    "email": "colaboradora@gmail.com", 
    "nome": "Beatriz",
    "sobrenome": "Ramerindo dos Santos",
    "password": "12345Abc@"
}
```

**Resposta do Servidor**

<br>

201 create

```
{
    mensagem : String,
    data : { Colaboradora  }
}
```

## PATCH

<br>
<br>
Protocolo: HTTP
<br>
Metodo: PATCH
<br>
Requirido : Header Baerer Token
<br>

*Atualiza uma ou mais propriedades*

<br>
Body:

```
{
    "nome": "Jane",
}
```

**Resposta do Servidor**

<br>

200 OK

```
{
    mensagem : String,
    data : { Colaboradora  }
}
```

## PUT

<br>
<br>
Protocolo: HTTP
<br>
Metodo: PUT
<br>
Requirido : Header Baerer Token
<br>

*Obrigatório enviar todas as propriedades requiridas*

<br>
Body:

```
{
    "email": "colaboradora2@gmail.com", 
    "nome": "Keyla",
    "sobrenome": "Não informado",
    "password": "12345Abc@"
}
```

**Resposta do Servidor**

<br>

200 OK

```
{
    mensagem : String,
    data : { Colaboradora  }
}
```

## DELETE 

Metodo: DELETE 
<br>
Protocolo: HTTP
<br>
Requirido : Header Baerer Token
<br>

**Resposta do Servidor**
<br>
status : 200
<br>

```
{
    mensagem : String,
}
```

# Outras Rotas

*base-url:* [ "/" ]

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/doc' | Retorna a documentação em formato Markdown
 GET  | '/' | Apresentação da API
