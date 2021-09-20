import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { reset } from 'src/app/cart.actions';


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
      firstname: ['', Validators.required],
      lastName: [''],
      phone: ['', [Validators.required,  Validators.pattern('^((\\+61-?)|0)?[0-9]{9}$')]],
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      confirmEmail: ['', [Validators.compose([Validators.required, Validators.email])]],
      address: [''],
    })
    
  }
  /**
   * Outout from console.
   * @function CheckoutForm 
   */
  checkout(){
    console.log(this.CheckoutForm.value)
    this.CheckoutForm.reset();
  }
}
