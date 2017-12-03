import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {
	
	 optionArray: string[]= [ "1. Best time",
				"2. Next Best time",
				"3. Not as good",
				"4. Worst time"];

 public removeOption($event, optionArray: string[]){
		var toRemove = event.target.value;
		alert("Index to Remove: " + toRemove);
		optionArray.splice(optionArray[toRemove],1);
	}
	
  constructor() {

		  }
  
  ngOnInit() {
  }

}
