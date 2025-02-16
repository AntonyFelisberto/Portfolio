import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioService } from '../../portifolio_services/portifolio.service';

@Component({
  selector: 'app-swipper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css']
})
export class SwipperComponent implements OnInit {
  @Input() title: string = '';
  @Input() id = ''
  certificacoesProg: string[] = [];
  certificacoesAdv: string[] = [];

  constructor(private portifolioService: PortifolioService) {}

  async ngOnInit() {
    const LOCATION = "assets/certifications/"
    this.portifolioService.getCertificationsProg().subscribe(dados => {
      dados.certificados.forEach((cert: any) => {
        this.certificacoesProg.push(`${LOCATION}${cert.nome.replace(/ /g, '%20')}`);
      });
    });

    this.portifolioService.getCertificationsAdv().subscribe(dados => {
      dados.certificados.forEach((cert: any) => {
        this.certificacoesAdv.push(`${LOCATION}${cert.nome.replace(/ /g, '%20')}`);
      });
    });
  }
}
