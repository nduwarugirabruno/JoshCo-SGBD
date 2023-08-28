package com.app.joshco.service.impl;

import com.app.joshco.model.Contrat;
import com.app.joshco.repository.ContratRepository;
import com.app.joshco.service.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ContratServiceImpl implements ContratService {

    private final ContratRepository contratRepository;

    @Autowired
    public ContratServiceImpl(ContratRepository contratRepository) {
        this.contratRepository = contratRepository;
    }

    /**
     * @param contrat the characteristic of the contrat
     * @return the state of the creation on the teacher entity
     */
    @Override
    public ResponseEntity<String> create(Contrat contrat) {
        try {
            if (contrat.getDate() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer une date",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (contrat.getMontant() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un montant",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (contrat.getMatiere() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer les matière dispensées",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            
            else if (contrat.getEnseignant() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un enseignant",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (contrat.getMaison() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer une maison de cours",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            
            contrat.setState(true);
            Contrat contrat1 = contratRepository.save(contrat);
            return new ResponseEntity<>(
                    "Vous avez enregistré une nouvelle contrat avec succès " + contrat1,
                    HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the contrat to update
     * @param contrat the new characteristic of the contrat
     * @return the state of the update on the contrat entity
     */
    @Override
    public ResponseEntity<String> update(Long id, Contrat contrat) {
        try {
            Optional<Contrat> use = contratRepository.findById(id);
            if (use.isEmpty())
                return new ResponseEntity<>(
                        "Contrat not found",
                        HttpStatus.OK);

            if (contrat.getDate() != null && !use.get().getDate().equals(contrat.getDate()))
                use.get().setDate(contrat.getDate());

            if (contrat.getMontant() != null && !use.get().getMontant().equals(contrat.getMontant()))
                use.get().setMontant(contrat.getMontant());

            if (contrat.getMatiere() != null && !use.get().getMatiere().equals(contrat.getMatiere()))
                use.get().setMatiere(contrat.getMatiere());

            if (contrat.getEnseignant() != null && !use.get().getEnseignant().equals(contrat.getEnseignant()))
                use.get().setEnseignant(contrat.getEnseignant());

            if (contrat.getMaison() != null && !use.get().getMaison().equals(contrat.getMaison()))
                use.get().setMaison(contrat.getMaison());

            Contrat contrat1 = contratRepository.saveAndFlush(use.get());
            return new ResponseEntity<>(
                    "Modifications reussies: "+ contrat1 ,
                    HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the contrat to delete
     * @return the state of the deleted on the contrat entity
     */
    @Override
    public ResponseEntity<String> delete(Long id) {
        Optional<Contrat> use = contratRepository.findById(id);
        if (use.isEmpty())
            return new ResponseEntity<>(
                    "Contrat not found...",
                    HttpStatus.OK);

        use.get().setState(false);
        Contrat c1 =  contratRepository.saveAndFlush(use.get());
        return new ResponseEntity<>(
                "Suppression reussie..."+ c1,
                HttpStatus.OK);
    }

    /**
     * @param id the identifiant of the contrat to get
     * @return the contrat that corresponding to the id
     */
    @Override
    public Contrat getById(Long id) {
        if (contratRepository.findById(id).isPresent())
            return contratRepository.findById(id).get();
        else return null;
    }

    /**
     * @return the whole List of active Contrat
     */
    @Override
    public List<Contrat> getAll() {
        List<Contrat> list = new ArrayList<>();
        contratRepository.findAll().forEach(contrat -> {
            if (contrat.getState())
                list.add(contrat);
        });
        return list;
    }

    /**
     * @return the deactivated contract's List
     */
    @Override
    public List<Contrat> getAllDeactivated() {
        List<Contrat> list = new ArrayList<>();
        contratRepository.findAll().forEach(contrat -> {
            if (!contrat.getState())
                list.add(contrat);
        });
        return list;
    }
}
