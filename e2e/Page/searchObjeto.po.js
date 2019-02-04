const commonActions = require('../core/CommonActions');
class searchObjeto{
    constructor(){
        this.locatorPanelBuscarObjeto = '//input[@class=\'slds-input input\']';
        this.locatorFilastable = '//table[@class="slds-table slds-table--bordered uiVirtualDataGrid--default uiVirtualDataGrid"]//tr';
    }
    buscarobjeto(nombreEtiqueta){
        commonActions.setvalue(this.locatorPanelBuscarObjeto,nombreEtiqueta);
        commonActions.pause();
        const etiquetaRecuperada = this.veficarExistencia();

        if(etiquetaRecuperada===nombreEtiqueta){
            console.log('Existe el objeto con Etiqueta: '+etiquetaRecuperada);
            return etiquetaRecuperada;
            //browser.sendAlertText('es una alerta made by efrain');
        }else {
            console.log('la etiqueta NO EXISTE: '+nombreEtiqueta);
            return 'No existe Objeto';
        }

    }
    veficarExistencia(){
        let array = $$(this.locatorFilastable);
        let columnas = array[1].$$('th');
        let nombre = columnas[0].getText();
        return nombre;
    }

}
module.exports = searchObjeto;