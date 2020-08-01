import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Objeto para los valores del formulario */

formData = {
name: null,
email: null,
description: null,
province: null
};

  /* Objeto para los valores del formulario */

  /* Arreglo para el listado de provincias */
provinceList = [];


  /* Arreglo para el listado de provincias */
  constructor(private router: Router) { }

  ngOnInit(): void {

    /* Cargando datos al arreglo */
this.provinceList = ["Azua",
"Bahoruco",
"Barahona",
"Dajabón",
"Distrito Nacional",
"Duarte",
"Elías Piña",
"El Seibo" ,
"Espaillat",
"Hato Mayor",
"Hermanas Mirabal",
"Independencia",
"La Altagracia",
"La Romana",
"La Vega",
"María Trinidad Sanchez",
"Monseñor Nouel",
"Monte Cristi",
"Monte Plata",
"Pedernales",
"Peravia",
"Puerto Plata",
"Samaná",
"Sánchez Ramírez",
"San Cristóbal",
"San José de Ocoa",
"San Juan",
"San Pedro de Macorís",
"Santiago",
"Santiago Rodríguez",
"Santo Domingo Este",
"Valverde"];
 /* Cargando datos al arreglo */
  }
/* Funcion para crear un registro */

// tslint:disable-next-line:typedef
testRequest(formData) {
  /* Extrayendo datos del formulario */
const name = this.formData.name;
const email = this.formData.email;
const description = this.formData.description;
const province = this.formData.province;

/* Extrayendo datos del formulario */
const requestDate = Date.now();
/* Extrayendo fecha y hora de la solicitud */

/* Extrayendo fecha y hora de la solicitud */

/* Objeto para enviar */
const dataToSend = {
  name: name,
  email: email,
  description: description,
  province: province,
  date: requestDate
};
/* Objeto para enviar */
console.log(dataToSend);


/* Navegando a la pagina de los resultados */
this.router.navigate(["/result"] , {queryParams: dataToSend});
/* Navegando a la pagina de los resultados */
}
/* Funcion para crear un registro */
}
