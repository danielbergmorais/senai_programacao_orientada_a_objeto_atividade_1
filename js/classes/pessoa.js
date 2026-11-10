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

    validarNome() {
        return (this.#nome.length > 3)    
    }

    validarCampos(){
        let retorno  = [] 
        if (this.validarNome()) {
            retorno.push({
                success: true,
                message: 'Nome tem mais letras'
            })
        } else {
            retorno.push({
                success: false,
                message: 'Nome deve conter mais de 3 letras'
            })
        }

        return retorno
    }

    toJSON() {
        return {
            nome: this.#nome,
            endereco: this.#endereco
        };
    }
}
