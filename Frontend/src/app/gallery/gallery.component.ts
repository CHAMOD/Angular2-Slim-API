import { Component, OnInit, Input } from '@angular/core';

import { GalleryService } from 'app/gallery/services/gallery.service';
import { MetaData } from 'app/gallery/models/meta_data';
import { UserService } from 'app/_service/content-services/user.service';

import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  metaData_model: MetaData[]
  options1: Array<any> = [];
  selectImage
  showDescription = false
  descriptId = false
  comment
  favourite
  favouriteStatus
  items: any[];
  imageclass
  buttonColor: string = '#000';
  heartColor: string = '#ffff00';
  
  constructor(private galleryService: GalleryService,private userservice:UserService,
              private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getImagesTest();
    
  }

 
  selectedImage;
  host: { '(window:keydown)': 'hotkeys($event)' }






  getImages() {
    this.galleryService.getRandomImages().then(
      res => {
        console.log(JSON.stringify(res.text()))
        this.metaData_model = res;
      }

    )
      .catch(err => { console.log(err) });
  }


  getImagesTest() {



    this.galleryService.getRandomImagesTest().subscribe(data => {


      // for (let x of data.json()){

      //   console.log(x.urls.regular)
      //   console.log(x.id)
      //   this.metaData_model['id']=x.id

      // }

      var tempOption = [];
      for (let item of data.json()) {

        tempOption.push({ id: item.id, url: item.urls.regular });
      }




      for (let item of tempOption) {

     
        this.options1.push({ value: item.id, label: item.url, isDescrption: false, isLike:false, isnoLike:true });
        this.imageclass = '';
      }

    },
      error => {

      }
    );


  }


  openModal(id) {
    this.selectImage = id
  }


  openDescription(image) {
    let selectedId;
    for (let a = 0; a < this.options1.length; a++) {
      if (this.options1[a].value == image.value) {
        this.options1[a].isDescrption = true;
        break;
      }
    }
  }


  closeDescription(image) {
    let selectedId;
    for (let a = 0; a < this.options1.length; a++) {
      if (this.options1[a].value == image.value) {
        this.options1[a].isDescrption = false;
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

      this.addDescription(imageDetail);
      this.comment = ''
    }
  }



  addFavourite(image) {
   
 
   
  
    for (let a = 0; a < this.options1.length; a++) {
      if (this.options1[a].value == image.value && this.options1[a].isLike == false) {
      console.log('true')
        this.favouriteStatus = this.options1[a].isLike = true;
        this.favouriteStatus = this.options1[a].isnoLike = false;
        this.openDescription(image);

        break;
      }
      else if(this.options1[a].value == image.value && this.options1[a].isLike == true){
        console.log('false')
        this.favouriteStatus = this.options1[a].isLike = false;
        this.favouriteStatus = this.options1[a].isnoLike = true;
        this.closeDescription(image);
      }
    
    }



    let imageDetails = {
      id: image.value,
      favouriteStatus: this.favouriteStatus
    }
    

  }


  // addDescription(imageDetail:any) {


  //   this.galleryService.addDescription(imageDetail.id,imageDetail.url,imageDetail.description).subscribe(data => {

  //   },
  //     error => {

  //     }
  //   );


  // }


  addDescription(data){

    
    this.userservice.addDescription(data).then(res=>{
   
      // if(!res.json().error){
      //   console.log('saved')
      //   this.categoryForm.reset();
      // }else{
      //   console.log(res.json().msg)
      // }

    });
  }


  rout(){


    this.router.navigate(['/home', { outlets: { child: ['groupRegister'] } }]);

  }

}