import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  implements OnInit
{
  constructor(private _CartService:CartService,private _Renderer2:Renderer2){

  };
  cartDetailes:any=null;
  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next:(response)=>{
        this.cartDetailes=response.data;
      }
    })
  };
  removeIt(id:string,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.cartDetailes=response.data;
        this._Renderer2.removeAttribute(element, 'disabled')
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element, 'disabled')
      }
    })
  };

  changeCount(count:number,id:string,btn1:HTMLButtonElement,btn2:HTMLButtonElement):void{
     if(count>=1){
      this._Renderer2.setAttribute(btn1,'disabled','true');
      this._Renderer2.setAttribute(btn2,'disabled','true');
      this._CartService.updateCart(id,count).subscribe({
        next:(response)=>{
          this.cartDetailes=response.data;
          this._Renderer2.removeAttribute(btn1,'disabled');
          this._Renderer2.removeAttribute(btn2,'disabled');
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(btn1,'disabled');
          this._Renderer2.removeAttribute(btn2,'disabled');
        }
       });
    };
     };
     clear():void{
      this._CartService.clearCart().subscribe({
        next:(response)=>{
          if(response.message==="success"){
            this.cartDetailes=null;
          }
        }
      })
     }
};
