import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './service/api.service'

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
})
export class AppComponent  { 
	name = 'Angular'; 

	constructor(){
	}
}
