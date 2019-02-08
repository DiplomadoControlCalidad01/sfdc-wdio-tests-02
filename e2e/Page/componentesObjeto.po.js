const commonActions = require('../core/CommonActions');
class componentesObjeto{
    static clickDetalle(){
       commonActions.click('//a[contains(text(),\'Detalles\')]');
    }
    static clickCamposYdetalle(){
        commonActions.click('//a[contains(text(),"Campos y relaciones")]')
    }
}
module.exports = componentesObjeto;