const assert = require('chai').assert;
const login = require('../Page/Login.po');
const AddObjecto = require('../Page/addObjeto.po');
const vop = require('../Page/viewObjetosPers.po');

const header  = require('../Page/header.po');
const RouteEdit_Remove = require('../Page/routeEdit_Remove.po');
const Edit_object = require('../Page/edit_object.po');
const SearchObjeto = require('../Page/searchObjeto.po');
describe('Test Suite',()=>{
    beforeEach(()=>{
       login.iniciarSecion();
    });

    // PRIMER TEST CASE

    it('Verificar la existencia de un Objeto Personalizado en Salesforce', ()=> {
        header.irAPanelObjetoPersonalizado();
        let searchEtiqueta = {'nombreEtiqueta':'objeto'};
        let searchObjeto = new SearchObjeto();
        searchObjeto.buscarobjeto(searchEtiqueta.nombreEtiqueta);
       // browser.pause(10000);
    });

    // SEGUNDO TEST CASE
    /*
    it('Crear un Objeto Personalizado en Salesforce',()=>{
        header.irAPanelObjetoPersonalizado();
        let ValuesOP = {
                "Etiqueta": "objeto10",
                "EtiquetaPlural": "objetos10",
                "Sexo": "f", // sexo: f,m [f=Femenino, m=Masculino]
                "NombreObjeto": "nameObjeto10",  // el nombre de objeto tiene que ser unico
                "Descripcion": "Esto es una descripcion  ficha",
                "NombreDelRegistro": "NameRegistroIs",
                "TipoDeDatos": "AutoNumber", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
                "MostrarFormato": 00, // solo ceros cantidad no mayor a 9
                "NumeroInicio": 1, // introducir un numero positivo
                // 1 = true, 0 = false
                "PermitirInformes": 1,
                "PermitirActividades": 0,
                "PermitirSeguimientoDeHistorial": 0,
                "PermitirGruposDeChatter": 1,
                "ClasificacionDeObjeto": 1,
                "EstadoDeImplementacion":"En desarrollo", // valores (En desarrollo, implementado)
                "PermitirBuscar": 1,
                "AgregarNotasYarchivosAdjuntos": 1,
                "IniciarAsistenteFichaPersonalizadaDespuesCrear": 0
       };
        let addObjeto = new AddObjecto();
        addObjeto.CrearObjetoPersonalizado(ValuesOP);
        addObjeto.saveObjetoPersonalizado();
        addObjeto.iraGestorObjetos();
         let searchObjeto = new SearchObjeto();
         let objetoagregado = searchObjeto.buscarobjeto(ValuesOP.Etiqueta);
         addObjeto.detalleObjeto(objetoagregado);
         assert.equal(ValuesOP.Etiqueta, objetoagregado,"No se agrego el Objeto !!!!!!!");

         browser.pause(10000);
     });
    */
    // TERCER TEST CASE
    /*
      it('Modificar de un Objeto Personalizado',()=>{
        header.irAPanelObjetoPersonalizado();
        let objetoAModif = {
            "Antigua_Etiqueta": "objeto2",
            "new_Etiqueta":"Objeto6a", //
            "new_EtiquetaPlural": "objetos6a",
            "new_Sexo":"m", // sexo: f,m [f=Femenino, m=Masculino]
            "new_NombreObjeto": "nameobjeto", // Obligatoriamente tiene q cambiar el dato
            "new_Descripcion": "Esto es una descripcion  de objeto6a",
            "new_NombreDelRegistro": "nombre de registro",
            "new_TipoDeDatos": "Text", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
            "new_MostrarFormato": 00, // solo ceros cantidad no mayor a 9
            "new_NumeroInicio": 1, // introducir un numero positivo
            // 1 = true, 0 = false
            "new_PermitirInformes": 1,
            "new_PermitirActividades": 0,
            "new_PermitirSeguimientoDeHistorial": 1,
            "new_PermitirGruposDeChatter": 1,
            "new_ClasificacionObjeto": 1,
            "new_PermitirBuscar": 1
        };
        let editarObjeto = new Edit_object();
        editarObjeto.modifyObject(objetoAModif);
        browser.pause(10000);
    });
    */
    // CUARTO TEST CASE
    /*
    it('Eliminar un Objeto Pesonalizado',()=>{
        header.irAPanelObjetoPersonalizado();
        let  objetoAeliminar ={ 'nameEtiqueta':'objeto10' };
        let remove = new RouteEdit_Remove();
        remove.eliminarObjeto(objetoAeliminar.nameEtiqueta);
        browser.pause(10000);
    });
   */
});
