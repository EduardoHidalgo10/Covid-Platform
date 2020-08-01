import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {


/* Objeto para extraer los datos de la URL */
dataExtractor: any;
/* Objeto para extraer los datos de la URL */

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* Extrayendo datos de la URL */
this.activatedRoute.queryParams.subscribe((returnedData) => {
console.log(returnedData);
this.dataExtractor = returnedData;
});
    /* Extrayendo datos de la URL */
  }

}
