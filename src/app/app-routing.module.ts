import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostdashbordComponent } from './component/postdashbord/postdashbord.component';
import { PostformComponent } from './component/postform/postform.component';

const routes: Routes = [
  {
    path:'', component:PostdashbordComponent
  },
  {
    path:'create', component:PostformComponent
  },
  {
    path:'create/:id', component:PostformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
