package com.example.demo.Controller;

import com.example.demo.Domain.FormDTO;
import com.example.demo.Domain.RecipeDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("recipe")
public class RecipeController {

    @PostMapping()
    public ResponseEntity<?> getForm(@RequestBody FormDTO formDTO){
        String csvFile =  System.getProperty("user.dir") + "/demo/src/main/resources/idk.csv";
        List<RecipeDTO> recipeDTOS = new ArrayList<>();
        try (CSVReader reader = new CSVReader(new FileReader(csvFile))) {
            List<String[]> rows = reader.readAll();
            String firstQuery = formDTO.getVegan() ? "Veg" : "Non-veg";
            String secondQuery = formDTO.getLowKcal() ? "yes" : "no";
            String thirdQuery = formDTO.getHighProtein() ? "yes" : "no";
            String fourthQuery = formDTO.getLowSodium() ? "yes" : "no";
            String fifthQuery = formDTO.getDuration().toLowerCase();
            String sixthsQuery = formDTO.getLogSugar() ? "yes" : "no";
            int count = 0;
            for(int i=1; i< rows.size(); i++) {
                String[] row = rows.get(i);
                if (row.length > 0 && row[14].equals(firstQuery) && row[15].equals(secondQuery) && row[16].equals(thirdQuery)
                        && row[17].equals(fourthQuery) && row[18].equals(fifthQuery) && row[19].equals(sixthsQuery)) {

                    count++;
                    RecipeDTO recipeDTO = new RecipeDTO();
                    recipeDTO.setName(row[0]);
                    recipeDTO.setDuration(row[1]);
                    recipeDTO.setDescription(row[4]);
                    recipeDTO.setIngredients(row[5]);
                    recipeDTO.setSteps(row[3]);
                    recipeDTOS.add(recipeDTO);

                }
                if(count == 3)
                     break;

            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException | CsvException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(recipeDTOS);
    }
}
