import { Component, Input } from '@angular/core';
import { Cursos } from '../models/cursos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent {
    @Input() paginaAtual:string;
    @Input() origemAtual:string;
    @Input() longText:string;
    @Input() curso:Cursos;
   

    constructor(private router:Router, private activatedRoute:ActivatedRoute ){}

    ngOnInit(){

    }
    anterior(){
      this.paginaAtual = `${+this.paginaAtual - 1}` ;
      
      this.router.navigate([this.curso.nome.toLowerCase(),this.paginaAtual],{relativeTo:this.activatedRoute.parent, queryParamsHandling: "preserve"})
    }
    proxima(){
      //console.log('activatedRoute: ', this.activatedRoute.parent)
      this.paginaAtual = `${+this.paginaAtual + 1}`;

      this.router.navigate(
        [ 
          this.curso.nome.toLowerCase(),
          this.paginaAtual
        ],
        { 
          relativeTo:this.activatedRoute.parent,
          queryParamsHandling: "preserve"
        }
      );

      
    }
}
