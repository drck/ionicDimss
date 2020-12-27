import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import catalogo from '../../assets/Linea1.json';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { FireBaseServiceService } from '../service/fire-base-service.service';
import { PhotoService } from '../service/photo.service';
import { stream } from 'xlsx/types';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    public photoService: PhotoService,
    private fireBaseServiceService : FireBaseServiceService
    ) { 
    catalogo.area.forEach(element => {
      console.log( "catalogo" + element.name );
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  myDate: String = new Date().toISOString();
  public motivoEsp;
  public areas = catalogo.area;
  public area: Area = {
    name: '',
    lineas: []
  };
  ngOnInit() {
 }
 async onClickSubmit(forms) {
  if (forms.valid&& this.photoService.photos.length>0) {
    
    let photos:string[]= await this.photoService.saveImages();
    console.log(forms.value)
    this.fireBaseServiceService.saveTiket(forms.value,photos).then(resp=>{
    }).catch(error => {
      alert(error);
    });

    alert("Guardado Correctamente");
    forms.reset();
    this.photoService.photos=[];
    this.photoService.photosRef=[];
  }else  if(this.photoService.photos.length==0){
    alert("Porfavor captura evidencia");
  }

  
}



  public linea: Linea ={
    name:'',
    estaciones: [],
    motivo_directo:[],
    supervicion: [],
    fundamento_legal: [],
    servicio: [],
    ubicacionIntertramo: [],
    consesionaria: [],
    tipo_falla: [],
    sentido: [],
    sancion: [],
    propuesta: [],
    cierre:'',
    apertura:[],
    tipo_incidencia:[],
    salario:[]
  }
  public motivo:Motivo={
    name:'',
    motivo_especifico:[]
  }
  

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

   loadLineas(value) {
    const obj = catalogo.area.find(word => word.name === value);
    if(obj){
    const jsonString = JSON.stringify(obj);
      this.area = JSON.parse(jsonString);
    } else {
       this.area = {
        name: '',
        lineas: []
      };
    }

  }
  loadbasicos(value){
    const obj = this.area.lineas.find(word => word.name === value);
    if(obj){
    const jsonString = JSON.stringify(obj);
      this.linea = JSON.parse(jsonString);
    } else {
      this.linea = {
        name: '',
        motivo_directo: [],
        estaciones: [],
        supervicion: [],
        fundamento_legal: [],
        servicio: [],
        ubicacionIntertramo: [],
        consesionaria: [],
        tipo_falla: [],
        sentido: [],
        sancion: [],
        propuesta: [],
        cierre:'',
        apertura:[],
        tipo_incidencia:[],
        salario:[]
      }
    }
    

  }
  loadMotivos(value){
  this.motivoEsp="";
    const obj = this.linea.motivo_directo.find(word => word.name === value);
    if(obj){
    const jsonString = JSON.stringify(obj);
      this.motivo = JSON.parse(jsonString);
    } else {
      this.motivo = {
        name: '',
        motivo_especifico: []
      }
    }

  }

  motivoEspecifico(value){
  
   
      this.motivoEsp = value;
    

  }
  submitForm(){}



  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}

interface Area {
  name: String;
  lineas: Linea[];
}
interface Motivo {
  name: String;
  motivo_especifico: String[];
}

interface Linea {
  name: String;
  motivo_directo: Motivo[];
  estaciones: String[];
  supervicion: String[];
  fundamento_legal: String[];
  servicio: String[];
  ubicacionIntertramo: String[];
  consesionaria: String[];
  tipo_falla: String[];
  sentido: String[];
  sancion: String[];
  propuesta: String[];
  cierre:String;
  apertura:String[];
  tipo_incidencia:String[];
  salario:String[];
}
