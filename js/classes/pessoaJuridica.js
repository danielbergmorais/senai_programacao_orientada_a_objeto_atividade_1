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

    toJSON() {
        return {
            ...super.toJSON(),
            razaoSocial: this.#razaoSocial,
            cnpj: this.#cnpj
        };
    }
}