import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
 
  beforeEach(() => {
    page = new AppPage();

  });

  it('should display Stock In the Closet', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getTitleText()).toEqual('Stock In the Closet');
  });


    it('Should get the encomendas button',()=>{
      page.navigateTo();
      expect(page.getEncomendasButton().getText()).toEqual('ENCOMENDAS');
    });

    it('Should get the catalogo button',()=>{
      page.navigateTo();
      expect(page.getProdutosButton().getText()).toEqual('GESTAO DE CATALOGO');
    });

    it('Should route to produtos',()=>{
      page.navigateTo();
      page.getProdutosButton().click();
      //browser.pause();
      expect(page.getProdutosText()).toEqual('SIC Gestão de Catalogo');
    });

    it('Should get the material button',()=>{
      page.navigateTo();
      page.getProdutosButton().click();
      expect(page.getMateriaisButton().getText()).toEqual('Gerir Materiais');
    });

    it('Should get the Gerir produtos button',()=>{
      page.navigateTo();
      page.getProdutosButton().click();
      expect(page.getGerirProdutosButton().getText()).toEqual('Gerir Produtos');
    });

    it('Should route the Gerir produtos button',()=>{
      page.navigateTo();
      page.getProdutosButton().click();
      page.getGerirProdutosButton().click();
      expect(page.getListaProdutos()).toEqual('Lista Produtos');
    });



    //parte das encomendas

    it('Should route to encomendas',()=>{
      page.navigateTo();
      page.getEncomendasButton().click();
      //browser.pause();
      expect(page.getEncomendasText()).toEqual('SIC ENCOMENDAS');
    });

    it('Should get the gerir ecomendas button',()=>{
      page.navigateTo();
      page.getEncomendasButton().click();
      expect(page.getGestaoEncomendasButton().getText()).toEqual('Gerir Encomendas');
    });

    
    it('Should get the gerir itens button',()=>{
      page.navigateTo();
      page.getEncomendasButton().click();
      expect(page.getGerirItensButton().getText()).toEqual('Gerir Itens');
    });

  
    
});
