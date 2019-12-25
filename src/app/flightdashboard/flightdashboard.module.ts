import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './searchform/searchform.component';
import { ApiService } from './../service/api.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [SearchFormComponent],
    providers:[ApiService]
   
})
export class FlightDashboardModule { }
