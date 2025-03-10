package com.calculator.controller;

import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:8000/")
@RestController
@RequestMapping("/api/calculator")
public class CalculatorController {

    @GetMapping("/add")
    public double add(@RequestParam double a, @RequestParam double b) {
        return a + b;
    }

    @GetMapping("/sub")
    public double sub(@RequestParam double a, @RequestParam double b) {
        return a - b;
    }
}
