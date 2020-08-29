import { short } from '../lib/timeouts'

describe('E2E tests - Search', () => {
    it('Should load Home Page', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const searchBox = $('#searchTerm')
        searchBox.waitForExist()
        searchBox.click()
        browser.pause(short)
    })

    it('Should submit search box', () => {
        const searchBox = $('#searchTerm')
        searchBox.setValue('bank')
        browser.keys('Enter')
        const resultTitle = $('h2')
        resultTitle.waitForExist()
        expect(resultTitle).toHaveText('Search Results:')
    })
})
