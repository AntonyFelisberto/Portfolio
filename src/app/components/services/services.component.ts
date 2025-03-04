import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  @ViewChildren('modalView') modals!: QueryList<ElementRef>;
  @ViewChildren('modalButton') modalButtons!: QueryList<ElementRef>;
  @ViewChildren('modalClose') modalCloses!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.modalButtons.forEach((button, index) => {
      button.nativeElement.addEventListener('click', () => this.openModal(index));
    });

    this.modalCloses.forEach((close, index) => {
      close.nativeElement.addEventListener('click', () => this.closeModal(index));
    });
  }

  openModal(index: number) {
    const modal = this.modals.toArray()[index];
    if (modal) {
      modal.nativeElement.style.opacity = '1';
      modal.nativeElement.style.visibility = 'visible';
    }
  }

  closeModal(index: number) {
    const modal = this.modals.toArray()[index];
    if (modal) {
      modal.nativeElement.style.opacity = '0';
      modal.nativeElement.style.visibility = 'hidden';
    }
  }
}
