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
}

export default new InnerNavBar()
