package com.app.joshco.service;

import com.app.joshco.model.Contrat;
import com.app.joshco.model.Maison;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MaisonService {
    ResponseEntity<String> create(Maison maison);
    ResponseEntity<String> update(Long id, Maison maison);
    ResponseEntity<String> delete(Long id);
    Maison getById(Long id);
    List<Maison> getAll();
    List<Maison> getAllByNoms(String noms);
    List<Maison> getAllByQuartier(String quartier);
    List<Contrat> getAllContract(Long id);
}
