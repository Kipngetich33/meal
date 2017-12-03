import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Food} from '../food';



@Component({
  selector: 'app-result-pane',
  templateUrl: './result-pane.component.html',
  styleUrls: ['./result-pane.component.css']
})
export class ResultPaneComponent{
  	@Input() childFoodlist:Food[];
    @Output() clickSender = new EventEmitter();



    editFoodButton(editSelectFood:Food){
    this.clickSender.emit(editSelectFood);
    }
    public caloriesToShow: string ="all";
    onChange(optionFromMenu){
      this.caloriesToShow = optionFromMenu;
    }
        @Output() clickRemove = new EventEmitter();
        deleteFoodButton(editSelectFood){
          this.clickRemove.emit(editSelectFood);
      }

  }
