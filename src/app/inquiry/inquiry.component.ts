import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {
  }
  sendEmail(formdata:any){
    if(formdata.name===""||formdata.email===""||formdata.phone===""||formdata.message==="")
    {
      alert("Please Fill All Data...!");
      return;
    }
    var params={
      name:formdata.name,
      email:formdata.email,
      phone:formdata.phone,
      message:formdata.message
    };
    emailjs.send("service_kis682z","template_91obx89",params,"qLNXmxszXVmdPulIi").then(function(res){
      alert("Email was Successfully Sent...");
    })
  }


}
