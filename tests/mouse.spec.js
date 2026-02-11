import {test} from '@playwright/test'

test('mouse actions', async({page}) => {
    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await page.getByRole('button', {name:'Yes'}).click() // by default it is left click()

    // //right click
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
    // await page.getByRole('button', {name:'Right Click'}).click({button:'right'})

    //double click
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
    // // await page.getByRole('button', {name: 'Yes'}).dblclick()
    // await page.getByRole('button', {name: 'Yes'}).click({clickCount:2})

    //force click
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // // await page.locator('#submit').click({force:true})
    // await page.locator('#submit').dispatchEvent('click')

    // //mouse hover
    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    // await page.locator('[class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    // await page.mouse.move(100,200)

    // //drag action
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
    // await page.getByText('Drag Me').hover()
    // await page.mouse.down()
    // await page.mouse.move(200,300)
    // await page.mouse.up()

    // //drag&drop
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.getByText('Laptop Cover').dragTo(page.locator("//div[text()='Laptop Accessories']/parent::div"))

    // //by mouse
    // await page.getByText('Mobile Cover').hover()
    // await page.mouse.down()

    // await page.locator("//div[text()='Mobile Accessories']/parent::div").hover()
    // await page.mouse.up()

    // //click & hold
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    // await page.locator('#circle').hover()
    // await page.mouse.down()
    // await page.mouse.move(100,200)

    //scroll
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.mouse.wheel(0,1000)

    //scroll to element
    await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded()

    await page.pause()
    
});