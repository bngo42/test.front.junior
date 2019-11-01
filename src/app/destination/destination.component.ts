import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination, IActivity } from './destination.model';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities: IActivity;
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination, activities: IActivity }) => {
			this.destination = data.destination;
			this.activities = data.activities;
		});
	}
}
