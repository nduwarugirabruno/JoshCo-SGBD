package com.app.joshco.repository;

import com.app.joshco.model.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnseignantRepository extends JpaRepository<Enseignant, Long> {

    @Query("select e from Enseignant e where e.names like %?1%")
    List<Enseignant> findByNames(String names);

    List<Enseignant> findByAge(Integer age);
}
