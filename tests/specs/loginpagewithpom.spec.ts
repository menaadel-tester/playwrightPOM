import {expect,test} from '@playwright/test'
import { POManager } from '../pages/pomanager';
import jsonData from '../../testdata/testusers.json'; /// read data using json file 
import tsData from '../../testdata/testusers.json'; //read data using type script file so no need to parse data 


//==================================== vraiable=================================================

let pomanager : POManager ;
// How to parse json data to sting format (type script object )
const parsedJsonData = JSON.parse(JSON.stringify(jsonData));
//==================================== Hooks =================================================

test.beforeEach('this action is run before each test cases',async({page})=>{

    pomanager = new POManager(page);

    await pomanager.getLoginPage().openurl();


});

test.describe.configure({timeout:50000});// it means all test execution in describe should be not exceed 50 seconds 
test.describe.configure({mode:'parallel'}); // it means all test cases in describe will be executed sequentially not parallel



test.describe('login test',()=>{


    test('test valid login',async({page})=>{


    
       await  pomanager.getLoginPage().login(tsData.username,tsData.password);
       await  pomanager.getHomePage().verifyadmin_iconisdisplayed()


    });

     [

            
        {username: "admin",password:"admin12",testType:"invalid password"},
        {username:"dmin",password:"admin123",testType:"invalid username"}

        ].forEach(({username,password,testType})=>{

             test(`test invalid login for ${testType}`, async({page})=>{

        await   pomanager.getLoginPage().login(username,password);
        await  pomanager.getLoginPage().verifyinginvalidmessage();


    })






        })


   






})
