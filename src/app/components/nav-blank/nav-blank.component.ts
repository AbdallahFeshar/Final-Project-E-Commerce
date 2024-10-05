import { CartService } from 'src/app/core/services/cart.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router,private _CartService:CartService,private _Renderer2:Renderer2){}
  cartNum:number=0;

  @ViewChild('navBar') navEle!:ElementRef;


  @HostListener('window:scroll')
  onScroll():void{
   if(scrollY>500){
    this._Renderer2.addClass(this.navEle.nativeElement,'px-5')
    this._Renderer2.addClass(this.navEle.nativeElement,'shadow')
   }else{
    this._Renderer2.removeClass(this.navEle.nativeElement,'px-5')
    this._Renderer2.removeClass(this.navEle.nativeElement,'shadow')
   }
  }
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
         this.cartNum=data;
      },
    });
    this._CartService.getCartUser().subscribe({
      next:(response)=>{
        this.cartNum=response.numOfCartItems;
      }
    });
  };


  signOut():void{
    localStorage.removeItem('etoken');
    this._Router.navigate(['/login']);

  }
}
