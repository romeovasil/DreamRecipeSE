package com.example.demo.Controller;

import com.example.demo.Domain.FormDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("recipe")
public class RecipeController {

    @PostMapping()
    public ResponseEntity<?> getForm(@RequestBody FormDTO formDTO){

        return ResponseEntity.ok().build();
    }
}
