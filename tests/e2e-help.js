import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'

describe('E2E Testing - Help Section', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
        NavBar.insideNavbarIsVisible()
    })
    it('Should load help content', () => {
        $('.icon-cog').click()
        $('#help_link').waitForExist()
        $('#help_link').click()
        const title = $('.span8 > h3')
        expect(title).toHaveText('How do I log into my account?')
        $('*=transfer funds').click()
        expect(title).toHaveText('How do I transfer funds?')
        $('*=pay bills').click()
        expect(title).toHaveText('How do I pay bills?')
    })
})
