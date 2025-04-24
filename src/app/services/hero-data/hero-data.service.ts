import { Injectable } from '@angular/core';
import { HeroContent } from '../../interfaces/hero-content/hero-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {

  dummyData: HeroContent[] = [
    {
      headline: 'Empower Your Ideas',
      subheadline: 'Create, collaborate, and bring your visions to life effortlessly.',
      image: 'https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      headline: 'Design the Future',
      subheadline: 'Turn bold dreams into real products with our platform.',
      image: 'https://images.unsplash.com/photo-1544013679-25117c6fab34?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      headline: 'Inspire & Build',
      subheadline: 'Tools that spark creativity and deliver results.',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
  constructor() { }

  getDummyData(index:number):Observable<HeroContent> {
    return of(this.dummyData[index]);
  }

  getDummyDataLength():Observable<number> {
    return of(this.dummyData.length);
  }

  updateDummyData(index: number, key: keyof HeroContent, value: string):Observable<true> {
    this.dummyData[index][key] = value;
    return of(true);
  }
}
