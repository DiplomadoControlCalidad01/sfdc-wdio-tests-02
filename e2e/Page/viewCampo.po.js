const commonActions = require('../core/CommonActions');
const SearchObjeto = require('../Page/searchObjeto.po');
class viewCampo extends SearchObjeto{
    constructor(){
        super();
        this.locatorFilasCampo = '//table[@class="slds-table slds-table-bordered uiVirtualDataGrid--default uiVirtualDataGrid"]//tr';
    }
    buscarCampo(nombreCampo){
        commonActions.setvalue(this.locatorPanelBuscarObjeto,nombreCampo);
        commonActions.pause();
        let listCampos = this.getListaTableTD(this.locatorFilasCampo);
        let campo ;
        if(typeof listCampos !== 'undefined' && listCampos.length > 0) {
            for (var valor of listCampos) {
                if (valor === nombreCampo) {
                    return campo = valor;
                } else {
                    campo = 'No existe Campo';
                }
            }
            return campo;
        }
    }

}
module.exports = viewCampo;