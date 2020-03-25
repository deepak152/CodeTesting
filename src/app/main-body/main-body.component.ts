import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  products:any=[];
  showCorousel:boolean=false;
  thumbNails:any = []
  constructor(private productsService : ProductsService) { }

  ngOnInit() {
  this.productsService.getProducts().subscribe(data=>{
    this.products=data;
  })

  
  }
  onImgClick(images) {
    images.forEach(group => {
     this.thumbNails.push(group.href);
    });
    this.showCorousel=true;
  }

  closeCorousel(){
    this.showCorousel=false;
    this.thumbNails = [];
  }

}
