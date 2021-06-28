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

<br>
<br>

## Especificações - MODEL HOST
 
<br>
<br>


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

## GET

---
Protocolo: HTTP
<br>
**Resposta do Servidor** 
<br> 
HTTP: 200 OK 

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
## POST
<br>
<br>
Protocolo: HTTP
<br>
Metodo: POST
<br>
Requirido : Header Baerer Token
<br>
Body:

*Obrigatório enviar todas as propriedades requiridas*
```
{
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
<br>
 HTTP: 201 
```
{
    mensagem : String,
    data : { Host }
}
```
## PATCH


<br>
<br>
Protocolo: HTTP
<br>
Metodo: PATCH
<br>
Requirido : Params ID,  Header Baerer Token
<br>
Body:

*Pode enviar uma ou mais propriedades a serem atualizadas*

```
{
    "name": "Ponte Arco-Iris Atualizado", 
    "activitiesAndProjects": [
        {
            "title": "Oficinas",
            "description": "corte e costura, aula de Libras (língua brasileira de sinais), capoeira, fotografia e história da arte são algumas das oficinas já promovidas pela casa"
        }
    ],
}
```

**Resposta do Servidor**
<br>
 HTTP: 200 
```
{
    mensagem : String,
    data : { Host }
}
```
## PUT
<br>
<br>

<br>
<br>
Protocolo: HTTP
<br>
Metodo: PUT
<br>
Requirido : Params ID,  Header Baerer Token
<br>
Body:

*Pode enviar uma ou mais propriedades a serem atualizadas*

```
{
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
<br>
status 200 OK
```
{
    mensagem : String,
    data : { Host }
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
HTTP: 200 OK
```
{
    mensagem : String,
}
```



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
    "type": "Organização não governamental", 
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

<br>

201 create
```
{
    mensagem : String,
    data : { Adress  }
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
    "district": "Novo Bairro",
}
```
**Resposta do Servidor**

<br>

200 OK
```
{
    mensagem : String,
    data : { Adress  }
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

<br>

200 OK
```
{
    mensagem : String,
    data : { Adress  }
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





# Resumo - Colaboradoras

*base-url :::* **'admin/'**

Metodo | Rotas | Recurso
------------ | -------- | -------------
 GET  | '/' | Retorna todes colaboradores.
 GET | '/{id}' | Retorna um colaborador(a,e)
 POST | '/' | Cria um colaborador(a,e).
 PUT | '/{id}' | Substitue toda esse Colaborador(a,e).
 PATCH | '/{id}' | Atualiza uma ou mais propriedades de um Colaborador(a,e).
 DELETE | '/{id}' | Deleta um  Colaborador(a,e).
 
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



