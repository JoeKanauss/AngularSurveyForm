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

 public removeOption($event, optionArray: string[], usedOptions: string[]){
		var toRemove: number = $event.target.value;
		var className: string = $event.target.className;
		alert(className);
		alert("Index to Remove: " + toRemove);
		alert("Array Item: " + optionArray[toRemove]);
		document.getElementById(className).innerHTML = optionArray[toRemove];
		optionArray.splice(toRemove, 1);

	}
	
	
public resetOptions(optionArray){
	
	window.location.reload();
}
	
  constructor() {

		  }
  
  ngOnInit() {
  }
}
