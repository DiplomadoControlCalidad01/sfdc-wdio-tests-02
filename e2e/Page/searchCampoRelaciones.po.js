const SearchObjeto = require('../Page/searchObjeto.po');
class searchCampoYRelaciones extends SearchObjeto{
    constructor(){
        super();
        this.locatorFilastable = '//table[@class="slds-table slds-table-bordered uiVirtualDataGrid--default uiVirtualDataGrid"]//tr';
    }

}
module.exports = searchCampoYRelaciones;