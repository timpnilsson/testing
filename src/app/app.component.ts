import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public slides = [
  { src: "assets/images/carousel/carousel-slope.jpg" },
  { src: "assets/images/carousel/carousel-spring.jpeg"}
];
  knownTranslations = ['en','sv'];
  constructor(translate: TranslateService) {
    if(navigator.languages != undefined){
      translate.use(this.stripCountry(navigator.languages[0]));
    }else{
      translate.use('en');

    }
}
private stripCountry(langAndCountry: string){
if(langAndCountry){
  var splitted = langAndCountry.split("-",1);
  return splitted && splitted[0] && this.knownTranslations.includes(splitted[0]) ? splitted[0] : 'en';
} 
return 'en';
}
  title = 'tegefjallare-year2020';
}

