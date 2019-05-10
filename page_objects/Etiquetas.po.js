const Helper = require("protractor-helper");

class Etiquetas {
  constructor() {
    this.btnCriarEtiqueta = element(by.id("open-create-tag"));
    this.btnCancelar = element(by.id("tag-modal-close"));
    this.btnExcluirEtiqueta = element(by.id("tag-modal-delete"));
    this.btnExcluir = element.all(by.cssContainingText(".jss71.jss45.jss183", "Excluir")).last();
    this.inputNomeDaEtiqueta = element(by.id("tag-modal-input"));
  }

  acessarGabineteDigital() {
    browser.get("");
  }

  cadastrarEtiqueta(nomeDaEtiqueta) {
    Helper.click(this.btnCriarEtiqueta);
    Helper.fillFieldWithTextAndPressEnter(this.inputNomeDaEtiqueta, nomeDaEtiqueta);
    browser.driver.navigate().refresh();
  }

  validacaoEtiquetaEstaPresente(nomeDaEtiqueta) {
    Helper.waitForElementPresence(element(by.cssContainingText(".jss230", nomeDaEtiqueta)));
  }

  validacaoEtiquetaNaoEstaPresente(nomeDaEtiqueta) {
    Helper.waitForElementNotToBePresent(element(by.cssContainingText(".jss230", nomeDaEtiqueta)));
  }

  clicarNoBotaoEditarDaEtiqueta(nomeDaEtiqueta) {
    Helper.waitForElementPresence(element(by.cssContainingText("button[class='jss226']", nomeDaEtiqueta)));
    element(by.cssContainingText("button[class='jss226']", nomeDaEtiqueta)).getAttribute("id").then(function(idEtiqueta) {
      const idEditarEtiqueta = idEtiqueta.slice(0, 4) + "edit-" + idEtiqueta.slice(4, 41);
      browser.actions().mouseMove(element(by.id(idEtiqueta))).perform();
      Helper.waitForElementVisibility(element(by.id(idEditarEtiqueta)));
      Helper.click(element(by.id(idEditarEtiqueta)));
    });
  }
  
  editarEtiqueta(nomeDaEtiqueta, novoNomeDaEtiqueta) {
    this.clicarNoBotaoEditarDaEtiqueta(nomeDaEtiqueta)
    Helper.clear(this.inputNomeDaEtiqueta);
    Helper.fillFieldWithTextAndPressEnter(this.inputNomeDaEtiqueta, novoNomeDaEtiqueta);
  }

  excluirEtiqueta(nomeDaEtiqueta) {
    this.clicarNoBotaoEditarDaEtiqueta(nomeDaEtiqueta);
    Helper.click(this.btnExcluirEtiqueta);
    Helper.click(this.btnExcluir);
    browser.driver.navigate().refresh();
  };
}
module.exports = new Etiquetas();