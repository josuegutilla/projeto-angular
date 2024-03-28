import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/knowledge/html5.svg',
      alt: 'Icone de conhcimento de html5',
    },
    {
      src: 'assets/knowledge/css3.svg',
      alt: 'Icone de conhcimento de css3',
    },
    {
      src: 'assets/knowledge/angular.svg',
      alt: 'Icone de conhcimento de angular',
    },
    {
      src: 'assets/knowledge/js.svg',
      alt: 'Icone de conhcimento de javascript',
    },
  ])
}
