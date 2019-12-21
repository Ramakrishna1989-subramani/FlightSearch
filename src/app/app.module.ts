import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ApiService } from './service/api.service';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent ],
  providers: [ApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
