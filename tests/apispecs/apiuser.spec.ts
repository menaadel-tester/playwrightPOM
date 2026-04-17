import { test,expect,request } from "@playwright/test";
import UserRequest from "../userendpoint.ts/userendpoint";  

    test('user api test',async ({request,context})=>{
      
     const response = await UserRequest.getusers(request);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(response.status()).toBe(200);
    expect (responsebody.users.length).toBeGreaterThan(0);

  
        
       
    });


