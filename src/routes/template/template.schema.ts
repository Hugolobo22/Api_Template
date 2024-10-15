// Copie o código e cole nos arquivos dos SEUS dados, substituindo template pelo nome do seu dado.
// Coloque os atributos referente à sua tabela ao invés de "nome" e "atributo"

const CreateTemplateSchema = {
    nome: {
      notEmpty: {
        errorMessage: "Campo de nome não pode ser vazio",
      },
    },
    atributo: {
      notEmpty: {
        errorMessage: "Campo de atributo não pode ser vazio",
      },
    },
  };
  
  const UpdateTemplateSchema = {
    nome: {
      notEmpty: {
        errorMessage: "Campo de nome não pode ser vazio",
      },
    },
    atributo: {
      notEmpty: {
        errorMessage: "Campo de atributo não pode ser vazio",
      },
    },
  }
  
  const PatchTemplateSchema = {}
  
  export { CreateTemplateSchema, UpdateTemplateSchema, PatchTemplateSchema }; 
