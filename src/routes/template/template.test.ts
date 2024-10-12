import request, { Response } from "supertest";
import app from "../../app";

describe("Testa a rota de template", () => {
  test("Deve responder o método GET com sucesso", done => {
    request(app)
      .get("/template")
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Deve responder o método GET com uma lista de 1 registros", done => {
    request(app)
      .get("/template")
      .then((response: Response) => {
        expect(response.body.length).toBe(1);
        done();
      });
  });

  test("Deve retornar um registro com sucesso", done => {
    request(app)
      .get("/template/1")
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
        expect(response.body).toBeDefined();
        expect(response.body.id).toBe(1);
        done();
      });
  });

  test("Deve criar um novo template com sucesso", done => {
    const newTemplate = {
      nome: "Novo template",
      atributo: "novotemplate",
    };
  
    request(app)
      .post("/template")
      .send(newTemplate)
      .then((response: Response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).not.toBeNull();
        expect(response.body).toBeDefined();
        done();
      });
  });
});