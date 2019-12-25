import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './../../service/api.service';

@Component({
    selector: 'app-searchform',
    templateUrl: './searchform.component.html',
    styleUrls: ['./searchform.component.scss']
})
export class SearchFormComponent implements OnInit {
 
    // model: any = {};
    @Input() model: string;
    @Output() changeName = new EventEmitter();

    constructor() {

    }

    ngOnInit() { } 

    serachfn(){

        this.changeName.emit();
    }

    

    /*serachfn(){
        console.log(this.model)

        for (var i  in this.flightData) {
            if(this.flightData[i]['Origin1'] == this.model['originCity'] &&
                this.flightData[i]['Destination1'] == this.model['destCity'] &&
                this.flightData[i]['Cabin1'] == this.model['passenger'] && 
                (this.process(new Date(this.flightData[i]['ArrivalDate1'])) == this.model.dateArrival) &&
                (this.process(new Date(this.flightData[i]['DepartureDate1'])) == this.model.dateDepature)){
                this.fliteredData.push(this.flightData[i])
                this.destination2 = this.flightData[i]['Destination2']

            }
        }
        this.toOrginCity = this.model['originCity']
        this.fromDestCity = this.model['destCity']
        this.flightData = this.fliteredData
        this.dateSelectedTo = this.model.dateArrival
        this.dateSelectedFrom = this.model.dateDepature

    }*/
    

}
