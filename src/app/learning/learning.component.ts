import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
