import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/homePage';
import { AboutUsComponent } from './pages/about-us/about-us';
import { PropertiesComponent } from './pages/properties/properties';
import { BuildersComponent } from './pages/builders/builders';
import { ContactComponent } from './contactUs/contactUs';
import { SearchbarComponent } from './searchbar/searchbar';
import { ServicesComponent } from './pages/services/services';
import { ContactpageComponent } from './pages/contactpage/contactpage';


const routes: Routes = [
{path: '', component:HomePageComponent },
{path:'About-Us',component:AboutUsComponent},
{path:'Properties',component:PropertiesComponent},
{path:'Builders',component:BuildersComponent},
{path:'Services',component:ServicesComponent},
{path:'Contact',component:ContactpageComponent},
{path:'Searchbar',component:SearchbarComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
