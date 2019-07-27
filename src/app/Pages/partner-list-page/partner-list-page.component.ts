import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-list-page',
  templateUrl: './partner-list-page.component.html',
  styleUrls: ['./partner-list-page.component.css']
})
export class PartnerListPageComponent implements OnInit {

  ListPartner = [
    {he: 'alberto', she: 'Sofia'},
    {he: 'Jose', she: 'Maria'},
    {he: 'braulio', she: 'leticia'},
    {he: 'Andres', she: 'Laura'}
  ];
  constructor() {
    /*this.OrderPartner(this.ListPartner);*/
  }

  ngOnInit() {
  }

  OrderPartner(arreglo) {
    //Modificar arreglo
    /*console.log("Entra => "+JSON.stringify(arreglo));
    arreglo = arreglo.sort((a,b)=>a<b);
    console.log("sale -=> "+JSON.stringify(arreglo));*/
  }
}