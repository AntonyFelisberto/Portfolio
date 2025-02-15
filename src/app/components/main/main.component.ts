import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, AboutComponent, HomeComponent, SkillsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
