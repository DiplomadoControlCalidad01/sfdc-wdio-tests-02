const login = require('../Page/Login.po');
const objetoPersonalizado = require('../Page/ObjetoPersonalizado.po');

describe('Test Suite',()=>{
   it('Crear un Objeto Personalizado',()=>{
       login.iniciarSecion();
       objetoPersonalizado.linkFormularioGO();
       objetoPersonalizado.addEtiqueta('Etiqueta6');
       objetoPersonalizado.addEtiquetaPlural('adadfa');
       objetoPersonalizado.addNombreObjeto('objeto');
       objetoPersonalizado.addDescripcion('Esto es una descripcion');
       objetoPersonalizado.addNombreRegistro('nameRegistroE');
       objetoPersonalizado.addTipoDeDatosTEXTO();

       objetoPersonalizado.permitirInformes(1);
       objetoPersonalizado.permitirActividades(1);
       objetoPersonalizado.seguimientoDeHistorialCampos(1);
       objetoPersonalizado.permitirGruposChatter(1);

       objetoPersonalizado.permitirColaboracion(0);
       objetoPersonalizado.PermitirAccesoAlaAPI_Masiva(0);
       objetoPersonalizado.PermitirAccesoAlaAPI_Transmision(0);

       objetoPersonalizado.EstadoDeImplementacionEnDesarrollo();
       objetoPersonalizado.PermitirBuscar(1);

       objetoPersonalizado.AgregarNotasyArchivosAdjuntos(1);
       objetoPersonalizado.IniciarAsistenteFichaPersonalizadaDespuesdeGuardar(-1);

       objetoPersonalizado.Guardar();
       browser.pause(50000);
   });


});
