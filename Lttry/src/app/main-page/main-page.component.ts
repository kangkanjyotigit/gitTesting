import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('shake', [
      state('invalid', style({
        transform: 'translateX(10px)'
      })),
      transition('* => invalid', [
        animate('500ms ease-out', style({
          transform: 'translateX(-10px)'
        })),
        animate('500ms ease-out', style({
          transform: 'translateX(10px)'
        })),
        animate('500ms ease-out', style({
          transform: 'translateX(-10px)'
        })),
        animate('500ms ease-out', style({
          transform: 'translateX(10px)'
        })),
        animate('500ms ease-out', style({
          transform: 'translateX(0px)'
        }))
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {

  public lotteryForm:any;
  constructor(private formBuilder: FormBuilder) {
  }
  

  ngOnInit() {
    this.lotteryForm = this.formBuilder.group({
      number: ['', [Validators.required, Validators.min(10000), Validators.max(99999)]],
      payment: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }
  get formControls() {
    return this.lotteryForm.controls;
  }
  onSubmit() {
    // Implement payment logic here
  }

}
