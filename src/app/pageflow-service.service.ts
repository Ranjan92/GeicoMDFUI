import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Isample } from './Isample';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageflowServiceService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  private _url: string = '/assets/sample.json';
  //private post_url = `http://httpbin.org/post`;
  private post_url = `api/api/add`;

  constructor(private http : HttpClient) { }

  getSampleData() : Observable<Isample[]>{
    return this.http.get<Isample[]>(this._url);
  }

  postEtlJobDetails(jobDetails : any, jobName: String) {
    let post_details_url = '';
    post_details_url = this.post_url+'/'+jobName;
    //this.post_url = this.post_url+'/'+jobName;
    alert(post_details_url);
    alert(jobDetails);
    this.http.post(post_details_url, jobDetails, this.options).toPromise().then(error =>{
      console.log(error);
    });
  }
}
