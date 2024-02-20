import { Component, Input, SimpleChanges } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  faThumbsUp = faThumbsUp;
  @Input() progress: number = 0;

  formatSubtitle = (percent: number): string => {
    if (percent >= 75) {
      return 'Perfeito';
    } else if (percent >= 50) {
      return 'Metade';
    } else if (percent >= 25) {
      return 'Vamos lá';
    } else if (percent >= 0) {
      return 'Começo';
    } else {
      return 'Não configurado';
    }
  };

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
