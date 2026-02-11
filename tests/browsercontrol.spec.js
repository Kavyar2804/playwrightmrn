import {test} from '@playwright/test'

test('browser controls', async({browser}) => {

    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/')
   let size= await page.viewportSize()
   console.log(size);

//    await page.setViewportSize({width:1000, height:500})
//    let size= await page.viewportSize()
//     console.log(size);

    let title= await page.title()
   console.log(title);
   console.log(await page.url());

  let page2=  await context.newPage()
  await page2.goto('https://www.amazon.in/')
  await page2.pause()
  console.log( await page2.title());
  await page2.goBack()
  await page2.goForward()
  await page2.reload()
await page.bringToFront()
let pages= await context.pages()
console.log( pages.length)
await page2.close()
await page2.pause()

let pages1= await context.pages()
console.log( pages1.length)
 
   
   

    
});