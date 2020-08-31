import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import InnerNavBar from '../page-objects/components/InnerNavBar'
import FiltersPage from '../page-objects/pages/FilterPage'

describe('E2E Tests - Account Activity - Find Transactions', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
    })

    it('Brings you to Account Activity Tab and selects Find Transactions Tab', () => {
        InnerNavBar.activityTab
        InnerNavBar.selectActivityTab()
    })

    it('Transaction Filter Should Work', () => {
        InnerNavBar.filtersLink
        InnerNavBar.clickFiltersLink()

        InnerNavBar.findTransactionsLink
        InnerNavBar.clickFindTransactionsForm()

        FiltersPage.fillOutForm('Test')
        FiltersPage.submitForm()

        FiltersPage.resultsExist()

        const msg = FiltersPage.successMessage
        expect(msg).toHaveText('No results.')
    })
})
