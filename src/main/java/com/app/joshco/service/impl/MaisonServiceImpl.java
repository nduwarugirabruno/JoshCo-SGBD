package com.app.joshco.service.impl;

import com.app.joshco.model.Contrat;
import com.app.joshco.model.Maison;
import com.app.joshco.repository.ContratRepository;
import com.app.joshco.repository.MaisonRepository;
import com.app.joshco.service.MaisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MaisonServiceImpl implements MaisonService {

    private final MaisonRepository maisonRepository;
    private final ContratRepository contratRepository;

    @Autowired
    public MaisonServiceImpl(MaisonRepository maisonRepository, ContratRepository contratRepository) {
        this.maisonRepository = maisonRepository;
        this.contratRepository = contratRepository;
    }

    /**
     * @param maison the characteristic of the house
     * @return the state of the creation on the house entity
     */
    @Override
    public ResponseEntity<String> create(Maison maison) {
        try {
            if (maison.getNoms() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un nom",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (maison.getQuartier() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un quartier",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (maison.getTel() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un numéro de téléphone",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            maison.setState(true);
            Maison maison1 = maisonRepository.save(maison);
            return new ResponseEntity<>(
                    "Vous avez enregistré une nouvelle maison avec succès " + maison1,
                    HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the house to update
     * @param maison the new characteristic of the house
     * @return the state of the update on the house entity
     */
    @Override
    public ResponseEntity<String> update(Long id, Maison maison) {
        try {
            Optional<Maison> use = maisonRepository.findById(id);
            if (use.isEmpty())
                return new ResponseEntity<>(
                        "Maison not found",
                        HttpStatus.OK);
            if (maison.getNoms() != null && !use.get().getNoms().equals(maison.getNoms()))
                use.get().setNoms(maison.getNoms());

            if (maison.getTel() != null && !use.get().getTel().equals(maison.getTel()))
                use.get().setTel(maison.getTel());

            if (maison.getQuartier() != null && !use.get().getQuartier().equals(maison.getQuartier()))
                use.get().setQuartier(maison.getQuartier());

            Maison maison1 = maisonRepository.saveAndFlush(use.get());
            return new ResponseEntity<>(
                    "Modifications reussies: "+maison1 ,
                    HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the house to delete
     * @return the state of the deleted on the house entity
     */
    @Override
    public ResponseEntity<String> delete(Long id) {
        Optional<Maison> use = maisonRepository.findById(id);
        if (use.isEmpty())
            return new ResponseEntity<>(
                    "Maison not found...",
                    HttpStatus.OK);

        use.get().setState(false);
        Maison m1 =  maisonRepository.saveAndFlush(use.get());
        return new ResponseEntity<>(
                "Suppression reussie..."+ m1,
                HttpStatus.OK);
    }

    /**
     * @param id the identifiant of the house to get
     * @return the house that corresponding to the id
     */
    @Override
    public Maison getById(Long id) {
        if (maisonRepository.findById(id).isPresent())
            return maisonRepository.findById(id).get();
        else return null;
    }

    /**
     * @return the List of all the active home tutoring
     */
    @Override
    public List<Maison> getAll() {
        List<Maison> list = new ArrayList<>();
        maisonRepository.findAll().forEach(maison -> {
            if (maison.getState())
                list.add(maison);
        });
        return list;
    }

    /**
     * @param noms the whole or a part of the parent's name
     * @return the list of house that parent's names matches
     */
    @Override
    public List<Maison> getAllByNoms(String noms) {
        return maisonRepository.findByNoms(noms);
    }

    /**
     * @param quartier the quater of the house
     * @return the list of house that quater matches
     */
    @Override
    public List<Maison> getAllByQuartier(String quartier) {
        return maisonRepository.findByQuartier(quartier);
    }

    /**
     * @return the deactivated house's List
     */
    @Override
    public List<Maison> getAllDeactivated() {
        List<Maison> list = new ArrayList<>();
        maisonRepository.findAll().forEach(maison -> {
            if (!maison.getState())
                list.add(maison);
        });
        return list;
    }

    /**
     * @param id the identifiant of the house to get all contracts
     * @return all the house's contract
     */
    @Override
    public List<Contrat> getAllContract(Long id) {
        List<Contrat> contratList = new ArrayList<>();
        contratRepository.findAll().forEach(contrat -> {
            if (contrat.getMaison().getId() == id)
                contratList.add(contrat);
        });
        return contratList;
    }
}
