import Pessoa from "./pessoa.js";

export default class PessoaJuridica extends Pessoa {
    #razaoSocial;
    #cnpj;

    constructor(nome, endereco, razaoSocial, cnpj) {
        super(nome, endereco);

        this.#razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
    }

    get razaoSocial() {
        return this.#razaoSocial;
    }

    set razaoSocial(valor) {
        this.#razaoSocial = valor;
    }

    get cnpj() {
        return this.#cnpj;
    }

    set cnpj(valor) {
        this.#cnpj = valor;
    }

    validarCNPJ () {
        return (cnpj.length !== 14)
    }

    validarRazaoSocial () {
        return (razaoSocial.length == 0)
    }


    validarCampos () {
        let retorno =  super.validarCampos();

        if (this.validarCNPJ()) {
            retorno.push({
                success: true,
                message: 'CNPJ válido'
            });
        } else {
            retorno.push({
                success: false,
                message: 'O CNPJ deve conter 14 dígitos.'
            });
        }

         if (this.validarRazaoSocial()) {
            retorno.push({
                success: true,
                message: 'A razão social é válida'
            });
        } else {
            retorno.push({
                success: false,
                message: 'A razão social é obrigatória.'
            });
        }

        return retorno;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            razaoSocial: this.#razaoSocial,
            cnpj: this.#cnpj
        };
    }
}