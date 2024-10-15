import { Router } from "express";
import { body, checkSchema } from "express-validator";
import { CreateTemplateSchema, PatchTemplateSchema, UpdateTemplateSchema } from "./template.schema";
import TemplateController from "../../controllers/template.contoller";
import InterceptarErrosMiddleware from "../../shared/middlewares/interceptadorDeErros.middleware";

// Copie o código e cole nos arquivos dos SEUS dados, substituindo template pelo nome do seu dado.

const TemplateRouter = Router();
const _templateController = new TemplateController();

TemplateRouter.get('/', _templateController.getAll);
TemplateRouter.get('/:id', _templateController.getById);
TemplateRouter.post('/', checkSchema(CreateTemplateSchema), InterceptarErrosMiddleware, _templateController.create);
TemplateRouter.put('/:id', checkSchema(UpdateTemplateSchema), InterceptarErrosMiddleware, _templateController.update);
TemplateRouter.patch('/:id', checkSchema(PatchTemplateSchema), _templateController.update);
TemplateRouter.delete('/:id', _templateController.delete);

export { TemplateRouter };
