# Atividade 1
Atividade da disciplina de programação orientada a objetos do curso de desenvolvimento mobile flutter.

Modelar e implementar, em JavaScript orientado a objetos, o cadastro de clientes (pessoas físicas e jurídicas) de um aplicativo de e-commerce, tratando valores não permitidos e publicando o projeto no GitHub.

**CONTEXTUALIZAÇÃO**

Você trabalha na Appfull, uma empresa de desenvolvimento de aplicativos que valoriza reusabilidade, performance e escalabilidade em seus projetos. A Electronic, empresa de e-commerce de produtos eletrônicos que atua no atacado e no varejo, contratou a Appfull para desenvolver um aplicativo que facilite as compras de seus clientes.

Você ficou responsável pelo módulo de cadastro de clientes, que deverá armazenar pessoas físicas e pessoas jurídicas. Como os dois tipos de cliente compartilham características, o projeto deve reaproveitar código por meio de herança, proteger os dados por meio de encapsulamento e impedir que valores inválidos digitados pelos usuários sejam cadastrados.

**Dados de cada cadastro:**

> | PESSOA FÍSICA       | PESSOA JURÍDICA | ENDEREÇO    |
> | -----------------   | --------------- | ----------- |
> | Nome                | Nome            | Logradouro  |
> | CPF                 | CNPJ            | Número      |
> | Data de nascimento  | Razão social    | Cidade      |
> | Endereço*           | Endereço*       | UF          |

_*Endereço é uma associação, então toda pessoa física e jurídica deveram possuir endereço_

Regras de validação:

- O nome deve ter ao menos 3 caracteres;
- O CPF deve ter 11 dígitos e o CNPJ, 14 dígitos (a entrada pode conter pontos, traço e barra, que devem ser desconsiderados);
- A data de nascimento deve ser uma data válida e não pode estar no futuro;
- a razão social é obrigatória.

- O sistema deverá manter uma lista de clientes e, ao final da execução, exibir apenas os cadastros válidos. 
- Um cadastro inválido não pode derrubar o programa: o erro deve ser tratado e informado ao usuário.
___



### Como testar o sistema:

1. Acessar o link do projeto no [GitPages](https://danielbergmorais.github.io/senai_programacao_orientada_a_objeto_atividade_1/)

2. Ou utilizar o comando dentro do diretório:
`npx http-server`


### Modelagem de classes:

<img src="docs\Atividade 1.drawio.png" width="500"/><br/>

### Telas:

<table>
  <tr>
    <td align="center">
      <img src="docs\telas\00-listagem de pessoas.jpg" width="500"/><br/>
      Listagem de pessoas
    </td>
    <td align="center">
      <img src="docs\telas\01-cadastro-pessoa-fisica-erro-data.jpg" width="250"/><br/>
      Tela de cadastro de Pessoa Física
    </td>
    <td align="center">
      <img src="docs\telas\02-cadastro-pessoa-juridica.jpg" width="250"/><br/>
       Tela de cadastro de Pessoa Jurídica
    </td>
  </tr>
</table>

### Telas Pessoa Física:

<table>
  <tr>
    <td align="center">
      <img src="docs\telas\01-cadastro-pessoa-fisica-erro-todos.jpg" width="250"/><br/>
      Erro de CPF e de Data de Nascimento invalida
    </td>
    <td align="center">
      <img src="docs\telas\01-cadastro-pessoa-fisica-erro-cpf-data.jpg" width="250"/><br/>
      Erro de CPF e de Data de Nascimento inválida
    </td>
    <td align="center">
      <img src="docs\telas\01-cadastro-pessoa-fisica-erro-data.jpg" width="250"/><br/>
      Erro de Data de Nascimento inválida
    </td>
    <td align="center">
      <img src="docs\telas\01-cadastro-pessoa-fisica-sucesso.jpg" width="250"/><br/>
       Sucesso ao cadastrar
    </td>
  </tr>
</table>

### Telas Pessoa Juridica:

<table>
  <tr>
    <td align="center">
      <img src="docs\telas\01-cadastro-pessoa-fisica-erro-todos.jpg" width="250"/><br/>
      Erro de Nome, Razão social e de CNPJ inválidos.
    </td>
    <td align="center">
      <img src="docs\telas\02-cadastro-pessoa-juridica-erro-cnpj.jpg" width="250"/><br/>
      Erro de CNPJ inválido
    </td>
    <td align="center">
      <img src="docs\telas\02-cadastro-pessoa-juridica-erro-razao-social.jpg" width="250"/><br/>
      Erro de Razão social inválido
    </td>
    <td align="center">
      <img src="docs\telas\02-cadastro-pessoa-juridica-sucesso.jpg" width="250"/><br/>
       Sucesso ao cadastrar
    </td>
  </tr>
</table>