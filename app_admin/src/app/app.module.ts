import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { TripCardComponent } from "./trip-card/trip-card.component";
import { TripDataService } from "./services/trip-data.service";
import { HttpModule } from "@angular/http";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-router.module";
import { EditTripComponent } from './edit-trip/edit-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
  ],
  imports: [BrowserModule, HttpModule, ReactiveFormsModule, AppRoutingModule],
  providers: [TripDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
