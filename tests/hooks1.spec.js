import{test} from '@playwright/test'

test.beforeAll('', () => {

    console.log('connect to database');
    
    
});

test.beforeEach('', () => {

    console.log('login to app');
    
    
});

test.afterEach('', () => {

    console.log('logout from app');
    
    
});
test.afterAll('', () => {

    console.log('disconnect from database');
    
    
});

test('test1', {tag: '@smoke'}, async({page}) => {

    await page.goto('https://www.amazon.in/')

    console.log('test1');

    
    
});

test('test2', async({page}) => {
    await page.goto('https://www.flipkart.com')
    console.log('test2');
    
    
});