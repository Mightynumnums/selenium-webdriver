import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'
import HelpPage from '../page-objects/pages/HelpPage'

describe('E2E Testing - Help Section', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
        NavBar.insideNavbarIsVisible()
    })
    it('Should load help content', () => {
        NavBar.clickSettings()
        NavBar.clickHelpButton()
        const title = HelpPage.title

        HelpPage.clickOnTransferFunds()
        expect(title).toHaveText('How do I transfer funds?')

        HelpPage.clickOnPayBills()
        expect(title).toHaveText('How do I pay bills?')
    })
})
