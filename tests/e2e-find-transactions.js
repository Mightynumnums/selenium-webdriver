import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'

describe('E2E Tests - Account Activity - Find Transactions', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
    })

    it('Brings you to Account Activity Tab and selects Find Transactions Tab', () => {
        const accountActivityTab = $('#account_activity_tab')
        accountActivityTab.waitForExist()
        accountActivityTab.click()
    })

    it('Transaction Filter Should Work', () => {
        const findTransTab = $('#tabs > ul > li:nth-child(2)')
        findTransTab.waitForExist()
        findTransTab.click()

        const findTransForm = $('#ui-tabs-2')
        findTransForm.waitForExist()
        expect(findTransForm).toExist()

        const description = $('#aa_description')
        description.setValue('test')

        const submitButton = $('button[type="submit"]')
        submitButton.click()

        const result = $('#filtered_transactions_for_account')
        result.waitForExist()

        const message = $('.well')
        expect(message).toHaveText('No results.')
    })
})
