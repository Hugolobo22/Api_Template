import { Template } from "../domain";
import { TemplateRepository } from "../repositories/template.repository";

// Copie o código e cole nos arquivos dos SEUS dados, substituindo template pelo nome do seu dado.

export class TemplateService {
    private _templateRepository = new TemplateRepository();
    
    public getAll() {
        return this._templateRepository.getAll();
    }

    public getById(id: number) {
        const usuario = this._templateRepository.getById(id);

        return usuario;
    }

    public create(template: Template) {
        return this._templateRepository.create(template);
    }

    public update(template: Template) {
        return this._templateRepository.update(template);
    }

    public patch(template: Template)  {
        return this._templateRepository.update(template);
    }

    public delete(id: number) {
        return this._templateRepository.delete(id);
    }
}