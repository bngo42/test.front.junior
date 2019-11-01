import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent, DestinationGalleryComponent, DestinationActivityComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { DestinationActivityResolver } from './destination.activity.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';

@NgModule({
	imports: [
		DestinationRoutingModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
		DestinationActivityResolver
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
		DestinationGalleryComponent,
		DestinationActivityComponent,
	],
	exports: [
		DestinationThumbnailComponent,
	]
})
export class DestinationModule {}
