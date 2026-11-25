import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {

  // INTERPOLAÇÂO DE VARIAVEIS
  heroiDestaque: string = 'Homem Aranha';
  universo: string = 'Marvel';

  // Property Binding: [propriedade]="expressao" 
  estaDesabilitado: boolean = false;
  dicaTooltip: string = 'Clique para alterar o status do herói';


  // Event Binding: (evento)="metodo()" (HTML ➔ Classe)
  ativo: boolean = true;

  alternarStatus(): void {
    this.ativo = !this.ativo;
  }

  equipe: string[] = ['Homem de Ferro', 'Batman', 'Tempestade', 'Asa Noturna', 'Mulher Maravilha'];

}