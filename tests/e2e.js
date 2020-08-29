import { short } from '../lib/timeouts'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not log in with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const signInButton = $('#signin_button')
        signInButton.waitForExist()
        signInButton.click()
        browser.pause(short)

        const logInInput = $('#user_login')
        logInInput.waitForExist()
        logInInput.setValue('invalid')
        browser.pause(short)

        const password = $('#user_password')
        password.waitForExist()
        password.setValue('invalid')
        browser.pause(short)

        const signIn = $('input[type="submit"]')
        signIn.waitForExist()
        signIn.click()
        browser.pause(short)

        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should log in with valid credentials', () => {
        const logInInput = $('#user_login')
        logInInput.waitForExist()
        logInInput.setValue('username')
        browser.pause(short)

        const password = $('#user_password')
        password.waitForExist()
        password.setValue('password')
        browser.pause(short)

        const signIn = $('input[type="submit"]')
        signIn.waitForExist()
        signIn.click()
        browser.pause(short)

        const navTab = $('.nav-tabs')
        navTab.waitForExist()
    })

    it('Should log out from app', () => {
        const userName = $('.icon-user')
        userName.waitForExist()
        userName.click()
        browser.pause(short)

        const logOut = $('#logout_link')
        logOut.waitForExist()
        logOut.click()
        browser.pause(short)

        const signInButton = $('#signin_button')
        signInButton.waitForExist()
        browser.pause(short)
    })
})
