import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

// import { mockdata }  from ''
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

	private _jsonURL = 'app/service/flightmockdata.json'
	// /flightmockdata.json';


	constructor(private http: HttpClient) {}

	public getJSON(): Observable<any> {
		   return this.http.get(this._jsonURL);
	}

    /*constructor() { }

     getMockFlightData(): Observable<any[]> {
        return Observable.of(flightData).delay(100);
    }*/
}
