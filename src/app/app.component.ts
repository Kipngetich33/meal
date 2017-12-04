import { Component } from '@angular/core';
import {Food} from './food';
import {FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Meal Tracker ';


  public masterFoodsList:Food[]=[
  	new Food("Chapati","I loved the chapatis", 400),
    new Food("Pizza","I also loved this one", 800),
    new Food("NyamChom","It was oversalted", 600)
  	
  ];

	showFood(newFoodFromChild:Food){
    this.masterFoodsList.push(newFoodFromChild);
  }
  
  // this sets the value of selceted food back to null
  selectedFood:Food=null; 

  deleteFoodButton(deleteMeal:Food){
    var index:number = this.masterFoodsList.indexOf(deleteMeal);
    this.masterFoodsList.splice(index,1);
  }

  showFoodDetailToEdit(food:Food){
    this.selectedFood =food;
  }
  finishedEditing(){
     this.selectedFood=null;
   }






  }
