import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { AdResponse } from './ad-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ads=[]

  constructor(private sharedService:SharedService){}

  ngOnInit(){
    this.sharedService.callAdvertisers().then((resp:Array<AdResponse>)=>{
      // console.log(`Ads Response ${JSON.stringify(resp)}`)
      this.ads=[...resp]
    })
  }

  adClick(href){
    console.log(`Adclick ${href}`)
    window.open(href,'_blank')
  }



}
