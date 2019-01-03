import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getEncomendasButton(){
    return element(by.css('[routerlink="/encomenda"]'));
  }

  getProdutosButton(){
    return element(by.css('[routerlink="/catalogo"]'));
  }

  getProdutosText(){
    return element(by.css('app-catalogo h3')).getText();
  }
  getGerirProdutosButton(){
    return element(by.css('[routerlink="/produtos"]'));
  }

  getListaProdutos(){
    return element(by.css('app-produto-gestao h3')).getText();
  }

  getEncomendasText(){
    return element(by.css('app-encomendas h3')).getText();
  }

  getMateriaisButton(){
    return element(by.css('[routerlink="/materiais"]'));
  }

  getGestaoEncomendasButton(){
    return element(by.css('[routerlink="/encomendas"]'));
  }

  getGerirItensButton(){
    return element(by.css('[routerlink="/itens"]'));
  }
}
