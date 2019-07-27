import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-list-page',
  templateUrl: './register-list-page.component.html',
  styleUrls: ['./register-list-page.component.css']
})
export class RegisterListPageComponent implements OnInit {

  ListWomen = ["constance", "Bertha", "alice"];
  ListMen = ["chip", "Biff", "abe"];
  AnswerWomen = ["ababa","babab","abbaa"];
  AnswerMen   = ["bbaab","babaa","ababb"];
  
  constructor() {
    /* Añadir funcion para que las respuestas tambien cambien de orden */
    this.Order(this.ListWomen);
    this.Order(this.ListMen);
  }

  ngOnInit() { }

  Order (cadena) {
    console.log("Entra => "+JSON.stringify(cadena));
    cadena = cadena.sort((a,b) => a>b);
    //cadena = cadena.sort((a,b) => a.localeCompare(b));
    console.log("Sale -=> "+JSON.stringify(cadena));
  }
}