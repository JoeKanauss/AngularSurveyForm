import { Component, OnInit } from '@angular/core';
import { OptionSelectComponent } from '../option-select-component.ts';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	selectOptions = Option;

	removeOption(){
		var optionToRemove = document.getElementById("optionDropdown").value;
		
		alert(optionToRemove);
	}
  constructor() { }

  ngOnInit() {
  }

}
