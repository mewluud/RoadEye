import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-third-parties',
  templateUrl: './third-parties.component.html',
  styleUrls: ['./third-parties.component.css']
})
export class ThirdPartiesComponent implements OnInit {
  thirdPartiesForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private reportService: ReportService) {
    this.thirdPartiesForm = this.fb.group({
      involved: ['', Validators.required],
      driverName: [''],
      driverNumber: [''],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.thirdPartiesForm.get('involved')?.valueChanges.subscribe(value => {
      if (value === 'anotherVehicle') {
        this.thirdPartiesForm.get('driverName')?.setValidators([Validators.required]);
        this.thirdPartiesForm.get('driverNumber')?.setValidators([Validators.required]);
      } else {
        this.thirdPartiesForm.get('driverName')?.clearValidators();
        this.thirdPartiesForm.get('driverNumber')?.clearValidators();
      }
      this.thirdPartiesForm.get('driverName')?.updateValueAndValidity();
      this.thirdPartiesForm.get('driverNumber')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.thirdPartiesForm.valid) {
      this.reportService.saveThirdParties(this.thirdPartiesForm.value);
      this.router.navigate(['/Report']);
    }
  }

  get involvedFormControl() {
    return this.thirdPartiesForm.get('involved');
  }
}
