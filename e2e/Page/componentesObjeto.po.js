const commonActions = require('../core/CommonActions');
class componentesObjeto{
       // this.l_Detalles = '//a[contains(text(),\'Detalles\')]';
        // this.l_CamposYDetalle = '//a[contains(text(),"Campos y relaciones")]';
       // this.l_FormatoDePagina = '//a[contains(text(),"Formatos de página")]';
    static clickDetalle(){
       commonActions.click('//a[contains(text(),\'Detalles\')]');
    }
    static clickCamposYdetalle(){
        commonActions.click('//a[contains(text(),"Campos y relaciones")]')
    }



}
module.exports = componentesObjeto;