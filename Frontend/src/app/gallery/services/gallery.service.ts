import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { MetaData } from 'app/gallery/models/meta_data';

@Injectable()
export class GalleryService {

    constructor(private http: Http) {}
    unsplash_api="https://api.unsplash.com/photos/random"
    API_URL="http://localhost/api_repairshop/public"
  //   brandRegister(brand: MetaData): Observable<Response> {
  //   return this.http.post(this.API_URL + '/createNewBrand', brand);
  // }



 viewBrand(id: string): Promise<any> {
    return this.http.get(`${this.API_URL + '/viewBrand'}/${id}`)
      .toPromise()
      .then(response => response.json());
  }

// brandUpdate(brand: Brand): Observable<Response> {
//     return this.http.post(API_URL + '/updateBrand', brand);
//   }

//   getsAllBrandsList(page: number, total: number,search:string){

//     var perPage = 10;
//     var start = (page - 1) * perPage;
//     var end = start + perPage;
//     return this.http.get(API_URL + '/getAllBrandList?start=' + start + '&end=' + end+'&total='+total+ '&search=' + search).map((res: Response) => res.json());

//   }

getRandomImages(): Promise<any> {
return this.http.get(this.unsplash_api + '?client_id=06074bd9f5ba3cf23f831cd9c61b3a2224ec2e28cfac7d79f0d7b5a5564a78aa&count=20')
      .toPromise()
      .then(response => response.json());
  }


  getRandomImagesTest(): Observable<Response> {
    return this.http.get(this.unsplash_api + '?client_id=06074bd9f5ba3cf23f831cd9c61b3a2224ec2e28cfac7d79f0d7b5a5564a78aa&count=20');
  }

  addDescription(id:string,url:string,description:string): Observable<Response> {
    return this.http.get(this.API_URL + '?id='+id+ '?url='+url+ '?description='+description);
  }

}
