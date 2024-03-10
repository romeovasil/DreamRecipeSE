import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {NgForOf} from "@angular/common";
import {SharedModule} from "primeng/api";
import {RecipeDTO} from "../model/recipe-dto";


@Component({
  selector: 'app-recipe-card',
  standalone: true,
    imports: [
        ButtonModule,
        CardModule,
        NgForOf,
        SharedModule
    ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
    @Input() recipeDto: RecipeDTO | null = null;

}
