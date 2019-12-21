import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './service/api.service'

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
})
export class AppComponent  { 
	name = 'Angular'; 
	model: any = {};
	flightData :any = []
	fliteredData :any = []
	toOrginCity: string = ''
	fromDestCity: string =''
	dateSelectedTo :any = new Date()
	dateSelectedFrom :any = new Date()
	destination2  :string;

	constructor(private apiService:ApiService){

		this.apiService.getMockFlightData().subscribe(
                data => {
                	this.flightData = data
                	console.log(data)
                })
	}

	serachfn(){
		console.log(this.model.dateArrival)
		console.log(this.model.dateDepature)

		for (var i  in this.flightData) {
			// console.log(":::1:",new Date(this.flightData[i]['ArrivalDate1']))
			// console.log(":::2;",new Date(this.flightData[i]['DepartureDate1']))
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

	}	

		process(date:any){
		    var d = new Date(date),
	        month = '' + (d.getMonth() + 1),
	        day = '' + d.getDate(),
	        year = d.getFullYear();

	    if (month.length < 2) 
	        month = '0' + month;
	    if (day.length < 2) 
	        day = '0' + day;

	    return [year, month, day].join('-');
		}



}
