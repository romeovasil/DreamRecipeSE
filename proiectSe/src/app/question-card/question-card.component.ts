import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    NgForOf
  ],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
    @Input() question: string | null = null;
    @Input() options: string[] = [];
    @Input() pictureUrl: string | null = null;
    @Output() answer : EventEmitter<any> = new EventEmitter<any>();

  answerQ($event: string) {
    console.log($event)
    this.answer.emit($event);
  }
}
