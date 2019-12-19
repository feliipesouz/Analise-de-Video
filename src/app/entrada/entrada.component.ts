import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/api';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  carro = false;
  moto = false;
  outro = false;
  arquivo: File;

  outroDescricao: string;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {

  }

  async sendVideo(e) {
    e.preventDefault();
    const file = (document.querySelector('#video') as any).files[0];
    const file64 = await this.toBase64(file);
    this.httpClient.post(URL, {
      video: file64,
      carro: this.carro,
      moto: this.moto,
      outro: this.outro,
      tipoOutro: this.outroDescricao
    }).subscribe(res => { console.log(res); });
  }

  toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

}
