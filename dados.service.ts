import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from './models/cursos';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  
  constructor(private httpClient:HttpClient ) { }
  
  delete(posicaoIndex){
    console.log('delete dadosService')
    // this.cursos.splice(posicaoIndex ,1 );
    return this.httpClient.delete<Cursos[]>(`http://localhost:3000/cursos/${posicaoIndex}`)
  }
  getCursos(){
    return this.httpClient.get<Cursos[]>('http://localhost:3000/cursos')
  }
  addCurso(obj){
    return this.httpClient.post<Cursos[]>('http://localhost:3000/cursos',obj);
  }
  atualizarCurso(obj){
    return this.httpClient.put<Cursos[]>('http://localhost:3000/cursos/4',obj);
  }
  atualizarInformacoes(obj){
    return this.httpClient.patch<Cursos[]>('http://localhost:3000/cursos/4',obj);

  }
}
