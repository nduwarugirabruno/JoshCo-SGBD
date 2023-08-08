package com.app.joshco.service.impl;

import com.app.joshco.model.Contrat;
import com.app.joshco.model.Enseignant;
import com.app.joshco.repository.ContratRepository;
import com.app.joshco.repository.EnseignantRepository;
import com.app.joshco.service.EnseignantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EnseignantServiceImpl implements EnseignantService {

    private final EnseignantRepository enseignantRepository;
    private final ContratRepository contratRepository;

    @Autowired
    public EnseignantServiceImpl(EnseignantRepository enseignantRepository, ContratRepository contratRepository) {
        this.enseignantRepository = enseignantRepository;
        this.contratRepository = contratRepository;
    }

    /**
     * @param enseignant the characteristic of the teacher
     * @return the state of the creation on the teacher entity
     */
    @Override
    public ResponseEntity<String> create(Enseignant enseignant) {
        try {
            if (enseignant.getNames() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un nom",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (enseignant.getAge() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un age",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (enseignant.getTel() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un numéro de téléphone",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (enseignant.getNiveau() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un niveau académique",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (enseignant.getDomicile() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un domicile",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (enseignant.getMatiere() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer les matière dispensées",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            enseignant.setState(true);
            Enseignant enseignant1 = enseignantRepository.save(enseignant);
            return new ResponseEntity<>(
                    "Vous avez enregistré une nouvelle enseignant avec succès " + enseignant1,
                    HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the teacher to update
     * @param enseignant the new characteristic of the teacher
     * @return the state of the update on the teacher entity
     */
    @Override
    public ResponseEntity<String> update(Long id, Enseignant enseignant) {
        try {
            Optional<Enseignant> use = enseignantRepository.findById(id);
            if (use.isEmpty())
                return new ResponseEntity<>(
                        "Enseignant not found",
                        HttpStatus.OK);
            
            if (enseignant.getNames() != null && !use.get().getNames().equals(enseignant.getNames()))
                use.get().setNames(enseignant.getNames());

            if (enseignant.getAge() != null && !use.get().getAge().equals(enseignant.getAge()))
                use.get().setAge(enseignant.getAge());

            if (enseignant.getMatiere() != null && !use.get().getMatiere().equals(enseignant.getMatiere()))
                use.get().setMatiere(enseignant.getMatiere());

            if (enseignant.getTel() != null && !use.get().getTel().equals(enseignant.getTel()))
                use.get().setTel(enseignant.getTel());

            if (enseignant.getDomicile() != null && !use.get().getDomicile().equals(enseignant.getDomicile()))
                use.get().setDomicile(enseignant.getDomicile());

            if (enseignant.getNiveau() != null && !use.get().getNiveau().equals(enseignant.getNiveau()))
                use.get().setNiveau(enseignant.getNiveau());

            Enseignant enseignant1 = enseignantRepository.saveAndFlush(use.get());
            return new ResponseEntity<>(
                    "Modifications reussies: "+ enseignant1 ,
                    HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the teacher to delete
     * @return the state of the deleted on the teacher entity
     */
    @Override
    public ResponseEntity<String> delete(Long id) {
        Optional<Enseignant> use = enseignantRepository.findById(id);
        if (use.isEmpty())
            return new ResponseEntity<>(
                    "Enseignant not found...",
                    HttpStatus.OK);

        use.get().setState(false);
        Enseignant e1 =  enseignantRepository.saveAndFlush(use.get());
        return new ResponseEntity<>(
                "Suppression reussie..."+ e1,
                HttpStatus.OK);
    }

    /**
     * @param id the identifiant of the teacher to get
     * @return the teacher that corresponding to the id
     */
    @Override
    public Enseignant getById(Long id) {
        if (enseignantRepository.findById(id).isPresent())
            return enseignantRepository.findById(id).get();
        else return null;
    }

    /**
     * @return the Whole List of active teachers
     */
    @Override
    public List<Enseignant> getAll() {
        List<Enseignant> list = new ArrayList<>();
        enseignantRepository.findAll().forEach(enseignant -> {
            if (enseignant.getState())
                list.add(enseignant);
        });
        return list;
    }

    /**
     * @param age the age of the teacher to get
     * @return the teacher that corresponding to the age
     */
    @Override
    public List<Enseignant> getAllByAge(Integer age) {
        return enseignantRepository.findByAge(age);
    }

    /**
     * @param name the name of the teacher to get
     * @return the teacher that corresponding to the name
     */
    @Override
    public List<Enseignant> getAllByNames(String name) {
        return enseignantRepository.findByNames(name);
    }

    /**
     * @param id the identifiant of the teacher to get all contracts
     * @return all the teacher's contract
     */
    @Override
    public List<Contrat> getAllContrat(Long id) {
        List<Contrat> contratList = new ArrayList<>();
        contratRepository.findAll().forEach(contrat -> {
            if (contrat.getEnseignant().getId() == id)
                contratList.add(contrat);
        });
        return contratList;
    }
}
