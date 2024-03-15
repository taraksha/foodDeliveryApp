import { RestaurantService } from './../services/restaurants.service';
import { Router, RouterModule } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { Restaurantdata } from 'src/app/shared/models/RestaurantData';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent {

  public restaurantList: Restaurantdata[] ;

  ngOnInit(){
    this.getAllRestaurants();
  }

  constructor(private router: Router, private restaurantService: RestaurantService) {}

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  getRating(): number{
    return this.getRandomNumber(3,5);
  }
  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }
}
