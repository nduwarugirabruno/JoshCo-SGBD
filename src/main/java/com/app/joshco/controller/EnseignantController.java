package com.app.joshco.controller;

import com.app.joshco.model.Contrat;
import com.app.joshco.model.Enseignant;
import com.app.joshco.service.EnseignantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/enseignant")
public class EnseignantController {

    private final EnseignantService enseignantService;

    @Autowired
    public EnseignantController(EnseignantService enseignantService) {
        this.enseignantService = enseignantService;
    }
    
    @PostMapping(path = "/create")
    public ResponseEntity<String> create(@RequestBody Enseignant enseignant) {
        return enseignantService.create(enseignant);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Enseignant enseignant) {
        return enseignantService.update(id, enseignant);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return enseignantService.delete(id);
    }

    @GetMapping(path = "/read/{id}")
    public Enseignant readById(@PathVariable Long id) {
        return enseignantService.getById(id);
    }

    @GetMapping(path = "/read")
    public List<Enseignant> readAll() {
        return enseignantService.getAll();
    }

    @GetMapping(path = "/read/age/{age}")
    public List<Enseignant> readAllByAge(@PathVariable Integer age) {
        return enseignantService.getAllByAge(age);
    }

    @GetMapping(path = "/read/names/{names}")
    public List<Enseignant> readAllByNames(@PathVariable String names) {
        return enseignantService.getAllByNames(names);
    }

    @GetMapping(path = "/read/contract/{id}")
    public List<Contrat> readContract(@PathVariable Long id) {
        return enseignantService.getAllContrat(id);
    }
}
