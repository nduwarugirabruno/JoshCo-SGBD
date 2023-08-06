package com.app.joshco.controller;

import com.app.joshco.model.Contrat;
import com.app.joshco.service.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/contrat")
public class ContratController {

    private final ContratService contratService;

    @Autowired
    public ContratController(ContratService contratService) {
        this.contratService = contratService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<String> create(@RequestBody Contrat contrat) {
        return contratService.create(contrat);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Contrat contrat) {
        return contratService.update(id, contrat);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return contratService.delete(id);
    }

    @GetMapping(path = "/read/{id}")
    public Contrat readById(@PathVariable Long id) {
        return contratService.getById(id);
    }

    @GetMapping(path = "/read")
    public List<Contrat> readAll() {
        return contratService.getAll();
    }
}
