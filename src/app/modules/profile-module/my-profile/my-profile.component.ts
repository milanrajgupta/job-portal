import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  // // To toggle the dropdown
isActiveCountry = false;
selectedOptionCountry = 'Country';
optionsCountry = ['Afghanistan','Albania','Algeria','Andorra','Angola','Argentina','Armenia','Australia']; // Dropdown options
// Toggle dropdown menu
toggleMenuCountry() {
  this.isActiveCountry = !this.isActiveCountry;
}
// Handle option selection
selectOptionCountry(optionCountry: string) {
  this.selectedOptionCountry = optionCountry;
  this.isActiveCountry = false;
}

// // To toggle the dropdown
isActiveCity = false;
selectedOptionCity = 'City';
optionsCity = ["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego",]; // Dropdown options
// Toggle dropdown menu
toggleMenuCity() {
  this.isActiveCity = !this.isActiveCity;
}
// Handle option selection
selectOptionCity(optionCity: string) {
  this.selectedOptionCity = optionCity;
  this.isActiveCity = false;
}

// // To toggle the dropdown
isActiveState = false;
selectedOptionState = 'State';
optionsState = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",]; // Dropdown options
// Toggle dropdown menu
toggleMenuState() {
  this.isActiveState = !this.isActiveState;
}
// Handle option selection
selectOptionState(optionState: string) {
  this.selectedOptionState = optionState;
  this.isActiveState = false;
}
}
