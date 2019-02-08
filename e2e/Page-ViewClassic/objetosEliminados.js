const commonActions = require('../core/CommonActions');
const SearchObjeto = require('../Page/searchObjeto.po');
class objetosEliminados{
    constructor(){
        this.l_elementosEliminados = '//a[contains(text(),\'Objetos eliminados\')]';
        this.l_filasTablasElemi = '//table[@class="list"]//tr';
        this.l_botonRecuperar = '//input[@value="Recuperar"]';
        this.l_botonConfirmacion = '//input[@value="Aceptar"]';
    }
    clickObjetosEliminados(){
        commonActions.click(this.l_elementosEliminados);
    }
    showObjetosElimanados(){
        let search = new SearchObjeto();
        return search.getListaTable(this.l_filasTablasElemi);
    }
    recuperarObjeto(nombreObjeto){
        commonActions.click('//a[contains(text(),"'+nombreObjeto+'")]');
        commonActions.click(this.l_botonRecuperar);
        commonActions.click(this.l_botonConfirmacion);
    }

}
module.exports = objetosEliminados;