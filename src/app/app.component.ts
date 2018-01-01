import { Component } from '@angular/core';
import { ColorWord } from './colorword.model'

//here we should open the json file
//var colorList = JSON.parse(json_dict)
//console.log(colorList)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bebacafe';
}
