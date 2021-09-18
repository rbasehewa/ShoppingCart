import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  CheckoutForm: FormGroup


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.CheckoutForm = this.builder.group({
      firstName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      confirmEmail: ['',[Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]]
      
    })
  }

  checkout(){
    console.log(this.CheckoutForm.value)
  }






}
