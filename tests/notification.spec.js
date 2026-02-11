import {expect, test} from '@playwright/test'


test('notification', async({browser}) => {

    const context = await browser.newContext(
        {
             permissions:['notifications', 'geolocation']
        }
    )
    const page = await context.newPage()
        await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
        await page.getByRole('button', {name:'Notification'}).click()
        let result =await page.evaluate(()=>Notification.permission)
        console.log('permission :' , result);
        
        expect(result).toBe('granted')

        await page.pause()
});