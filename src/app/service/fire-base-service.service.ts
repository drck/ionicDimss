import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  getTiket(){
    return this.firestore.collection('tikets').snapshotChanges();
  }
  
  getTiketsFilter(key){

    return  this.firestore.collection("tikets").doc('area/'+key).valueChanges();
  
  }

  getTiketsFilterLine(){
    let query = this.firestore.collection('tikets', ref => ref.where('area', '!=', 'OPERACION')).valueChanges();
    
    return query;
  }

 public  saveTiket(tiket:any,photos:string[]){
 tiket.photos=photos;
    return this.firestore.collection('tikets').add(tiket);
  }

  deleteTiket(){

  }

  //Tarea para subir archivo
   public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }



}
