import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  lotteryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.lotteryForm = this.formBuilder.group({
      number: ['', [Validators.required, Validators.min(10000), Validators.max(99999)]],
      payment: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit() {
    // Implement payment logic here
  }

}
