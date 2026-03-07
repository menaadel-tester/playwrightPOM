import{expect, type Locator , type Page} from '@playwright/test';

export class Loginpage{

//=========================locators=================================================================

readonly page:Page ;
readonly username_tb : Locator;
readonly password_tb : Locator ;
readonly login_btn : Locator ;
readonly invalidloginMessage  :Locator ;


//==========================variables===============================================================
readonly url: string = '/web/index.php/auth/login';

readonly invalidloginMessageText : string = 'Invalid credentials'

//==========================constractors============================================================

constructor(page: Page) {
  this.page = page;
  this.username_tb = this.page.locator('//input[@name="username"]');
  this.password_tb = this.page.locator('//input[@name="password"]');
  this.login_btn = this.page.locator('//button[@type="submit"]');
  this.invalidloginMessage = this.page.locator('//p[text()="Invalid credentials"]');
}

//===========================Methods ===============================================================

//--------------------------------Actions----------------------------------------------------------

async openurl(){


    await this.page.setViewportSize({width:1920,height:1080});

    await this.page.goto(this.url)


}

async login(username :string , password:string){

    await  this.username_tb.fill(username);
    await  this.password_tb.fill(password);
    await  this.login_btn.click();


}

//------------------------------------Asseration--------------------------------------------------

async verifyinginvalidmessage(){

    await expect(this.invalidloginMessage).toHaveText(this.invalidloginMessageText);
}

//------------------------------------------Asseration-------------------------



}

