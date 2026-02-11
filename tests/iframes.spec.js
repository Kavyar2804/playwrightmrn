import{test} from '@playwright/test'

test('iframe', async({page}) => {
await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
let frame= await page.frameLocator('[class="w-full h-96"]')
await frame.locator('#username').fill('jkhh')
await frame.locator('#password').fill('bjbkkjk')
await frame.getByRole('button',{name:'Login'}).click()
await page.pause()
    
});

test('nestedframe', async({page}) => {
await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
let Pframe= await page.locator('[class="w-full h-96"]').contentFrame()

let childframe= await Pframe.locator('iframe').contentFrame()
await childframe.locator('#email').fill('abc@gmail.com')



    
});