class App {
    openHomePage() {
        browser.url('http://zero.webappsecurity.com/index.html')
    }

    logOut() {
        browser.url('http://zero.webappsecurity.com/logout.html')
    }
}

export default new App()