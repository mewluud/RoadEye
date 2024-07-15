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
  ngOnInit(): void {}
  constructor(private fb: FormBuilder, private router: Router, private reportService: ReportService) {
    this.thirdPartiesForm = this.fb.group({
      involved: ['', Validators.required],
      driverName: [''],
      driverNumber: [''],
      description: ['', Validators.required]
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
