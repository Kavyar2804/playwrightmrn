import {test} from '@playwright/test'
//import './hooks.spec.js'

test('keyboard', {tag:'@smoke'}, async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    await page.locator('[name="handleInput"]').press('Enter32200000000000000000+3')
    await page.keyboard.type('Playwright',{delay:100})
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Delete')

    await page.pause()
    
});