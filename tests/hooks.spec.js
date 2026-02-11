import{test} from '@playwright/test'

test.beforeAll('', () => {

    console.log('befor all database connection');
    
    
});


test.beforeEach('', () => {
    
    console.log('before each login to application');
    
});

test.afterEach('', () => {

    console.log('after each logout from application');
    
    
});
// type obj{name:String,age:number}

// let a=100
// let a:obj={name:3456}



test.afterAll('', () => {

    console.log('after all disconnection from database');
    


    
});

// test('test1', () => {

//     console.log('test1');
    
    
// });

// test('test2', () => {

//     console.log('test2');
    
    
// });