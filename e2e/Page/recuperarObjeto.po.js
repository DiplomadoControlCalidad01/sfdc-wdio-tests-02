const commonActions = require('../core/CommonActions.js');
const perfil = require('../Page/perfil.po');
const HeadeClassic = require('../Page-ViewClassic/headerClassic.po');
const PanelCompilacion = require('../Page-ViewClassic/panelCompilacion');
const ObjetoEliminados = require('../Page-ViewClassic/objetosEliminados');

class recuperarObjeto{

    recoverObject(nombreObjeto){
        let headerClassic = new HeadeClassic();
        let panelCompilacion = new PanelCompilacion();
        let objetoEleminados = new ObjetoEliminados();
        headerClassic.clickConfiguracion();
        panelCompilacion.clickPanelCrear();
        panelCompilacion.clickObjeto();
        objetoEleminados.clickObjetosEliminados();
        let eliminados = objetoEleminados.showObjetosElimanados();
        console.log(eliminados);
        objetoEleminados.recuperarObjeto(nombreObjeto);
        headerClassic.clickCambiarVistaLight();

        /*
        browser.element('#setupLink').click();
        browser.element('#DevTools_font').click();
        browser.element('#CustomObjects_font').click();
        browser.element('//a[contains(text(),\'Objetos eliminados\')]').click();
        let l_filasEleminadas = '//table[@class="list"]//tr';
        let search = new SearchObjeto();
        let eleminados = search.getListaTable(l_filasEleminadas);
        console.log(eleminados);
        browser.element('.switch-to-lightning').click();
        browser.pause(10000);
        */
    }
}
module.exports = recuperarObjeto;