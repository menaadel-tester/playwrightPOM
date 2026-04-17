import {expect,test} from '@playwright/test'
import { POManager } from '../pages/pomanager';
import jsonData from '../../testdata/testusers.json'; /// read data using json file 
import tsData from '../../testdata/testusers.json';
import testusers from '../../testdata/testusers';

let pomanager : POManager ;


test.beforeEach('open the URl',async({page})=>{

    pomanager = new POManager(page);

    await pomanager.getLoginPage().openurl();

});

test('test edit personal details', async({page})=>{


    await pomanager.getLoginPage().login(tsData.username,tsData.password);

    await pomanager.getHomePage().openmyinfo();

    await pomanager.getPersonalDetailsPage().editpersonaldetails(testusers.firstname,testusers.middlename,testusers.lastname);

    await pomanager.getPersonalDetailsPage().verifyprofilenameisdisplayed(testusers.profilename);


});


