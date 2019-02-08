const commonActions = require('../core/CommonActions');
const Search = require('../Page/searchObjeto.po');
const Objeto = require('../Page/objeto.po')
const componentesObjeto = require('../Page/componentesObjeto.po');
class addCamposYrelaciones extends Objeto{
    constructor(){
        super();
        this.l_botonNewCampo = '//button[@title="Campo personalizado"]';
        this.l_tipodato = '//label[contains(text(),"Fecha")][@for="dtypeD"]';
        this.l_botonSiguiente = '//div[@class="pbBottomButtons"]//input[@value="Siguiente"]';
        this.l_EtiquetaCampo = '//input[@id="MasterLabel"]';
        this.l_nombreCampo = '//input[@id="DeveloperName"]';
        this.l_botonSave = '//div[@class="pbBottomButtons"]//input[@value="Guardar"]';

    }
    addCampoAobjeto(nombreObjeto,newNombreCampo){
        let objeto = new Search();
        let nameObjeto = objeto.buscarObjeto(nombreObjeto);
        commonActions.click('//th//a[contains(text(),"'+nameObjeto+'")]');
        componentesObjeto.clickCamposYdetalle();
        commonActions.click(this.l_botonNewCampo);
        commonActions.iframe(this.locatorIframe);
        commonActions.click(this.l_tipodato);
        commonActions.click(this.l_botonSiguiente);
        commonActions.setvalue(this.l_EtiquetaCampo,newNombreCampo);
        commonActions.click(this.l_botonSiguiente);
        commonActions.pause();
        commonActions.click(this.l_botonSiguiente);
        commonActions.click(this.l_botonSave);
    }
    searchCampo(nombreCampo){
        let objeto = new Search();
        objeto.buscarObjeto(nombreCampo);

    }
}
module.exports = addCamposYrelaciones;