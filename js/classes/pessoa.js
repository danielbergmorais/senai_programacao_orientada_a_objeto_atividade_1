import Endereco from "./endereco.js";

export default class Pessoa {
    #nome;
    #endereco;

    constructor(nome,  endereco) {
        this.#nome = nome;
        this.#endereco = endereco;
    }

    get nome() {
        return this.#nome;
    }

    set nome(valor) {
        this.#nome = valor;
    }

    get endereco() {
         return this.#endereco; 
    }

    set endereco(valor) {
        if (!(valor instanceof Endereco)) {
            throw new Error("O endereço deve ser uma instância da classe Endereco.");
        }

        this.#endereco = valor;
    }

    toJSON() {
        return {
            nome: this.#nome,
            endereco: this.#endereco
        };
    }
}
