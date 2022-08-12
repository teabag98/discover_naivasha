import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',  component: HomeComponent},
  {path:'destinations',  component: DestinationsComponent},
  {path:'signup' , component: AuthenticationComponent},
  {path:'events',  component: EventsComponent},
  {path:'services',  component: ServicesComponent },
  {path:'faqs',  component: FaqsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
