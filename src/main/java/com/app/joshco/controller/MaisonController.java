package com.app.joshco.controller;

import com.app.joshco.model.Contrat;
import com.app.joshco.model.Maison;
import com.app.joshco.service.MaisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/maison")
public class MaisonController {

    private final MaisonService maisonService;

    @Autowired
    public MaisonController(MaisonService maisonService) {
        this.maisonService = maisonService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<String> create(@RequestBody Maison maison) {
        return maisonService.create(maison);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Maison maison) {
        return maisonService.update(id, maison);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return maisonService.delete(id);
    }

    @GetMapping(path = "/read/{id}")
    public Maison readById(@PathVariable Long id) {
        return maisonService.getById(id);
    }

    @GetMapping(path = "/read")
    public List<Maison> readAll() {
        return maisonService.getAll();
    }

    @GetMapping(path = "/read/noms/{noms}")
    public List<Maison> readAllByName(@PathVariable String noms) {
        return maisonService.getAllByNoms(noms);
    }

    @GetMapping(path = "/read/quartier/{quartier}")
    public List<Maison> readAllByQuartier(@PathVariable String quartier) {
        return maisonService.getAllByQuartier(quartier);
    }

    @GetMapping(path = "/read/contract/{id}")
    public List<Contrat> readContract(@PathVariable Long id) {
        return maisonService.getAllContract(id);
    }
}
