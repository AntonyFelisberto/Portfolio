import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  
  age: number = 0;
  yearsOfExperience: number = 0;
  yearsOfExperienceNava: number = 0;
  
  ngOnInit(): void {
    this.age = new Date().getFullYear() - 2002
    this.yearsOfExperience = new Date().getFullYear() - 2021
    this.yearsOfExperienceNava = new Date().getFullYear() - 2026

  }

}
