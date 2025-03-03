import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioService } from '../../portifolio_services/portifolio.service';

@Component({
  selector: 'app-swipper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swipper.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwipperComponent implements OnInit {
  @Input() title: string = '';
  @Input() id: string = '';
  certificacoesProg: string[] = [];
  certificacoesAdv: string[] = [];

  private readonly LOCATION = 'assets/certifications/';

  constructor(private portifolioService: PortifolioService) {}

  ngOnInit(): void {
    this.loadCertifications();
  }

  private loadCertifications(): void {
    this.portifolioService.getCertificationsProg().subscribe(dados => {
      this.certificacoesProg = dados.certificados.map((cert: { nome: string }) =>
        `${this.LOCATION}${encodeURIComponent(cert.nome)}`
      );
    });

    this.portifolioService.getCertificationsAdv().subscribe(dados => {
      this.certificacoesAdv = dados.certificados.map((cert: { nome: string }) =>
        `${this.LOCATION}${encodeURIComponent(cert.nome)}`
      );
    });
  }

  verifyScreenSize():boolean{
    return window.matchMedia("(min-width: 768px)").matches;
  }
}
