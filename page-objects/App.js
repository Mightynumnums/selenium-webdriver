class App {
    openHomePage() {
        browser.url('http://zero.webappsecurity.com/index.html')
    }

    openLogInPage() {
        browser.url('http://zero.webappsecurity.com/login.html')
    }

    openFeedbackPage() {
        browser.url('http://zero.webappsecurity.com/feedback.html')
    }

    logOut() {
        browser.url('http://zero.webappsecurity.com/logout.html')
    }
}

export default new App()
