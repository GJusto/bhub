# BHub
#### _Projeto destinado ao cadastro de clientes da BHub._
___
## Iniciando o projeto

### Passo 1

#### Instalação de dependências

- __Para rodar o projeto é necessário ter instalado:__

   - Node.js
   - Yarn
   - Mongoose
   - Visual Studio Code

### Passo 2

#### Rodar o projeto

1. Rodar pelo Visual Studio Code, ou


2. Abrir o terminal na pasta raiz do projeto, e executar:

    ```bash
    yarn install  
    ```

    e em seguida:

     ```bash
    yarn start  
    ```

___
## Endpoints
A API possui os seguintes endpoints, listados abaixo por tópicos:

### 1. `createCustomer`
> _Cria um novo cliente._

&nbsp; 

#### Modelo de requisição:

**Mutation:**
```graphql
mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    corporateName
    phone
    adress
    signupDate
    declaredBilling
    bankDetails {
      agency
      accountNumber
      bank
    }
  }
}
```

**Variables:**
```graphql
{
  "input": {
    "corporateName": "nike",
    "phone": "1234-7896",
    "adress": "rua sports",
    "declaredBilling": 645548.21,
    "bankDetails": [
      {
        "agency": "987",
        "accountNumber": "00000-0",
        "bank": "120"
      },
      {
        "agency": "120",
        "accountNumber": "23000-0",
        "bank": "200"
      },
      {
        "agency": "999",
        "accountNumber": "111111",
        "bank": "3333"
      },
    ]
  }
}
```

#### Modelo de resposta:

~~~json
{
  "data": {
    "createCustomer": {
      "id": "15e0ef4e-74af-416f-828c-c4f7d8c46ea5",
      "corporateName": "nike",
      "phone": "1234-7896",
      "adress": "rua sports",
      "signupDate": "Thu Jul 27 2023 03:19:19 GMT-0300 (Horário Padrão de Brasília)",
      "declaredBilling": 645548.21,
      "bankDetails": [
        {
          "agency": "987",
          "accountNumber": "00000-0",
          "bank": "120"
        },
        {
          "agency": "120",
          "accountNumber": "23000-0",
          "bank": "200"
        },
        {
          "agency": "999",
          "accountNumber": "111111",
          "bank": "3333"
        }
      ]
    }
  }
}
~~~

&nbsp;

### 2. `updateCustomer`
> _Atualiza um usuário existente na base de dados._

&nbsp; 

#### Modelo de requisição:

**Mutation:**
```graphql
mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    id
    corporateName
    phone
    adress
    signupDate
    declaredBilling
    bankDetails {
      agency
      accountNumber
      bank
    }
  }
}
```

**Variables (JSON de "input" via body da requisição, e "id" via headers):**
```graphql
{
  "input": {
    "adress": "rua sportwear, 360"
  }
}
```

#### Modelo de resposta:

~~~json
{
  "data": {
    "updateCustomer": {
      "id": "6123abd0-6d46-4d07-853a-484a083f4d09",
      "corporateName": "nike",
      "phone": "1234-7896",
      "adress": "rua sportwear, 360",
      "signupDate": "Thu Jul 27 2023 03:33:23 GMT-0300 (Horário Padrão de Brasília)",
      "declaredBilling": 645548.21,
      "bankDetails": [
        {
          "agency": "987",
          "accountNumber": "00000-0",
          "bank": "120"
        },
        {
          "agency": "120",
          "accountNumber": "23000-0",
          "bank": "200"
        },
        {
          "agency": "999",
          "accountNumber": "111111",
          "bank": "3333"
        }
      ]
    }
  }
}
~~~

&nbsp;

### 3. `deleteCustomer`
> _Deleta um cliente já existente na base de dados._

&nbsp; 

#### Modelo de requisição:

**Mutation:**
```graphql
mutation DeleteCustomer($input: IdInput!) {
  deleteCustomer(input: $input) 
}
```

