import { Component } from '@angular/core';
import {Food} from './food';//imports the nterface of the class food to be used for holding new input data.
import {FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Meal Tracker ';


  public masterFoodsList:Food[]=[
  	//initial elements in the food meals array
  	new Food("Chapati","I loved the chapatis", 400)
  	new Food("Pizza","I also loved this one", 800)
  	
  ];

	// adds food meal items to the list throught the array
	showFood(newFoodFromChild:Food){
    this.masterFoodsList.push(newFoodFromChild);
  }
  //editting the a selected meal in the list
  selectedFood:Food=null; //no food selected

  deleteFoodButton(deleteMeal:Food){
    var index:number = this.masterFoodsList.indexOf(deleteMeal);
    this.masterFoodsList.splice(index,1);
  }
  //shows the food to edit when it is called in the
  showFoodDetailToEdit(food:Food){
    this.selectedFood =food;
  }
  // set the food items to unselected
  finishedEditing(){
     this.selectedFood=null;
   }






  }
