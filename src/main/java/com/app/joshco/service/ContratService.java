package com.app.joshco.service;

import com.app.joshco.model.Contrat;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ContratService {
    ResponseEntity<String> create(Contrat contrat);
    ResponseEntity<String> update(Long id, Contrat contrat);
    ResponseEntity<String> delete(Long id);
    Contrat getById(Long id);
    List<Contrat> getAll();
}
