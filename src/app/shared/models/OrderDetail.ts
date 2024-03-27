import { FoodItemList } from "./FoodItemList";
import { RestaurantData } from "./RestaurantData";
import { UserDTO } from "./UserDTO";

export interface OrderDetail {
	userId?: number;
	foodItemDTOList?: FoodItemList[];
	restaurantDTO?: RestaurantData;
}