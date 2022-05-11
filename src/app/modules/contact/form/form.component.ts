import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact:FormGroup;
  constructor(public fb: FormBuilder, private contactService: ContactService) {
    this.contact = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.contact.controls.email.value)
    this.contactService.contact(this.contact.getRawValue()).subscribe( response =>{
      // console.log(response)
    })
  }

}
