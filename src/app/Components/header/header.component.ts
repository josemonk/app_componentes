import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input() titulo:string;

constructor() { }
name :string = "";
  ngOnInit() {
    this.cambiarIcon();
  }

  cambiarIcon(){
    if(this.titulo =="Los mejores lugares"){
      this.name ="aperture-outline";
    }else{
      if(this.titulo =="Deportes"){
        this.name="american-football-outline";
      }else
      {
        if(this.titulo == "Musica"){
          this.name="caret-forward-circle-outline";
        }

      }
    }
  }
}
