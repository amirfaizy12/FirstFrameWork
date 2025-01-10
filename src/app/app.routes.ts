import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: "" , component:HomeComponent , title:"home" },
    {path: "about", component:AboutComponent , title:"about"},
    {path: "contact", component:ContactComponent , title:"contact"},
    {path: "protfolio", component:ProtfolioComponent, title:"protfolio"},
    {path: "**" , component:NotFoundComponent , title: "404"}
];
