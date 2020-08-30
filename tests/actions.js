import { short, long, medium } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('Browser Actions', () => {
    it('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Aleks')
        browser.pause(short)
        input.clearValue()
        browser.pause(short)
        input.addValue('Bruno')
        browser.pause(short)
    })

    it('Click', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
        //buttonPopulate.doubleClick() //double click function
    })

    it('Checbox & Radio Button', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const radio = $('#linux')
        radio.waitForExist()
        radio.click()
        browser.pause(short)

        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(short)
    })

    it('Select Box', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const selectBox = $('#preferred-interface')
        selectBox.waitForExist()
        // selectBox.click()
        // browser.pause(short)
        selectBox.selectByVisibleText('JavaScript API')
        browser.pause(short)
    })
})
