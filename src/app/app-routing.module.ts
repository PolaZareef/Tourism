import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { ToursComponent } from './tours/tours.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'tours',
    component: ToursComponent
  },
  {
    path: 'inquiry',
    component: InquiryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
