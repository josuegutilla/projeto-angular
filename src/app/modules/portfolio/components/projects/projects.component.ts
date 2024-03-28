import { Component, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      img: 'assets/projects/spotify.svg',
      alt: 'Logo do spotify',
      title: 'Spotfy',
      width: '100px',
      height: '50px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore veritatis iusto? Consequatur quibusdam sint rerum voluptatum perferendis odio! Accusantium inventore autem tempora nostrum! Debitis tempora repudiandae similique consectetur tempore!</p>',
      links: [{
        buttonName: 'Conheça o site',
        href: 'https://www.spotify.com/br-pt/premium/',
      }],
    }
  ])
}
