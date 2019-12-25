import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightDashboardComponent } from './flightdashboard/flightdashboard.component'
import { SearchFormComponent } from './flightdashboard/searchform/searchform.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpClientModule],
  declarations: [ AppComponent,FlightDashboardComponent,SearchFormComponent],
  providers: [ApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
