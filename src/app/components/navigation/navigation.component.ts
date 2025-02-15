import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  showMenu: boolean = false;

  menuItems = [
    { href: '#home', label: 'Inicio', icon: 'uil uil-estate' },
    { href: '#about', label: 'Sobre', icon: 'uil uil-user' },
    { href: '#skills', label: 'Habilidades', icon: 'uil uil-file-alt' },
    { href: '#services', label: 'Serviços', icon: 'uil uil-briefcase-alt' },
    { href: '#portifolio', label: 'Portifolio', icon: 'uil uil-scenery' },
    { href: '#contact', label: 'Contatar', icon: 'uil uil-message' }
  ];

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  closeMenu(): void {
    this.showMenu = false;
  }
}
