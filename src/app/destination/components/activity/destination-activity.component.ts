import { Component, Input } from '@angular/core';
import { IActivity } from '../../destination.model';

@Component({
	selector: 'app-destination-activity',
	templateUrl: './destination-activity.component.html',
	styleUrls: ['./destination-activity.component.scss']
})
export class DestinationActivityComponent {
	@Input() activity: IActivity;
}
