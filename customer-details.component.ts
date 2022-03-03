import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { CustomerListServiceService } from '../customer-list-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
detailsForm= new FormGroup({
  useremail: new FormControl(''),
  username: new FormControl(['', ]),
  userage: new FormControl(''),

})
  constructor(public customerListService: CustomerListServiceService) { }

  ngOnInit(): void {
    if(this.customerListService.isEdit){
      this.detailsForm.patchValue(this.customerListService.customerList[this.customerListService.Index])
      console.log("this.detailsForm",this.detailsForm,this.customerListService.customerList[this.customerListService.Index] );
      
    }
  }
submitDetails(){
  console.log("submited", this.detailsForm);
  console.log("submited", this.detailsForm.value);
  this.customerListService.customerList.push( this.detailsForm.value);
  this.detailsForm.reset();
}

// patchValue(){
  // this.detailsForm.patchValue({
  //   userage: 23,
  //   useremail:"sneharika@gmail.com",
  //   username: "Sneharika"
  // })
// }

updateDetails(){
 
  this.customerListService.customerList[this.customerListService.Index]= this.detailsForm.value;
  this.detailsForm.reset();
  this.customerListService.isEdit=false;
}
}