#### Modelo de resposta positivo:

~~~json
{
  "data": {
    "deleteCustomer": "Successfully removed!"
  }
}
~~~
&nbsp;

#### Modelo de resposta negativa:

~~~json
{
  "data": {
    "deleteCustomer": "Impossible to delete this customer. Try again with another id!"
  }
}
~~~
&nbsp;

### 4. `getAllCustomers`
> _Retorna todos os clientes cadastrados no bando de dados._

&nbsp; 

#### Modelo de requisição:

**Query:**
```graphql
query GetAllCustomers {
  getAllCustomers {
    id
    corporateName
    phone
    adress
    signupDate
    declaredBilling
    bankDetails {
      agency
      accountNumber
      bank
    }
  }
}
```

**Variables:**
```json
{}
```

#### Modelo de resposta:

~~~json
{
  "data": {
    "getAllCustomers": [
      {
        "id": "ca0bb389-f716-4db5-a08c-178d45fd2650",
        "corporateName": "natura",
        "phone": "1234-7896",
        "adress": "rua perfumes",
        "signupDate": "Thu Jul 27 2023 03:03:03 GMT-0300 (Horário Padrão de Brasília)",
        "declaredBilling": 645548.21,
        "bankDetails": [
          {
            "agency": "987",
            "accountNumber": "00000-0",
            "bank": "120"
          }
        ]
      },
      {
        "id": "66ff782f-d74f-43a1-a52f-90009475eea1",
        "corporateName": "nestle",
        "phone": "1234-7896",
        "adress": "rua chocolates",
        "signupDate": "Thu Jul 27 2023 03:03:29 GMT-0300 (Horário Padrão de Brasília)",
        "declaredBilling": 645548.21,
        "bankDetails": [
          {
            "agency": "987",
            "accountNumber": "00000-0",
            "bank": "120"
          },
          {
            "agency": "120",
            "accountNumber": "23000-0",
            "bank": "200"
          }
        ]
      },
      {
        "id": "6123abd0-6d46-4d07-853a-484a083f4d09",
        "corporateName": "nike",
        "phone": "1234-7896",
        "adress": "rua sportwear, 360",
        "signupDate": "Thu Jul 27 2023 03:33:23 GMT-0300 (Horário Padrão de Brasília)",
        "declaredBilling": 645548.21,
        "bankDetails": [
          {
            "agency": "987",
            "accountNumber": "00000-0",
            "bank": "120"
          },
          {
            "agency": "120",
            "accountNumber": "23000-0",
            "bank": "200"
          },
          {
            "agency": "999",
            "accountNumber": "111111",
            "bank": "3333"
          }
        ]
      }
    ]
  }
}
~~~

&nbsp;

### 5. `getCustomerById`
> _Retorna o apenas 1 (um) cliente filtrando por seu indexador único (ID)._

&nbsp; 

#### Modelo de requisição:

**Query:**
```graphql
query GetClientById($input: IdInput) {
  getCustomerById(input: $input) {
    id
    corporateName
    phone
    adress
    signupDate
    declaredBilling
    bankDetails {
      agency
      accountNumber
      bank
    }
  }
}
```

#### Modelo de resposta:

~~~json
{
  "data": {
    "getCustomerById": {
      "id": "15e0ef4e-74af-416f-828c-c4f7d8c46ea5",
      "corporateName": "nike",
      "phone": "1234-7896",
      "adress": "rua sports",
      "signupDate": "Thu Jul 27 2023 03:19:19 GMT-0300 (Horário Padrão de Brasília)",
      "declaredBilling": 645548.21,
      "bankDetails": [
        {
          "agency": "987",
          "accountNumber": "00000-0",
          "bank": "120"
        },
        {
          "agency": "120",
          "accountNumber": "23000-0",
          "bank": "200"
        },
        {
          "agency": "999",
          "accountNumber": "111111",
          "bank": "3333"
        }
      ]
    }
  }
}
~~~

&nbsp;
___
