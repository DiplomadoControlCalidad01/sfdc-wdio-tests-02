const login = require('../Page/Login.po');
const objetoPersonalizado = require('../Page/ObjetoPersonalizado.po');

describe('Test Suite',()=>{
   it('Crear un Objeto Personalizado',()=>{
       login.iniciarSecion();
       objetoPersonalizado.linkFormularioGO();
       objetoPersonalizado.addEtiqueta('Etiqueta4');
       objetoPersonalizado.addEtiquetaPlural('adadfa');
       objetoPersonalizado.addNombreObjeto('objeto');
       objetoPersonalizado.addPermitirInformes();
       objetoPersonalizado.PermitirAccesoAlaAPI_Masiva(0);
       browser.pause(50000);
   });


});
