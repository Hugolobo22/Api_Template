import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { TemplateService } from "../services/template.service";

// Copie o código e cole nos arquivos dos SEUS dados, substituindo template pelo nome do seu dado.

export default class TemplateController {
  private _templateService = new TemplateService();
  
  public getAll = (request: Request, response: Response) => {
    return response.send(this._templateService.getAll());
  }

  public getById = (resquest: Request, response: Response) => {
    const id = parseInt(resquest.params.id);

    const templateSolicitado = this._templateService.getById(id);

    if (!templateSolicitado) {
      return response.status(404).send({ msg: "template não encontrado" });
    }

    return response.send(templateSolicitado);
  }

  public create = (request: Request, response: Response) => {
    return response.status(201).send(this._templateService.create(request.body));
  }

  public update = (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    let dadoAtualizado;

    try {
      dadoAtualizado = this._templateService.update({
        id: id,
        ...request.body
      });
    } catch (error: any) {
      return response.status(400).send({ error: error.message });
    }  
    
    return response.send(dadoAtualizado);
  }
  
  public delete = (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    let templateRemovido;

    try {
      templateRemovido = this._templateService.delete(id);
    } catch (error: any) {
      return response.status(400).send({ error: error.message });
    }  

    return response.status(200).send(templateRemovido);
  }
}
