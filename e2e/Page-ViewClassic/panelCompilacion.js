const commonActions = require('../core/CommonActions');
class  panelCompilacion{
    constructor(){
        this.l_personalizar = '#Customize_font';
        this.l_crear = '#DevTools_font';
        this.l_objeto = '#CustomObjects_font';
    }
    clickPanelCrear(){
        commonActions.click(this.l_crear);
    }
    clickObjeto(){
        commonActions.click(this.l_objeto);
    }
}
module.exports = panelCompilacion;