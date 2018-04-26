import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ConfigService } from './config.service';

@Injectable()
export class CommonService {

    constructor(private http: Http, private config: ConfigService) { }


    apiPost(requestBody: any, apiURL: string): Promise<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        headers.append('Accept', 'application/json');
        return this.http
            .post(this.config.getAPIBasePath() + 'public/' + apiURL, JSON.stringify(requestBody), { headers: headers})
            .toPromise()
            .then(
            (response: Response) => {
                let apiResponse = response.json();
                return response;
            })
            .catch(
            (error: Response) => {
                if (error.status == 401) {
                    //set headers
                    let requestHeaders = new Headers();
                    requestHeaders.append('Accept', 'application/json');
                    requestHeaders.append('Content-Type', 'application/json');
                    return this.http
                        .post(this.config.getAPIBasePath() + 'public/' + apiURL, JSON.stringify(requestBody), { headers: requestHeaders })
                        .toPromise()
                        .then(
                        (response: Response) => {
                            let apiResponse = response.json();
                            return response;
                        })

                } else {
                    return error;
                }
            }
        );
    }


    apiGet(apiURL: string): Promise<Response> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');

        return this.http
            .get(this.config.getAPIBasePath() + 'public/' + apiURL, { headers: headers})
            .toPromise()
            .then(
            (response: Response) => {
                let apiResponse = response.json();;
                return response;
            })
            .catch(
            (error: Response) => {

                //second api call
                if (error.status == 401) {
                    //set headers
                    let requestHeaders = new Headers();
                    requestHeaders.append('Accept', 'application/json');
                    requestHeaders.append('Content-Type', 'application/json');

                    return this.http
                        .get(this.config.getAPIBasePath() + 'public/' + apiURL, { headers: requestHeaders})
                        .toPromise()
                        .then(
                        (response: Response) => {
                            let apiResponse = response.json();
                            return response;
                        })
                } else {
                    return error;

                }
            }
            );
    }

    apiPut(requestBody: any, apiURL: string): Promise<Response> {

        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Accept', 'application/json');
        return this.http
            .put(this.config.getAPIBasePath() + 'public/' + apiURL, JSON.stringify(requestBody), { headers: headers })
            .toPromise()
            .then(
            (response: Response) => {
                let apiResponse = response.json();
                return response;
            })
            .catch(
            (error: Response) => {
                if (error.status == 401) {
                    //set headers
                    let requestHeaders = new Headers();
                    requestHeaders.append('Accept', 'application/json');
                    requestHeaders.append('Content-Type', 'application/json');
                    return this.http
                        .put(this.config.getAPIBasePath() + 'public/' + apiURL, JSON.stringify(requestBody), { headers: requestHeaders, withCredentials: true })
                        .toPromise()
                        .then(
                        (response: Response) => {
                            let apiResponse = response.json();
                            return response;
                        })

                } else {
                    return error;
                }
            }
            );
    }

    apiDelete(apiURL: string): Promise<Response> {

        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Accept', 'application/json');

        return this.http
            .delete(this.config.getAPIBasePath() + 'public/' + apiURL, { headers: headers, withCredentials: true })
            .toPromise()
            .then(
            (response: Response) => {
                let apiResponse = response.json();
                return response;
            })
            .catch(
            (error: Response) => {

                //second api call
                if (error.status == 401) {

                    //set headers
                    let requestHeaders = new Headers();
                    requestHeaders.append('Accept', 'application/json');
                    requestHeaders.append('Content-Type', 'application/json');

                    return this.http
                        .delete(this.config.getAPIBasePath() + 'api/public/' + apiURL, { headers: requestHeaders, withCredentials: true })
                        .toPromise()
                        .then(
                        (response: Response) => {
                            let apiResponse = response.json();
                            return response;
                        })
                } else {
                    return error;

                }
            }
            );
    }


    makeFileRequest(path: string, params: Array<string>, files: Array<File>) {
        let url = this.config.getAPIBasePath() + 'api/public/' + path;
        console.log('file recived by service', files);
        return new Promise((resolve, reject) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          for (var i = 0; i < files.length; i++) {
            formData.append("file", files[i], files[i].name);
          }
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
              } else {
                reject(xhr.response);
              }
            }
          }
          xhr.open("POST", url, true);
          xhr.send(formData);
        });
      }


}