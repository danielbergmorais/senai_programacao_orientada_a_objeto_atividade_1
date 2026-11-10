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

    validarCpf() {
        return (this.#cpf.length == 11)
    }

    validarDataNascimento(){
        const data = new Date(this.#data_nascimento + "T00:00:00");
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        // Verifica data válida e se não está no futuro
         return !(
            isNaN(data.getTime()) ||
            data.toISOString().substring(0, 10) !== this.#data_nascimento ||
            data > hoje
        ) 
    }

    validarCampos () {
        let retorno =  super.validarCampos();

        if (this.validarCpf()) {
            retorno.push({
                success: true,
                message: 'CPF válido'
            });
        } else {
            retorno.push({
                success: false,
                message: 'O CPF deve conter 11 dígitos.'
            });
        }

        if (this.validarDataNascimento()) {
            retorno.push({
                success: true,
                message: 'Data de nascimento válida'
            });
        } else {
            retorno.push({
                success: false,
                message: 'Informe uma data de nascimento válida e que não seja futura.'
            });
        }

        return retorno
    }

    toJSON() {
        return {
            ...super.toJSON(),
            cpf: this.#cpf,
            data_nascimento: this.#data_nascimento
        };
    }
}