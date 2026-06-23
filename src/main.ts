import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

interface Episode {
  tag: string;
  title: string;
  duration: string;
  number: string;
}

interface TeamMember {
  name: string;
  photo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
class AppComponent {
  episodes: Episode[] = [
    { tag: 'Polêmica da rodada', title: 'O VAR decidiu de novo?', duration: '38:52', number: 'EP. 45' },
    { tag: 'Mercado da bola', title: 'Quem chega? Quem sai?', duration: '35:21', number: 'EP. 44' },
    { tag: 'Análise completa', title: 'A rodada em debate', duration: '41:07', number: 'EP. 43' },
    { tag: 'Champions League', title: 'Quem leva a orelhuda?', duration: '32:18', number: 'EP. 42' }
  ];

  team: TeamMember[] = [
    { name: 'Rodrigo', photo: 'assets/team/rodrigo.jpeg' },
    { name: 'Daniel', photo: 'assets/team/daniel.jpeg' },
    { name: 'Tadeu', photo: 'assets/team/tadeu.jpeg' }
  ];
}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
