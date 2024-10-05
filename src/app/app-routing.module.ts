import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path:'' ,canActivate:[authGuard],loadComponent:()=>import('./layout/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'home'},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'cart'},
    {path:'products',loadComponent:()=>import('./components/prodects/prodects.component').then((m)=>m.ProdectsComponent),title:'products'},
    {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:'brands'},
    {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent),title:'payment'},
    {path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent),title:'AllOrders'},
    {path:'forgotpassword',loadComponent:()=>import('./components/forgorpassword/forgorpassword.component').then((m)=>m.ForgorpasswordComponent),title:'ForgotPassword'},
    {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'categories'},
    {path:'productdetailes/:id',loadComponent:()=>import('./components/detailes/detailes.component').then((m)=>m.DetailesComponent),title:'categories'},

  ]

},
  {path:'',loadComponent:()=>import('./layout/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
     {path:'',redirectTo:'login',pathMatch:'full'},
     {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'Login'},
     {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'Register'},
     {path:'forgot',loadComponent:()=>import('./components/forgorpassword/forgorpassword.component').then((m)=>m.ForgorpasswordComponent),title:'ForgotPassword'},

  ]
},
{path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
