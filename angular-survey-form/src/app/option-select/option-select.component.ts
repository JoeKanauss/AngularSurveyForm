import { Component, OnInit } from '@angular/core';
import { OPTION_SELECT } from '../optionSelect';
import { option } from '../option';
@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {
	
  Option: option = [ {value: 1, name:'1. Best time'},
					 {value: 2, name:'2. Next Best time'},
					 {value: 3, name:'3. Not as good'},
					 {value: 4, name:'4. Worst time'} ];
  
	removeOption(){
		var optionToRemove = document.getElementById("dropdown").value;
		
		alert(optionToRemove);
	}
	
  constructor() { }

  ngOnInit() {
  }

}
