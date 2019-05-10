const Etiquetas = require("../page_objects/Etiquetas.po.js");
const Helper = require("protractor-helper");

describe("CRUD Etiqueta", () => {
  const etiqueta = { nome: "Teste Paulo"};

  beforeEach(() => Etiquetas.acessarGabineteDigital());

  it("Cancelar criação de etiqueta", () => {
    Helper.click(Etiquetas.btnCriarEtiqueta);
    Helper.fillFieldWithText(Etiquetas.inputNomeDaEtiqueta, etiqueta.nome);
    Helper.click(Etiquetas.btnCancelar);
    Etiquetas.validacaoEtiquetaNaoEstaPresente(etiqueta.nome);
  });

  it("Criar etiqueta", () => {
    Etiquetas.cadastrarEtiqueta(etiqueta.nome);
    Etiquetas.validacaoEtiquetaEstaPresente(etiqueta.nome);
  });

  it("Alterar etiqueta", () => {
    const nomeNovoDaEtiqueta = "Parabéns";
    Etiquetas.editarEtiqueta(etiqueta.nome, nomeNovoDaEtiqueta);
    etiqueta.nome = nomeNovoDaEtiqueta
    Etiquetas.validacaoEtiquetaEstaPresente(etiqueta.nome);
  });

  it("Cancelar edição de etiqueta", () => {
    Etiquetas.clicarNoBotaoEditarDaEtiqueta(etiqueta.nome)
    Helper.click(Etiquetas.btnCancelar);
    Etiquetas.validacaoEtiquetaEstaPresente(etiqueta.nome);
  });

  it("Excluir etiqueta", () => {
    Etiquetas.excluirEtiqueta(etiqueta.nome);
    Etiquetas.validacaoEtiquetaNaoEstaPresente(etiqueta.nome);
  });
});
