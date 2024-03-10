export class RecipeDTO {
  name: string | null = null;
  description: string | null = null;
  ingredients: string[] = [];
  duration: string | null = null;
  steps: string[] = [];
  calories: string | null = null;
  fat: string | null = null;
  sugar: string | null = null;
  protein: string | null = null;
  sodium: string | null = null;
  carbohydrates: string | null = null;
}
