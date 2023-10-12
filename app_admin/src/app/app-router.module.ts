import { Routes, RouterModule } from "@angular/router";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "add-trip", component: AddTripComponent },
  { path: "", component: TripListingComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}