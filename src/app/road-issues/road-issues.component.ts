import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-road-issues',
  templateUrl: './road-issues.component.html',
  styleUrls: ['./road-issues.component.css']
})
export class RoadIssuesComponent implements OnInit  {
  roadIssueForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private reportService: ReportService) {
    this.roadIssueForm = this.fb.group({
      involved: ['', Validators.required],
      description: ['', Validators.required]


    });
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.roadIssueForm.valid) {
      this.reportService.saveRoadIssue(this.roadIssueForm.value);
      this.router.navigate(['/Report']);
    }
  }
  get involvedFormControl() {
    return this.roadIssueForm.get('involved');
  }


}
