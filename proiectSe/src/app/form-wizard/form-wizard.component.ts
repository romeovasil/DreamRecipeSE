import {Component, inject, OnInit} from '@angular/core';
import {StepsModule} from "primeng/steps";
import {MenuItem} from "primeng/api";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {QuestionCardComponent} from "../question-card/question-card.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormDTO} from "../model/form-dto";
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {RecipeDTO} from "../model/recipe-dto";

@Component({
  selector: 'app-form-wizard',
  standalone: true,
  imports: [
    StepsModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    ButtonModule,
    QuestionCardComponent,
    NgIf,
    HttpClientModule,
    RecipeCardComponent,
    NgForOf
  ],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.css'
})
export class FormWizardComponent implements OnInit{
  items: MenuItem[] | undefined;
  http = inject(HttpClient);
  activeIndex: number = 0;
  formDto: FormDTO = new FormDTO();
  recipeDTOs : RecipeDTO[] = [];

  constructor() {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Question 1'
      },
      {
        label: 'Question 2'
      },
      {
        label: 'Question 3'
      },
      {
        label: 'Question 4'
      },
      {
        label: 'Question 5'
      },
      {
        label: 'Question 6'
      }
    ];
  }

  nextQuestion() {
    if(this.activeIndex<5){
       this.activeIndex ++ ;
    }
    else {
      this.http.post<RecipeDTO[]>("http://localhost:8080/recipe", this.formDto)
        .subscribe(
          (res: RecipeDTO[]) => {
            this.recipeDTOs = res;
          }
        );
    }


  }

  onAnswer(value: string, key: string) {
    switch (key){
      case 'vegan' :
        this.formDto.vegan = value == 'Yes';
        break;
      case 'sugar' :
        this.formDto.logSugar = value == 'Yes';
        break;
      case 'sodium' :
        this.formDto.lowSodium = value == 'Yes';
        break;
      case 'kcal' :
        this.formDto.lowKcal = value == 'Yes';
        break;
      case 'protein' :
        this.formDto.highProtein = value == 'Yes';
        break;
      case 'duration' :
        this.formDto.duration = value ;
        break;
    }

    this.nextQuestion()
  }

  restart() {
    this.activeIndex=0;
    this.formDto = new FormDTO();
    this.recipeDTOs = [];
  }
}
