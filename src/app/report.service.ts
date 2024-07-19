/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private meFormData: any = {};
  private roadIssueData: any = {};
  private thirdPartiesData: any = {};
  private picturesData: any = {};
  private completeReport: any = {};  // Add this line

  private apiUrl = 'http://localhost:8080/api/reports';

  constructor(private http: HttpClient) { }

  saveMeForm(data: any): void {
    this.meFormData = data;
    console.log('Saving ME form:', data);
  }

  getMeForm(): any {
    return this.meFormData;
  }

  saveRoadIssue(data: any): void {
    this.roadIssueData = data;
    console.log('Saving road issue:', data);
  }

  getRoadIssue(): any {
    return this.roadIssueData;
  }

  saveThirdParties(data: any): void {
    this.thirdPartiesData = data;
    console.log('Saving third parties:', data);
  }

  getThirdParties(): any {
    return this.thirdPartiesData;
  }

  savePictures(data: any): void {
    this.picturesData = data;
    console.log('Saving pictures:', data);
  }

  getPictures(): any {
    return this.picturesData;
  }

  submitReport(): Observable<any> {
    const completeReport = {
      meFormData: this.meFormData,
      roadIssueData: this.roadIssueData,
      thirdPartiesData: this.thirdPartiesData,
      picturesData: this.picturesData
    };

    this.completeReport = completeReport;  // Store the complete report

    console.log('Submitting complete report:', completeReport);
    return this.http.post(`${this.apiUrl}/create`, completeReport, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getCompleteReport(): any {
    return this.completeReport;
  }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private meFormData: any = {};
  private roadIssueData: any = {};
  private thirdPartiesData: any = {};
  private picturesData: any = {};
  private submittedReport: any = {};

  constructor(private http: HttpClient) { }

  saveMeForm(data: any) {
    this.meFormData = data;
    console.log('Saving ME form:', data);
  }

  getMeForm() {
    return this.meFormData;
  }

  saveRoadIssue(data: any) {
    this.roadIssueData = data;
    console.log('Saving road issue:', data);
  }

  getRoadIssue() {
    return this.roadIssueData;
  }

  saveThirdParties(data: any) {
    this.thirdPartiesData = data;
    console.log('Saving third parties:', data);
  }

  getThirdParties() {
    return this.thirdPartiesData;
  }

  savePictures(data: any) {
    this.picturesData = data;
    console.log('Saving pictures:', data);
  }

  getPictures() {
    return this.picturesData;
  }

  submitReport(location: string, dateTime: string, completeReport: any): Observable<any> {
    const reportData = {
      location: location,
      dateTime: dateTime,
      meFormData: this.meFormData,
      roadIssueData: this.roadIssueData,
      thirdPartiesData: this.thirdPartiesData,
      picturesData: this.picturesData,
      ...completeReport
    };

    console.log('Submitting complete report:', reportData);
    return this.http.post('http://localhost:8080/api/reports/create', reportData);
  }

  getSubmittedReport() {
    return this.submittedReport;
  }
}
