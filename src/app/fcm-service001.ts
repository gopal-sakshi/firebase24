// import { Injectable } from "@angular/core";
// import { Subject } from "rxjs";

// @Injectable({
//     providedIn: 'root'
// })
// export class FcmService001 {

//     private _token = '';
//     $notification = new Subject<any>();

//     constructor() {}

//     get token():string {
//         return this._token || (localStorage.getItem('fcmtoken24') || '');
//     }

//     set token(value:string) {
//         this._token = value;
//         localStorage.setItem('fcmtoken24', value);
//     }

//     async generateToken(): Promise<string> { 
        
//         console.log('generating token');

//         return new Promise((resolve, reject) => {
//             resolve('token generated')
//         });

//     }

//     watchForNotifications():void {
        
//     }
// }