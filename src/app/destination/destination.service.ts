import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestination, IActivity } from './destination.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DestinationService {
	constructor(protected http: HttpClient) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		const params = {} as any;
		params.orderBy = 'name';
		if (!!clue) {
			params['name$like'] = clue;
		}
		return this.http.get<IDestination[]>(`/api/destinations`, { params: params });
	}
	getDestinationById(id: string): Observable<IDestination> {
		return this.http.get<IDestination>(`/api/destination/${id}`);
	}

	getActivitiesByDestinationId(id: string): Observable<IActivity> {
		const params = {} as any;
		if (!!id) {
			params['destinationId'] = id;
		}
		return this.http.get<IActivity>(`/api/activities`, { params : params });
	}
}
