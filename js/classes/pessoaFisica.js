import Pessoa from "./pessoa.js";

export default class PessoaFisica extends Pessoa {
    #cpf;
    #data_nascimento;

    constructor(nome,endereco, cpf, data_nascimento) {
        super(nome, endereco);

        this.#cpf = cpf;
        this.#data_nascimento = data_nascimento;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(valor) {
        this.#cpf = valor;
    }

    get data_nascimento() {
        return this.#data_nascimento;
    }

    set data_nascimento(valor) {
        this.#data_nascimento = valor;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            cpf: this.#cpf,
            data_nascimento: this.#data_nascimento
        };
    }
}