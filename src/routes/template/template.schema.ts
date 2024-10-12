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