import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  meForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private reportService: ReportService) {
    this.meForm = this.fb.group({
      registrationNumber: ['', Validators.required],
      description: ['', Validators.required],
      isInjured: ['', Validators.required],
      hasPassenger: ['', Validators.required],
      passengerCount: ['', Validators.required],
      isPassengerInjured: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.meForm.get('hasPassenger')?.valueChanges.subscribe(value => {
      if (value === 'yes') {
        this.meForm.get('passengerCount')?.setValidators([Validators.required]);
        this.meForm.get('isPassengerInjured')?.setValidators([Validators.required]);
      } else {
        this.meForm.get('passengerCount')?.clearValidators();
        this.meForm.get('isPassengerInjured')?.clearValidators();
      }
      this.meForm.get('passengerCount')?.updateValueAndValidity();
      this.meForm.get('isPassengerInjured')?.updateValueAndValidity();
    });
  }
  onSubmit() {
    if (this.meForm.valid) {
      this.reportService.saveMeForm(this.meForm.value);
      this.router.navigate(['/Report']);
    }
  }
}
