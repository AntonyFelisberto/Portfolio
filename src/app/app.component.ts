import { Component } from '@angular/core';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MainComponent } from "./components/main/main.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, MainComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio_angular';
}
