import { test } from '@playwright/test';


test('handle window', async({browser}) => {

    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    const pageprome= context.waitForEvent('page') // the wait is started for the new tab or window
    await page.getByRole('button', {name:'view more'}).first().click()
    const page2= await pageprome

    await page2.getByRole('button', {name:'Add to Cart'}).click()
     await page.bringToFront()

    await page2.pause()

    await page.bringToFront()
    await page2.close()
     await page2.pause()
    
});