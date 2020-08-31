import Base from '../Base'

class Navbar extends Base {
    get signInButton() {
        return $('#signin_button')
    }

    get insideNavbar() {
        return $('.nav-tabs')
    }

    get settingsButton() {
        return $('.icon-cog')
    }

    get helpButton() {
        return $('#help_link')
    }

    get searchInputBox() {
        return $('#searchTerm')
    }

    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }

    clickSignInButton() {
        this.signInButton.click()
    }

    insideNavbarIsVisible() {
        this.insideNavbar.waitForExist()
    }

    clickSettings() {
        this.settingsButton.waitForExist()
        this.settingsButton.click()
    }

    clickHelpButton() {
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

    search(text) {
        this.searchInputBox.waitForExist()
        this.searchInputBox.setValue(text)
        this.searchInputBox.keys('Enter')
    }
}

export default new Navbar()
