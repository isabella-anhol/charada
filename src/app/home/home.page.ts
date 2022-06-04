import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Charada {
  id: number,
  pergunta: string,
  resposta: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  prg: Charada[] = [];
  result: boolean = true;
  url: string = 'http://lucasreno.kinghost.net/charada';
  calcular = false;

  constructor(
    public http: HttpClient,
  ) {
    this.chamarCharada();
  }

  chamarCharada() {
    this.http.get<Charada[]>(this.url).subscribe(

      (resposta: Charada[]) => {
        this.prg = resposta;
      }
    );
    this.result = true;
  }

  mostrarCharada() {
    this.result = false;
  }
}