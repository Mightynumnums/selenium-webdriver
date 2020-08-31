import Base from '../Base'

class InnerNavBar extends Base {
    get activityTab() {
        return $('#account_activity_tab')
    }

    get filtersLink() {
        return $('#tabs > ul > li:nth-child(2)')
    }

    get findTransactionsLink() {
        return $('#ui-tabs-2')
    }

    get payBillsTab() {
        return $('#pay_bills_tab')
    }

    clickFindTransactionsForm() {
        this.findTransactionsLink.waitForExist()
        this.findTransactionsLink.click()
    }

    selectActivityTab() {
        this.activityTab.waitForExist()
        this.activityTab.click()
    }

    clickFiltersLink() {
        this.filtersLink.waitForExist()
        this.filtersLink.click()
    }

    selectPayBillsTab() {
        this.payBillsTab.waitForExist()
        this.payBillsTab.click()
    }
}

export default new InnerNavBar()
