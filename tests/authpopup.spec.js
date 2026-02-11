import {test,expect} from '@playwright/test'

test



('authentication @SMoke',{tag:'@smoke'} ,async({browser}) => {

    const context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }
    })

      const page = await context.newPage()
      await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')

      
      await page.pause()

  
    
});