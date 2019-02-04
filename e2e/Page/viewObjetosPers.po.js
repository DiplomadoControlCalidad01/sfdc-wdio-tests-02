const commonActions = require('../core/CommonActions');
class viewObjetosPers{
    constructor(){
        this.locatorTable = '//table[@class="slds-table slds-table--bordered uiVirtualDataGrid--default uiVirtualDataGrid"]//tbody//tr';

    }

    getListaGestorObjetos(){
        let etiquetas = [];
        commonActions.pause(30000);
        let filas = $$(this.locatorTable);
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
