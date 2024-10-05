import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [CommonModule,CarouselModule,CuttextPipe],
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss']
})
export class DetailesComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService,private _Renderer2:Renderer2,private _CartService:CartService,private _ToastrService:ToastrService){

  }
  productId!:string|null;
  productDetailes:any=null;
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
    this.productId= params.get('id');
    console.log(this.productId);
    }
   });

   this._ProductService.getProductDetailes(this.productId).subscribe({
    next:({data})=>{
      this.productDetailes=data;
    }
   });

  }
  addProduct(id:string,element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element,'disabled','true')
        this._CartService.addCart(id).subscribe({
          next:(response)=>{
            console.log(response)
            this._ToastrService.success(response.message);
            this._Renderer2.removeAttribute(element,'disabled');

            this._CartService.cartNumber.next(response.numOfCartItems);
          },
          error:(err)=>{
            this._Renderer2.removeAttribute(element,'disabled');
          }
        })
  }
  productDetailesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }
}
