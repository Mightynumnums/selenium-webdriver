import { short, long, medium } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('First Steps with WebdriverIO', () => {
    it('Load example website, PERSONAL SITE', () => {
        browser.url('https://www.numnumscodes.com')
        browser.pause(short)
        expect(browser).toHaveUrl('https://www.numnumscodes.com/')
        expect(browser).toHaveTitle('Personal Site')
    })

    it('H2 should be visible', () => {
        const h2 = $('h2')
        h2.waitForExist()
        expect(h2).toBeVisible()
    })

    it('p tag should be visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible()
    })

    it('checks link value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.numnumscodes.com/home')
    })

    it('get element text', () => {
        const text = $('h3').getText()
        const element = $('h3')
        element.waitForExist()
        expect(element).toHaveText(
            'Check out my projects or shoot me a message at the links above!'
        )
    })
})
describe('Test another site', () => {
    it('Loads a new site TEST CAFE', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        expect(browser).toHaveUrl(
            'https://devexpress.github.io/testcafe/example/'
        )
    })

    it('Tests that the submit button is of type submit', () => {
        const submitButton = $('#submit-button')
        submitButton.waitForExist()
        expect(submitButton).toHaveAttrContaining('type', 'submit')
    })

    it('Assert value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('test-shot.png')
    })

    it('Change browser viewport', () => {
        browser.setWindowSize(800, 600)
    })

    it('Set mobile view', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })

    it('Set tablet view', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })

    it('Set desktop view', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})
