export interface IOpenPay {
  Group:any;
  Update:any
  card:any
  developHostname: string;
  developMode:boolean;
  extractFormInfo:any;
  formatData:any;
  getApiKey:any;
  getDevelopMode():void;
  getId():void;
  getSandboxMode(): boolean;
  hostname: string;
  log():any;
  sandboxHostname:string;
  sandboxMode: boolean;
  send(t:any,i:any,u:any,s:any):any;
  setApiKey(id: string): void;
  setDevelopMode(t:any):any;
  setId(id: string): void;
  setSandboxMode(FLAG: boolean): void;
  token():any;
  utils():any;
  validate(e:any,t:any):any;
  version: string;


  /*
  Group: {
    card: ƒ r()
    getApiKey: ƒ ()
    getId: ƒ ()
    send: ƒ (t,i,u,s)
    setApiKey: ƒ (t)
    setId: ƒ (t)
    token: ƒ r()
  }

  Update: {send: ƒ}:
  card: ƒ r()
  developHostname: "https://dev-api.openpay.mx/v1/"
  developMode: false
  extractFormInfo: ƒ (e)
  formatData: ƒ (e,t)
  getApiKey: ƒ ()
  getDevelopMode: ƒ ()
  getId: ƒ ()
  getSandboxMode: ƒ ()
  hostname: "https://api.openpay.mx/v1/"
  log: ƒ (e)
  sandboxHostname: "https://sandbox-api.openpay.mx/v1/"
  sandboxMode: true
  send: ƒ (t,i,u,s)
  setApiKey: ƒ (t)
  setDevelopMode: ƒ (t)
  setId: ƒ (t)
  setSandboxMode: ƒ (t)
  token: ƒ r()
  utils: ƒ t()
  validate: ƒ (e,t)
  version: 1*/

}

export class openpay {

  public static Pay: IOpenPay = (<any>window).OpenPay;



  public static async load(): Promise<any> {

    const onload: boolean = await this.loadScript("https://openpay.s3.amazonaws.com/openpay.v1.min.js");
    return (<any>window).OpenPay;
    this.Pay = (<any>window).OpenPay;
    if (!this.Pay) {
      console.error('Failed to load OpenPay!')
    } else {
      return this.Pay
    }

  }



  public static loadScript(gapiUrl: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      var script: any = document.createElement('script')
      script.type = "text/javascript"
      script.src = gapiUrl
      script.onreadystatechange = script.onload = function () {
        var interval = setInterval(function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            clearInterval(interval)
            // console.log('gapi.js loaded.')
            resolve(true)
          } else {
            reject(false)
          }
        }, 500)
      }
      document.getElementsByTagName('head')[0].appendChild(script)

    })
  }


}

