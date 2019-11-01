import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationComponent } from './destination.component';
import { DestinationResolver } from './destination.resolver';
import { DestinationActivityResolver } from './destination.activity.resolver';

const routes = [
	{ path: ':id', component: DestinationComponent, resolve: { destination: DestinationResolver, activities: DestinationActivityResolver }},
] as Routes;

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
	],
})
export class DestinationRoutingModule {}
