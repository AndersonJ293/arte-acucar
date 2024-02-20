import { Component, Input, SimpleChanges, input } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  faThumbsUp = faThumbsUp;
  @Input() progress: number = 0;
  @Input() goal: number = 0;
  @Input() current: number = 0;

  get formatSubtitle(): string {
    if (this.progress >= 75) {
      return 'Perfeito';
    } else if (this.progress >= 50) {
      return 'Metade';
    } else if (this.progress >= 25) {
      return 'Vamos lá';
    } else if (this.progress >= 0) {
      return 'Começo';
    } else {
      return 'Não configurado';
    }
  }

  get StatusColorClass(): string {
    if (this.progress >= 75) {
      return 'green';
    } else if (this.progress >= 50) {
      return 'orange';
    } else if (this.progress >= 25) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['progress']) {
      this.updateProgressBar();
    }
  }

  private updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.setProperty('--progress', this.progress.toString());
  }
}
