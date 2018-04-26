import { Injectable } from '@angular/core';
import { CommonService } from '../config/common.service';

@Injectable()
export class UserService {


  constructor(private commonsService: CommonService) { }

  getClientName() {
    return this.commonsService.apiGet('getClientName');
  }

  registerCategory(data) {
    return this.commonsService.apiPost(data, 'addcategory');
  }

/////////////////////////my 

addDescription(data) {
  return this.commonsService.apiPost(data, 'addFavorite');
}

getFavoriteImages (){
  return this.commonsService.apiGet('getFavoriteImages');
}

removeFavorite(data) {
  return this.commonsService.apiPost(data, 'removeFavorite');
}

removeDescription(data) {
  return this.commonsService.apiPost(data, 'removeDescription');
}

////////////////////////////

  registerClient(data){
    return this.commonsService.apiPost(data, 'clientRegister');
  }
  searchClientDetail(data) {
    return this.commonsService.apiPost(data, 'searchClientDetail');
  }
  getCategory (){
    return this.commonsService.apiGet('getCategory');
  }

  createNewEuipment(data){
    return this.commonsService.apiPost(data, 'createNewEuipment');
  }

  getEquipmentDetails(){
    return this.commonsService.apiGet('getEquipmentDetails');
  }

  searchEquipmentDetailById(data){
   return this.commonsService.apiPost(data, 'searchEquipmentDetailById');
  }

  registerEmployee(data){
    return this.commonsService.apiPost(data, 'registerEmployee');
  }

  getEmployeeDetails (){
    return this.commonsService.apiGet('getEmployeeDetails');
  }
  createNewTicket (data){
    return this.commonsService.apiPost(data, 'createNewTicket');
  }
  
}