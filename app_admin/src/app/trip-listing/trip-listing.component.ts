import { Component, OnInit } from "@angular/core";
import { trips } from "../data/trips";
import { TripDataService } from "../services/trip-data.service";
import { Trip } from "../models/trip.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-trip-listing",
  templateUrl: "./trip-listing.component.html",
  styleUrls: ["./trip-listing.component.css"],
  providers: [TripDataService],
})
export class TripListingComponent implements OnInit {
  // trips: Array<any> = trips;
  trips: Trip;
  message: string;
  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  private addTrip(): void {
    this.router.navigate(["add-trip"]);
  }
  private getTrips(): void {
    console.log("Inside TripListingComponent#getTrips");
    this.message = "Searching for trips";
    const tripCode = "yourTripCode";
    this.tripDataService.getTrip(tripCode).then((foundTrips) => {
      if (Array.isArray(foundTrips)) {
        this.message = foundTrips.length > 0 ? "" : "No trips found";
      } else {
        // Handle the case where foundTrips is not an array
        this.message = "Invalid data"; // You can customize the error message as needed
      }
      this.trips = foundTrips;
    });
  }
  ngOnInit(): void {
    this.getTrips();
  }
}
