import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";
import { SkillsComponent } from "../skills/skills.component";
import { SwipperComponent } from '../swipper/swipper.component';
import { ContactComponent } from "../contact/contact.component";
import { ServicesComponent } from "../services/services.component";
import { QualificationComponent } from "../qualification/qualification.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, AboutComponent, HomeComponent, SkillsComponent, SwipperComponent, ContactComponent, ServicesComponent, QualificationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
