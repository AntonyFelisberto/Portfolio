import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PortifolioService } from './../../portifolio_services/portifolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsData: any = [];
  yearsOfExperience: number = 0;
  activeSkillIndex: number | string | null = null;

  constructor(
    private portifolioService: PortifolioService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.portifolioService.getSkills().subscribe({
      next: (data) => {
        this.skillsData = data;
        this.changeDetectorRef.markForCheck();
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.yearsOfExperience = new Date().getFullYear() - 2021;
  }

  toggleSkills(index: number | string): void {
    this.activeSkillIndex = this.activeSkillIndex === index ? null : index;
  }
}
