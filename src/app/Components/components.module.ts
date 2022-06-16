import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardSportComponent } from './card-sport/card-sport.component';




@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardSportComponent
  ],
  exports:[
    HeaderComponent,
    CardComponent,
    CardSportComponent   
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
