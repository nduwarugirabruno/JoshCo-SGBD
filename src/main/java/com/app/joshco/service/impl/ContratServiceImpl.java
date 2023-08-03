package com.app.joshco.service.impl;

import com.app.joshco.model.Contrat;
import com.app.joshco.repository.ContratRepository;
import com.app.joshco.service.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContratServiceImpl implements ContratService {

    private final ContratRepository contratRepository;

    @Autowired
    public ContratServiceImpl(ContratRepository contratRepository) {
        this.contratRepository = contratRepository;
    }

    /**
     * @param contrat
     * @return
     */
    @Override
    public ResponseEntity<String> create(Contrat contrat) {
        return null;
    }

    /**
     * @param id
     * @param contrat
     * @return
     */
    @Override
    public ResponseEntity<String> update(Long id, Contrat contrat) {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public ResponseEntity<String> delete(Long id) {
        return null;
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Contrat getById(Long id) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Contrat> getAll() {
        return null;
    }

    /**
     * @param noms
     * @return
     */
    @Override
    public List<Contrat> getAllByNoms(String noms) {
        return null;
    }

    /**
     * @param quartier
     * @return
     */
    @Override
    public List<Contrat> getAllByQuartier(String quartier) {
        return null;
    }
}
