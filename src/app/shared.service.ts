import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AdResponse } from "../app/ad-response";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  callAdvertisers(){
    return new Promise((resolve,reject)=>{
      try{
        let bids=[];
         let apiCalls:Promise<any>[]=[]
          let advertisers:string[]=environment.advertisers
          advertisers.forEach(advertiser=>{
            apiCalls.push(this.http.get<AdResponse>(advertiser).toPromise())
          })
          Promise.all(apiCalls).then(
            (resp:Array<AdResponse>)=>{
              // console.log(`Bids response ${JSON.stringify(resp)}`)
              resp=resp.sort((prev,next)=>{
                // console.log(`Prev ${prev.cpi} -- Next ${next.cpi}`)
                if(prev.cpi>next.cpi)
                  return -1
                else
                  return 1
              })
              // console.log(`Bids sorted ${JSON.stringify(resp)}`)
              bids=resp.slice(0,2)
              // console.log(`Bids selected ${JSON.stringify(bids)}`)

              resolve(bids)
            }
          )
        }
        catch(error){
          // console.log(`Something went wrong ${JSON.stringify(error)}`)
          throw error
    
        }
    }) 
  
  }
}
