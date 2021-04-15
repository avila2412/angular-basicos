import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  borrado:string="";
heroes:string[]=["Spiderman","Ironman","Hulk","Escanor","Thor"];
borrarHeroe () {
  console.log("Borrando")
  this.borrado=this.heroes.pop()||"";
}
}

