import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
@Input() imagen :string;
directImg : string = "";
@Input() titulo:string; 
contenido1:string = "";
carTitle:string="";
cardSubTitle:string="";
 
  constructor() { }

  ngOnInit() {
    // this.CambiarImagen()
    this.CambiarCard();
  }

  // CambiarImagen(){
  //   if(this.imagen){
  //     this.directImg += "none.jpg";
  //   }else{    
  //     this.directImg += this.imagen;
  //   }
  // }
  CambiarCard(){
    switch(this.titulo){
      case "Madison":
        this.directImg="../../../assets/Img/madison.jpg";
      this.contenido1 = "A partir de 2021, Madison es la ciudad de más rápido crecimiento en Wisconsin.La economía de Madison presenta un sector tecnológico grande y en crecimiento, y el área de Madison alberga la sede de Epic Systems , American Family Insurance , Exact Sciences , Promega , American Girl , Sub-Zero , Lands' End , Spectrum Brands , una la oficina regional de Google y el University Research Park,así como muchas nuevas empresas de biotecnología y sistemas de salud. madison es populardestino de visitantes , con el turismo generando más de $ 1 mil millones para la economía del condado de Dane en 2018.Una población en auge combinada con la falta de vivienda y la gentrificación en curso de muchos vecindarios de Madison ha contribuido al aumento de los costos de vivienda, con un aumento del 23% en el alquiler medio entre 2014 y 2019.";
      this.carTitle="Madison ";
      this.cardSubTitle="Capital del estado estadounidense de wisconsin";
      break
      case "Deportes":
        this.directImg="../../../assets/Img/champions.jpg";
        this.contenido1 = "En 2011, el Bayern se paseó por Villarreal en la fase de grupos. Diez temporadas después tendrá que esforzarse mucho para vencer al cuadro castellonense, sin haber considerado que visitaba a un campeón de Europa. De la Europa League, pero un campeón que no se asustará en el Allianz tras haber desfilado por Manchester y Turín entre otros magnos escenarios y haber vencido en tres de sus cuatro salidas en esta campaña."
        this.carTitle="El Bayern sale vivo ante un gran Villarreal";
        this.cardSubTitle="El gol de Danjuma fue un escaso premio para los méritos castellonenses y el 1-0 garantiza una noche de sufrimiento en Múnich.";
      break
      case "Musica":
        this.directImg="../../../assets/Img/Musica.png";
        this.contenido1 = "Es muy normal que los artistas se inspiren en temáticas como el amor para hacer sus canciones. Sin embargo, el sexo también es un tema del que suelen hablar. Aunque en los últimos años se ha hablado más de ello en las canciones de reguetón, todos los géneros han tocado el tema."
        this.carTitle="Canciones, no de reguetón, que hablan de abuso, sexo y lujuria";
        this.cardSubTitle="'Burbujas de amor', 'La camisa negra' y 'La macarena' son algunas de estas composiciones.";  
      break
        }
    //   this.directImg="none.jpg";
    //   this.contenido1="Error";
    }
  }


