import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  apiPath='http://localhost/Frontend/';

  constructor() { }

  getAPIBasePath(){
    return this.apiPath;
  }


}

