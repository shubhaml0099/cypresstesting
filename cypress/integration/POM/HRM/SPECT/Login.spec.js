import {Login} from '../MODUL/Login'
const login = new Login()


describe('testscenario for login functionality',function(){

    beforeEach(function(){
        login.navigate()
    })


    it('verify the login with validate credentails ',function(){
        login.login("Admin","admin123")
    })

    
    it('verify the login with invalidate credentails ',function(){

        login.login("Admin","admin1233")
        login.validateInvalidLogin()
        
    })

    it('verify visibilty for logo ',function(){
        login.validateLogoIsVisible()   

    })

    it('verify visibilty forgotPassword link',function(){
        login.validateVisibiltyforForgotPass()
    })


})