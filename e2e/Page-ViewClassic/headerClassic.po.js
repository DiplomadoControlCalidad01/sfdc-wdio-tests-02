const commonAction = require('../core/CommonActions');
class headerClassic{
    constructor(){
        this.l_configuracion = '#setupLink';
        this.l_cambiarVistaLightning = '.switch-to-lightning';
    }
    clickConfiguracion(){
        commonAction.click(this.l_configuracion);
    }
    clickCambiarVistaLight(){
        commonAction.click(this.l_cambiarVistaLightning);
        commonAction.pause();
    }
}
module.exports = headerClassic;