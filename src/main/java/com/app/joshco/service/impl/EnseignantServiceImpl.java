package com.app.joshco.service.impl;

import com.app.joshco.model.Enseignant;
import com.app.joshco.repository.EnseignantRepository;
import com.app.joshco.service.EnseignantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnseignantServiceImpl implements EnseignantService {

    private final EnseignantRepository enseignantRepository;

    @Autowired
    public EnseignantServiceImpl(EnseignantRepository enseignantRepository) {
        this.enseignantRepository = enseignantRepository;
    }

    /**
     * @param enseignant
     * @return
     */
    @Override
    public ResponseEntity<String> create(Enseignant enseignant) {
        return null;
    }

    /**
     * @param id
     * @param enseignant
     * @return
     */
    @Override
    public ResponseEntity<String> update(Long id, Enseignant enseignant) {
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
    public Enseignant getById(Long id) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Enseignant> getAll() {
        return null;
    }

    /**
     * @param age
     * @return
     */
    @Override
    public List<Enseignant> getAllByAge(Integer age) {
        return null;
    }

    /**
     * @param name
     * @return
     */
    @Override
    public List<Enseignant> getAllByNames(String name) {
        return null;
    }
}
