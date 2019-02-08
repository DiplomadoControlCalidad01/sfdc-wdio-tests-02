const commonAction = require('../core/CommonActions');
class perfil{
      static  cambiarVistaClasica(){
        let l_perfil = '//li[@class="slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--x-small"]//button[@type="button"]';
        let l_vistaClasica = '//a[@class="profile-link-label switch-to-aloha uiOutputURL"]';
        commonAction.pause();
        commonAction.click(l_perfil);
        commonAction.click(l_vistaClasica);
        commonAction.pause();
      }
}
module.exports = perfil;