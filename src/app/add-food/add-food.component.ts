import { Component, Output, EventEmitter } from '@angular/core';//imports to diplay the data
import {Food} from '../food';//imports the nterface of the class food to be used for holding new input data.

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {
  @Output()  addNewFood= new EventEmitter();//to  take tye listed food to the sibing component for listing

addFood(name:string,description:string,calories:number){
  var newFoodObj:Food = new Food(name,description,calories);
  this.addNewFood.emit(newFoodObj);//carries the data to the parent component for display
}


}
