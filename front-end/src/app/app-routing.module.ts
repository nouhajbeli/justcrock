import { TmplAstBoundAttribute } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import {HomepageComponent} from './components/homepage/homepage.component'
const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
