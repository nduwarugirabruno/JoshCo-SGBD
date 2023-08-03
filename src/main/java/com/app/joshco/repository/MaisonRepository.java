package com.app.joshco.repository;

import com.app.joshco.model.Maison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaisonRepository extends JpaRepository<Maison, Long> {

    @Query("select m from Maison m where m.noms like %?1%")
    List<Maison> findByNoms(String noms);

    @Query("select m from Maison m where m.quartier like %?1%")
    List<Maison> findByQuartier(String quartier);

}
