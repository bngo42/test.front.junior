import { Injectable } from '@angular/core';
import { DestinationService } from './destination.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IActivity } from './destination.model';

@Injectable()
export class DestinationActivityResolver implements Resolve<IActivity> {
	constructor(
		protected destinationService: DestinationService,
	) {}
	resolve(route: ActivatedRouteSnapshot) {
		const id = route.paramMap.get('id');
		return this.destinationService.getActivitiesByDestinationId(id);
	}
}
