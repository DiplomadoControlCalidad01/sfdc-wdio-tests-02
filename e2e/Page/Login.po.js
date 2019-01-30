const ambiente = require('../../environment');
const commonAction = require('../core/CommonActions');


class Login{
    constructor(){
        browser.url(ambiente.url);
        this.locatoruser = '#username';
        this.locatorpassword = '#password';
        this.locatorBotonIniciarsecion = '#Login';
    }

    llenarCampoUsario(){
        commonAction.setvalue(this.locatoruser,ambiente.credenciales.sysadmin.user);
    }
    llenarCampoPassword(){
        commonAction.setvalue(this.locatorpassword,ambiente.credenciales.sysadmin.password);
    }
    ClickiniciarSesion(){
        commonAction.click(this.locatorBotonIniciarsecion);
    }
    static iniciarSecion(){
        let login = new Login();
        login.llenarCampoUsario();
        login.llenarCampoPassword();
        login.ClickiniciarSesion();
    }
}
module.exports = Login ;