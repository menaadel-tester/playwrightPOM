import {APIRequestContext } from '@playwright/test'

async function getusers(request: APIRequestContext){

    const response = await request.get('https://dummyjson.com/users');

    return response;
}

export default {getusers}