import { Component, Input } from '@angular/core';
import { Quiz } from '../quiz.model';

import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public quiz;

  constructor (public questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe(data => {
      this.quiz = data;
    });
  }
}
