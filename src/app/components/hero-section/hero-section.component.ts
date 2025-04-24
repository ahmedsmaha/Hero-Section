import { Component, OnInit } from '@angular/core';
import { HeroDataService } from '../../services/hero-data/hero-data.service';
import { HeroContent } from '../../interfaces/hero-content/hero-content';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements OnInit {
  content!:HeroContent;
  randomIndex!:number;
  length!:number;

  constructor(private _heroDataService:HeroDataService) {
  }

  ngOnInit(): void {
    this._heroDataService.getDummyDataLength().subscribe({
      next: (data) => this.length = data,
    }).unsubscribe();
    this.regenerate();
  }

  regenerate() {
    this.randomIndex = Math.floor(Math.random() * this.length);
    this._heroDataService.getDummyData(this.randomIndex).subscribe({
      next: (data) => this.content = data,
    });
  }

  updateText(key: keyof HeroContent, event: Event) {
    const target = event.target as HTMLElement;
    const value = target.innerText;
    this._heroDataService.updateDummyData(this.randomIndex, key, value).subscribe({
      next: (data) => console.log(data),
    });
  }
}