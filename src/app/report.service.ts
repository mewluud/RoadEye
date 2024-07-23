import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private meFormData: any = {};
  private roadIssueData: any = {};
  private thirdPartiesData: any = {};
  private picturesData: File[] = [];
  private submittedReport: any = {};
  private sectionStatus = new BehaviorSubject<{ [key: string]: boolean }>({
    roadIssues: false,
    me: false,
    thirdParties: false,
    pictures: false,
  });

  constructor(private http: HttpClient) { }

  saveMeForm(data: any) {
    this.meFormData = data;
    console.log('Saving ME form:', data);
    this.updateSectionStatus('me', true);
  }

  getMeForm() {
    return this.meFormData;
  }

  saveRoadIssue(data: any) {
    this.roadIssueData = data;
    console.log('Saving road issue:', data);
    this.updateSectionStatus('roadIssues', true);
  }

  getRoadIssue() {
    return this.roadIssueData;
  }

  saveThirdParties(data: any) {
    this.thirdPartiesData = data;
    console.log('Saving third parties:', data);
    this.updateSectionStatus('thirdParties', true);
  }

  getThirdParties() {
    return this.thirdPartiesData;
  }

  savePictures(data: any) {
    this.picturesData = data;
    console.log('Saving pictures:', data);
    this.updateSectionStatus('pictures', true);
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

  getReports(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/reports/l');
  }

  // Add this method to handle file uploads
  uploadPicture(file: File): Observable<number> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:8080/api/reports/create', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return Math.round(100 * event.loaded / (event.total || 1));
          case HttpEventType.Response:
            return 100; // Upload complete
          default:
            return 0;
        }
      })
    );
  }

  updateSectionStatus(section: string, status: boolean) {
    const currentStatus = this.sectionStatus.value;
    currentStatus[section] = status;
    this.sectionStatus.next(currentStatus);
  }

  getSectionStatus(): Observable<{ [key: string]: boolean }> {
    return this.sectionStatus.asObservable();
  }
}
