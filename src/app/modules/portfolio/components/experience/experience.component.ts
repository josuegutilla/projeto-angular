import { Component, signal } from '@angular/core';

// Interface
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      summary: { strong: 'Front-end Developer', p: 'Vidafullstack | Remote | Jan 2024 - Present' },
      text: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea harum cumque alias libero porro molestias cupiditate nobis cum recusandae, nemo quos labore ab repudiandae in totam, quam earum esse. Ullam.</p>',
    },
    {
      summary: { strong: 'Front-end Developer', p: 'Vidafullstack | Remote | Jan 2024 - Present' },
      text: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea harum cumque alias libero porro molestias cupiditate nobis cum recusandae, nemo quos labore ab repudiandae in totam, quam earum esse. Ullam.</p>',
    },
    {
      summary: { strong: 'Front-end Developer', p: 'Vidafullstack | Remote | Jan 2024 - Present' },
      text: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea harum cumque alias libero porro molestias cupiditate nobis cum recusandae, nemo quos labore ab repudiandae in totam, quam earum esse. Ullam.</p>',
    },
  ])
}
