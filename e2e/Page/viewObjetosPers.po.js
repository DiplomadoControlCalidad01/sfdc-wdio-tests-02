const commonActions = require('../core/CommonActions');
class viewObjetosPers{
    constructor(){
        const locatorgestorobjetosss = '//a[@class=\'breadcrumb uiOutputURL onesetupBreadcrumb\'][contains(text(),\'Gestor de objetos\')]';
    }

   static crearInstanciaVOP(){
             return new viewObjetosPers();
    }
    static getListaGestorObjetos(){
        let etiquetas = [];
        commonActions.pause(30000);
        let filas = $$('//table[@class="slds-table slds-table--bordered uiVirtualDataGrid--default uiVirtualDataGrid"]//tbody//tr');
        for (let i = 0; i < filas.length; i++) {
            const column = filas[i].$$('th');
            let etiqueta = column[0].getText();
            etiquetas.push(etiqueta);
        }
        return etiquetas;
    }
    static getEtiquetaAgregada(){
        commonActions.pause();
        const locatorGetText = '//span[@class=\'breadcrumbDetail uiOutputText\']';
        let x = commonActions.getText(locatorGetText);
        return x[1];
    }

}
module.exports = viewObjetosPers;
