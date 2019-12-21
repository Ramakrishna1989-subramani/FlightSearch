import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { flightData } from './mockdata';

@Injectable()

export class ApiService {

    constructor() { }

     getMockFlightData(): Observable<any[]> {
        return Observable.of(flightData).delay(100);
    }
}