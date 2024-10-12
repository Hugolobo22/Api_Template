import { Template } from "../domain";
import { pool } from "../shared/database/db";

// Copie o código e cole nos arquivos dos SEUS dados, substituindo template pelo nome do seu dado.

export class TemplateRepository {
    private _template: Template[] = [
        { id: 1, // Enumere 1 a mais do que o anterior
          nome: "Hugo Lobo", // Insira os dados referentes ao seu banco, como na tabela template temos nome e atributo
          atributo: "atributo1" }, // irei inserir dados normais nesses campos, apenas substitua para o da sua tabela referente.
    ];
    
    public async getAll() { // Função básica de retornar uma lista de todos os usuários
        const conn = await pool.getConnection();
        return await conn.query('SELECT * FROM template');
    }

    public getById(id: number) { // Função básica de retornar um dado específico identificando pelo id
        return this._template.find((template) => template.id === id);
    }

    public create(template: Template) { // Aqui iremos criar um novo dado
        const novoTemplate = {
            id: this._template[this._template.length - 1].id + 1, // Puxamos os atributos inseridos lá em cima no Array de _template
            ...template // Aumentamos em 1 o número do id anterior e retornamos o valor como um novo dado
        }

        this._template.push(novoTemplate); // Adicionamos o dado ao arquivo Novo template

        return novoTemplate; // E retornamos o valor
    }

    public update(template: Template) { // Função similar à criação de um novo dado, porém para atualizar via ID
        this._template[this.buscarUsuarioNaLista(template)] = { ...template };

        return template;
    }

    public delete(id: number) {
        const indexTemplateBuscado = this._template.findIndex( us => us.id === id );

        const templateExcluido = this._template.splice(indexTemplateBuscado, 1);

        return templateExcluido;
    }

    private buscarUsuarioNaLista(template: Template) {
        const indexTemplateBuscado = this._template.findIndex( us => us.id === template.id );

        if (indexTemplateBuscado === -1) {
            throw new Error('Template não encontrado');
        }

        return indexTemplateBuscado;
    }
}