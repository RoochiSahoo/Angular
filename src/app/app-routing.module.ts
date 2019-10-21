import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { PipeTextComponent } from './pipe-text/pipe-text.component';
import { CaraousleTestComponent } from './caraousle-test/caraousle-test.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {
    path:'greet',
    component:GreetingComponent
  },
  {
    path:'product',
    component:ProductListComponent
  },
  {
    path:'rating',
    component:RatingTestComponent
  },
  {
    path:'pipetest',
    component:PipeTextComponent
  },
  {
    path:'switch',
    component:SwitchTestComponent
  },
  {
    path:'caraousle',
    component:CaraousleTestComponent
  },
  {
    path:'productform',
    component:ProductFormComponent
  },
  
  
  {
     path:'',
   redirectTo:'/greet',pathMatch:"full"
  },
  {
    path:'**',
    redirectTo:'/greet',pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
