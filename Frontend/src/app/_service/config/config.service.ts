import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  apiPath='http://localhost/api_repairshop/';

  constructor() { }

  getAPIBasePath(){
    return this.apiPath;
  }


}

