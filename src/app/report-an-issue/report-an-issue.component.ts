import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-report-an-issue',
  templateUrl: './report-an-issue.component.html',
  styleUrls: ['./report-an-issue.component.css']
})
export class ReportAnIssueComponent implements OnInit {
  submittedReport: any;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadSubmittedReport();
  }

  loadSubmittedReport() {
    this.submittedReport = this.reportService.getSubmittedReport();
  }
}
