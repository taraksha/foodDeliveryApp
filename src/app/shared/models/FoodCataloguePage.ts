import { RestaurantData } from "./RestaurantData";
import { FoodItemList } from "./FoodItemList";

export interface FoodCataloguePage {
	foodItemList?: FoodItemList[];
	restaurant?: RestaurantData;
}
