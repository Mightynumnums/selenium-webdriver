import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not log in with invalid credentials', () => {
        App.openHomePage()
        NavBar.clickSignInButton()
        LogInPage.formIsVisible()
        LogInPage.fillForm('invalid username', 'invalid password')
        LogInPage.submitForm()

        const message = LogInPage.error
        expect(message).toHaveText('Login and/or password are wrong.')
    })

    it('Should log in with valid credentials', () => {
        App.openHomePage()
        NavBar.clickSignInButton()
        LogInPage.formIsVisible()
        LogInPage.fillForm('username', 'password')
        LogInPage.submitForm()
        NavBar.insideNavbarIsVisible()
    })

    it('Should log out from app', () => {
        App.logOut()
        NavBar.signInButtonIsVisible()
    })
})
