import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { PortifolioService } from '../../portifolio_services/portifolio.service';
import { SwipperComponent } from './swipper.component';

describe('SwipperComponent', () => {
  let component: SwipperComponent;
  let fixture: ComponentFixture<SwipperComponent>;
  let certificationsProg$: Subject<{ certificados: { nome: string }[] }>;
  let certificationsAdv$: Subject<{ certificados: { nome: string }[] }>;

  beforeEach(async () => {
    certificationsProg$ = new Subject<{ certificados: { nome: string }[] }>();
    certificationsAdv$ = new Subject<{ certificados: { nome: string }[] }>();
    TestBed.configureTestingModule({
      imports: [SwipperComponent],
      providers: [{
        provide: PortifolioService,
        useValue: {
          getCertificationsProg: () => certificationsProg$,
          getCertificationsAdv: () => certificationsAdv$
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
    certificationsAdv$.next({
      certificados: [
        { nome: 'TI/fiap/linux_fundamentos.png' },
        { nome: 'microsoft_apps/linkedin/alessandro_trovato_responde_sobre_boas_praticas_no_excel.jpg' }
      ]
    });

    expect(component.certificacoesAdv).toEqual([
      'assets/certifications/TI/fiap/linux_fundamentos.png',
      'assets/certifications/microsoft_apps/linkedin/alessandro_trovato_responde_sobre_boas_praticas_no_excel.jpg'
    ]);
  });

  it('should render programming certification images', async () => {
    component.title = 'PORTIFÓLIO';
    fixture.autoDetectChanges();

    certificationsProg$.next({
      certificados: [
        { nome: 'AI/linkedin/inteligencia_artificial_para_negocios_em_dez_minutos.jpg' },
        { nome: 'development/wordpress/linkedin/wordpress_ask_the_instructor.jpg' }
      ]
    });
    await fixture.whenStable();

    const images = fixture.nativeElement.querySelectorAll('swiper-slide img');
    expect(images.length).toBe(2);
    expect(images[0].getAttribute('src')).toBe(
      'assets/certifications/AI/linkedin/inteligencia_artificial_para_negocios_em_dez_minutos.jpg'
    );
    expect(images[1].getAttribute('src')).toBe(
      'assets/certifications/development/wordpress/linkedin/wordpress_ask_the_instructor.jpg'
    );
  });

  it('should render certification images when certification data arrives asynchronously', async () => {
    component.title = 'CERTIFICAÇÕES EXTRAS';
    fixture.autoDetectChanges();

    certificationsAdv$.next({
      certificados: [{ nome: 'TI/fiap/linux_fundamentos.png' }]
    });
    await fixture.whenStable();

    const images = fixture.nativeElement.querySelectorAll('swiper-slide img');
    expect(images.length).toBe(1);
    expect(images[0].getAttribute('src')).toBe('assets/certifications/TI/fiap/linux_fundamentos.png');
  });
});
