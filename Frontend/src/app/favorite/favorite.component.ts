import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_service/content-services/user.service';
import { MetaData } from 'app/gallery/models/meta_data';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  options1: Array<any> = [];
  metaData_model: MetaData[]

  selectImage
  description

  showDescription = false
  descriptId = false
  comment
  favourite
  favouriteStatus
  items: any[];
  imageclass
  buttonColor: string = '#000';
  heartColor: string = '#ffff00';

  constructor(private userservice:UserService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
this.getFavoriteImages();

  }


  getFavoriteImages(){
    
    this.userservice.getFavoriteImages().then(res=>{
   
      console.log(res.json())

      
      for (let item of res.json()) {

        this.options1.push({ value: item.img_id, label: item.url,description:item.description,status:item.status });
  
        for (let a = 0; a < this.options1.length; a++) {
          if (this.options1[a].status == true) {
          
            
            this.favouriteStatus = this.options1[a].isLike = true;
            this.favouriteStatus = this.options1[a].isnoLike = false;
            
            
          }

          else{
            this.favouriteStatus = this.options1[a].isLike = false;
            this.favouriteStatus = this.options1[a].isnoLike = true;
          }
        
        }





      }
  

    });
    

  }

 
  openModal(id,description) {
    this.selectImage = id
    this.description=description

  }

  opennDescription(image) {
    let selectedId;
    for (let a = 0; a < this.options1.length; a++) {
      if (this.options1[a].value == image.value) {
        this.options1[a].isDescrption = true;
        break;
      }
    }
  }

  keyDownFunction(event, image) {
    if (event.keyCode == 13) {
      for (let a = 0; a < this.options1.length; a++) {
        if (this.options1[a].value == image.value) {
          this.options1[a].isDescrption = false;
          break;
        }
      }
      let imageDetail = {
        id: image.value,
        url: image.label,
        description: this.comment,
        status:image.isLike
      }
      console.log('fdfdf', imageDetail)


    }
  }




  // addFavourite(image) {
   
   
  //   this.imageclass = image;
  //   for (let a = 0; a < this.options1.length; a++) {
  //     if (this.options1[a].value == image.value) {
      
        
  //       this.favouriteStatus = this.options1[a].isLike = true;
  //       this.favouriteStatus = this.options1[a].isnoLike = false;
        
  //       break;
  //     }
    
  //   }

  //   let imageDetails = {
  //     id: image.value,
  //     favouriteStatus: this.favouriteStatus
  //   }
  //   console.log('ffdf', this.imageclass)
  // }


  addFavourite(image) {
   
 
   
  
    for (let a = 0; a < this.options1.length; a++) {
      if (this.options1[a].value == image.value && this.options1[a].isLike == false) {
      console.log('true')
        this.favouriteStatus = this.options1[a].isLike = true;
        this.favouriteStatus = this.options1[a].isnoLike = false;
      

        break;
      }
      else if(this.options1[a].value == image.value && this.options1[a].isLike == true){
        console.log('false')
        this.favouriteStatus = this.options1[a].isLike = false;
        this.favouriteStatus = this.options1[a].isnoLike = true;
       
        this.removeFavorite(image.value);


      }
    
    }


  // addDescription(imageDetail:any) {


  //   this.galleryService.addDescription(imageDetail.id,imageDetail.url,imageDetail.description).subscribe(data => {

  //   },
  //     error => {

  //     }
  //   );


  // }



}

removeDescription(data) {

  console.log(data);

  let imageDetail = {
    id: data.value
  }
  this.userservice.removeDescription(imageDetail).then(res=>{
 
 
    this.wait().delay(1).subscribe(() =>{
  
      this.router.navigateByUrl('/favorite');
    });

    
  });


  
}


removeFavorite(data){
    
  let imageDetail = {
    id: data
  }

  console.log(data)
  this.userservice.removeFavorite(imageDetail).then(res=>{
 

    this.wait().delay(1).subscribe(() =>{
  
      this.router.navigateByUrl('/favorite');
    });

    
  });

}


wait(): Observable<boolean>{
  this.router.navigateByUrl('/gallery');

  return Observable.of(false);
}

}
