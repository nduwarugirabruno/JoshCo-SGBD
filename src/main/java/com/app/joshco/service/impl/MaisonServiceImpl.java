package com.app.joshco.service.impl;

import com.app.joshco.model.Maison;
import com.app.joshco.repository.MaisonRepository;
import com.app.joshco.service.MaisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaisonServiceImpl implements MaisonService {

    private final MaisonRepository maisonRepository;

    @Autowired
    public MaisonServiceImpl(MaisonRepository maisonRepository) {
        this.maisonRepository = maisonRepository;
    }

    /**
     * @param maison the characteristic of the house
     * @return the state of the creation on the house entity
     */
    @Override
    public ResponseEntity<String> create(Maison maison) {
        return null;
    }

    /**
     * @param id the identifiant of the house to update
     * @param maison the new characteristic of the house
     * @return the state of the update on the house entity
     */
    @Override
    public ResponseEntity<String> update(Long id, Maison maison) {
        return null;
    }

    /**
     * @param id the identifiant of the house to delete
     * @return the state of the deleted on the house entity
     */
    @Override
    public ResponseEntity<String> delete(Long id) {
        return null;
    }

    /**
     * @param id the identifiant of the house to get
     * @return the house to corresponding to the id
     */
    @Override
    public Maison getById(Long id) {
        return null;
    }

    /**
     * @return the List of all the home tutoring
     */
    @Override
    public List<Maison> getAll() {
        return null;
    }
}
