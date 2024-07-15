import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-road-issues',
  templateUrl: './road-issues.component.html',
  styleUrls: ['./road-issues.component.css']
})
export class RoadIssuesComponent {
  roadIssueForm: FormGroup;
  selectedSubCategory: string = '';
  accidentForm: FormGroup;
  pathHoleForm: FormGroup;
  animalsForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private reportService: ReportService) {
    this.roadIssueForm = this.fb.group({
      issueType: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.accidentForm = this.fb.group({
      description: ['', Validators.required]
    });

    this.pathHoleForm = this.fb.group({
      description: ['', Validators.required]
    });

    this.animalsForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.roadIssueForm.valid) {
      this.reportService.saveRoadIssue(this.roadIssueForm.value);
      this.router.navigate(['/Report']);
    }
  }

  selectSubCategory(category: string) {
    this.selectedSubCategory = category;
  }

  onSubmitSubCategory(form: FormGroup) {
    if (form.valid) {
      this.reportService.saveRoadIssue(form.value);
      this.router.navigate(['/Report']);
    }
  }
}
