const commonActions = require('../core/CommonActions');
class searchObjeto{
    constructor(){
        this.locatorPanelBuscarObjeto = '//input[@class=\'slds-input input\']';
        this.locatorFilastable = '//table[@class="slds-table slds-table--bordered uiVirtualDataGrid--default uiVirtualDataGrid"]//tr';

    }
    buscarObjeto(nombreEtiqueta){
        commonActions.setvalue(this.locatorPanelBuscarObjeto,nombreEtiqueta);
        commonActions.pause();
        const getEtiquetas = this.getListaTable(this.locatorFilastable);
        let respuesta;
        if(typeof getEtiquetas !== 'undefined' && getEtiquetas.length > 0) {
            for (var valor of getEtiquetas) {
                if (valor === nombreEtiqueta) {
                    console.log('Existe el objeto con Etiqueta: ' + valor);
                    return respuesta = valor;
                    //browser.sendAlertText('es una alerta made by efrain');
                } else {
                    console.log('la etiqueta : --- ' + nombreEtiqueta + ' --- NO EXISTE');
                    console.log('Etiquetas Relacionadas: ' + getEtiquetas);
                    respuesta = 'No existe Objeto';
                }
            }
            return respuesta;
        }
    }
    // Retorna un lista de valores de etiquetas TH
    getListaTable(locatorFilatable){
        let filas = $$(locatorFilatable);
        let etiquetas = [];
        for (let i =1; i <filas.length; i++) {
            let columnas = filas[i].$$('th');
            etiquetas.push(columnas[0].getText());
        }
        return etiquetas;
    }
    // Retorna un lista de valores de etiquetas TD
    getListaTableTD(locatorFilatable){
        let filas = $$(locatorFilatable);
        let etiquetas = [];
        for (let i =1; i <filas.length; i++) {
            let columnas = filas[i].$$('td');
            etiquetas.push(columnas[0].getText());
        }
        return etiquetas;
    }

}
module.exports = searchObjeto;