import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  showMenu: boolean = false;
  darkTheme: string = 'dark-theme';
  iconTheme: string = 'uil-sun';

  menuItems = [
    { href: '#home', label: 'Inicio', icon: 'uil uil-estate' },
    { href: '#about', label: 'Sobre', icon: 'uil uil-user' },
    { href: '#skills', label: 'Habilidades', icon: 'uil uil-file-alt' },
    { href: '#services', label: 'Serviços', icon: 'uil uil-briefcase-alt' },
    { href: '#portifolio', label: 'Portifolio', icon: 'uil uil-scenery' },
    { href: '#contact', label: 'Contatar', icon: 'uil uil-message' }
  ];

  ngOnInit(): void {
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    if (selectedTheme) {
      document.body.classList.toggle(this.darkTheme, selectedTheme === 'dark');
    }

    if (selectedIcon) {
      const themeButton = document.getElementById('theme-button');
      if (themeButton) {
        themeButton.classList.toggle(this.iconTheme, selectedIcon === 'uil-moon');
      }
    }
  }

  toggleTheme(): void {
    document.body.classList.toggle(this.darkTheme);
    const themeButton = document.getElementById('theme-button');
    if (themeButton) {
      themeButton.classList.toggle(this.iconTheme);
    }

    const currentTheme = document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
    const currentIcon = themeButton?.classList.contains(this.iconTheme) ? 'uil-moon' : 'uil-sun';

    localStorage.setItem('selected-theme', currentTheme);
    localStorage.setItem('selected-icon', currentIcon);
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  closeMenu(): void {
    this.showMenu = false;
  }
}
