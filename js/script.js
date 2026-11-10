import Pessoa from "./classes/pessoa.js";
import PessoaFisica from "./classes/pessoaFisica.js";
import PessoaJuridica from "./classes/pessoaJuridica.js";
import Endereco from "./classes/endereco.js";
import { saveOnStorage, getFromStorage } from "./localstorage.js";

window.onload = function() {
    //Carregar a listagem
    let fisicas = getFromStorage('fisica')
    let juridicas = getFromStorage('juridica')

    // Selecionar as tabelas
    let tabPessoaFisica = document.getElementById('tabPessoaFisica');
    let tabPessoaJuridica = document.getElementById('tabPessoaJuridica');
    
    if(tabPessoaFisica) {
        // Adicionar linhas na tabela de pessoas fisicas
        fisicas.forEach( (item, index)=> {
            const data = new Date(item.data_nascimento + "T00:00:00")
            const dataFormatada =
            String(data.getDate()).padStart(2, '0') + '/' +
            String(data.getMonth() + 1).padStart(2, '0') + '/' +
            data.getFullYear();

            const enderecoFormatado = item.endereco.logradouro + ' - ' +  item.endereco.numero + ' | ' +  item.endereco.cidade + ' / ' + item.endereco.uf
            
            tabPessoaFisica.innerHTML +=  `<tr>`+
            `<td> `+ item.nome + `</td>`+
            `<td> `+ item.cpf + `</td>`+
            `<td> `+ dataFormatada + `</td>`+
            `<td> `+ enderecoFormatado + `</td>`+
            `</tr>`
            
        })
    }

    if(tabPessoaJuridica) {
        // Adicionar linhas na tabela de pessoas juridicas
        juridicas.forEach( (item, index)=> {
            const enderecoFormatado = item.endereco.logradouro + ' - ' +  item.endereco.numero + ' | ' +  item.endereco.cidade + ' / ' + item.endereco.uf
            tabPessoaJuridica.innerHTML +=  `<tr>`+
            `<td> `+ item.nome + `</td>`+
            `<td> `+ item.cnpj + `</td>`+
            `<td> `+ item.razaoSocial + `</td>`+
            `<td> `+ enderecoFormatado + `</td>`+
            `</tr>`
            
        })
    }
};

// Trocar os campos de pessoa fisica e pessoa juridica
const type_person = document.getElementById('type_person');
if(type_person) {
    type_person.onchange = (e) => {
        let pessoa_fisica = document.getElementById('pessoa_fisica')
        let pessoa_juridica = document.getElementById('pessoa_juridica')

        if(e.target.value == 'fisica') {
            pessoa_fisica.style.display = 'flex'
            pessoa_juridica.style.display = 'none'
        } else {
            pessoa_fisica.style.display = 'none'
            pessoa_juridica.style.display = 'flex'
        }
    }
}

// Envio do form
var cadastroForm = document.getElementById('cadastroForm')

if(cadastroForm){
    cadastroForm.onsubmit = (e) => {
        //evita enviar o form padrão
        e.preventDefault();

        // Pessoa Física
        const nome = document.getElementById("nome").value;
        const dataNascimento = document.getElementById("data_nasc").value;
        const cpf = document.getElementById("cpf").value.replace(/\D/g, "");

        // Pessoa Jurídica
        const razaoSocial = document.getElementById("razaoSocial").value;
        const cnpj = document.getElementById("cnpj").value.replace(/\D/g, "");

        // Endereço
        const logradouro = document.getElementById("logradouro").value;
        const numero = document.getElementById("numero").value;
        const cidade = document.getElementById("cidade").value;
        const uf = document.getElementById("estado").value;
        
        // Declarar e instanciar um objeto da classe "Endereco" em uma variável
        const endereco = new Endereco();
        endereco.logradouro = logradouro;
        endereco.numero = numero;
        endereco.cidade = cidade;
        endereco.uf = uf;

        var pessoa = new Pessoa()
        if(type_person && type_person.value == 'fisica'){
            // Declarar e instanciar um objeto da classe "PessoaFisica" em uma variável
            pessoa = new PessoaFisica();
            
            pessoa.nome = nome;
            pessoa.endereco = endereco;

            pessoa.cpf = cpf;
            pessoa.data_nascimento = dataNascimento;

        } else {
            // Declarar e instanciar um objeto da classe "PessoaJuridica" em uma variável
            pessoa = new PessoaJuridica();

            pessoa.nome = nome
            pessoa.endereco = endereco

            pessoa.razaoSocial = razaoSocial
            pessoa.cnpj = cnpj
        }

        let validacao = pessoa.validarCampos()
        var erros = [];

        validacao.forEach( (item, index) => {
            if(!item.success){
                erros.push(item.message);
            }
        })

        if(erros.length > 0){
            exibirErros(erros);
        } else {
            esconderErros();
            saveOnStorage(type_person.value, pessoa);
        }

    }

    //// Mascaras 
    // Máscara CPF
    document.getElementById("cpf").addEventListener("input", function () {
        let valor = this.value.replace(/\D/g, "").substring(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        this.value = valor;
    });

    // Máscara CNPJ
    document.getElementById("cnpj").addEventListener("input", function () {
        let valor = this.value.replace(/\D/g, "").substring(0, 14);

        valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
        valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

        this.value = valor;
    });
}

function exibirErros(erros){
    let erroCadastro = document.getElementById('erroCadastro');
    erroCadastro.style.display = 'block';

    erroCadastro.innerHTML = '';

    erros.forEach( (item, index) => {
        erroCadastro.innerHTML += `<li>` + item + `</li>`;
    })


}
function esconderErros() {
    document.getElementById('erroCadastro').style.display = 'none';
}