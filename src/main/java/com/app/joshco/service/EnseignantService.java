package com.app.joshco.service;

import com.app.joshco.model.Enseignant;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EnseignantService {

    ResponseEntity<String> create(Enseignant enseignant);
    ResponseEntity<String> update(Long id, Enseignant enseignant);
    ResponseEntity<String> delete(Long id);
    Enseignant getById(Long id);
    List<Enseignant> getAll();
    List<Enseignant> getAllByAge(Integer age);
    List<Enseignant> getAllByNames(String name);

}
