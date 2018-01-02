import { Component, OnInit, ChangeDetectorRef } from '@angular/core';;
import { ColorWord } from './colorword.model';
import { wordList } from './wordlist';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'bebacafe';
  colorList: ColorWord[] ;
  ngOnInit(){
    this.colorList =   new Array();
    for(let word of wordList){
      this.colorList.push(new ColorWord(word.word, word.hex_color));
    }
    //to do: sort list in different ways
  }
}
