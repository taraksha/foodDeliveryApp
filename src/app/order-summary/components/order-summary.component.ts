import { FoodCataloguePage } from 'src/app/shared/models/FoodCataloguePage';
import { UserDTO } from './../../shared/models/UserDTO';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetail } from 'src/app/shared/models/OrderDetail';
import { OrderService } from '../services/order.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  orderDetail?: OrderDetail;
  foodCataloguePage: FoodCataloguePage;
  total?: any ;
  showDialog: boolean = false;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router,private _location: Location) { }
  
  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    
    this.foodCataloguePage  = JSON.parse(data);
    
    this.orderDetail = {
      foodItemDTOList: this.foodCataloguePage.foodItemList,
      restaurantDTO: this.foodCataloguePage.restaurant,
      userId: 1
    }
    this.total = this.orderDetail.foodItemDTOList.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.quantity * currentValue.price);}, 0);        
  }

  saveOrder() {
        
    this.orderService.saveOrder(this.orderDetail)
      .subscribe(
        response => {
            this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }
  backClicked() {
    this._location.back();
  }
  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }
}
