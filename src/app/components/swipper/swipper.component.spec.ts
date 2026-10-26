import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PortifolioService } from '../../portifolio_services/portifolio.service';
import { SwipperComponent } from './swipper.component';

describe('SwipperComponent', () => {
  let component: SwipperComponent;
  let fixture: ComponentFixture<SwipperComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SwipperComponent],
      providers: [{
        provide: PortifolioService,
        useValue: {
          getCertificationsProg: () => of({ certificados: [] }),
          getCertificationsAdv: () => of({
            certificados: [
              { nome: 'TI/fiap/linux_fundamentos.png' },
              { nome: 'microsoft_apps/linkedin/alessandro_trovato_responde_sobre_boas_praticas_no_excel.jpg' }
            ]
          })
        }
      }]
    });
    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should preserve directory separators in certification image URLs', () => {
    expect(component.certificacoesAdv).toEqual([
      'assets/certifications/TI/fiap/linux_fundamentos.png',
      'assets/certifications/microsoft_apps/linkedin/alessandro_trovato_responde_sobre_boas_praticas_no_excel.jpg'
    ]);
  });
});
