import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverStatus:any;
  myDisabledbtn:boolean= false;
  constructor() { 
    this.serverStatus = Math.random() > 0.7 ? 'online' : 'offline';
    if(this.serverStatus === 'offline'){
      this.myDisabledbtn = true;
    }
    else{
      this.myDisabledbtn = false;
    }
  }

  ngOnInit(): void {
  }


  serverName:string = 'String Interpolation';
  PropertyBinding:string = 'Something Text Here';
  PropertyBindingString:string = '';

  onInput(event:any){
    this.PropertyBindingString = (<HTMLInputElement>event.target).value;   
  }



  // Add Server
serverList:any = [];
serverFound:boolean = false;
  onAddServer(PropertyBinding:any){
    // this.serverStatus = 'online';
    this.serverFound = true;
    this.serverList.push(PropertyBinding);
  }


  pickColor(){
    return this.serverStatus === 'online' ? 'green' : 'brown';
  }


  


}
