package com.app.joshco.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity(name = "Contrat")
@Table(name = "Contrat")
public class Contrat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "date")
    private Date date;

    @Column(nullable = false, name = "montant", length = 15)
    private Long montant;

    @ElementCollection
    @CollectionTable
    @Column(nullable = false, name = "matiere")
    private List<String> matiere;

    @Column(nullable = false, name = "state")
    private Boolean state;

    @ManyToOne(cascade = CascadeType.ALL)
    private Enseignant enseignant;

    @ManyToOne(cascade = CascadeType.ALL)
    private Maison maison;

    public Contrat() {
        super();
    }

    public Contrat(Date date, Long montant, List<String> matiere, Enseignant enseignant, Maison maison) {
        this.date = date;
        this.montant = montant;
        this.matiere = matiere;
        this.enseignant = enseignant;
        this.maison = maison;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setMontant(Long montant) {
        this.montant = montant;
    }

    public void setMatiere(List<String> matiere) {
        this.matiere = matiere;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public void setEnseignant(Enseignant enseignant) {
        this.enseignant = enseignant;
    }

    public void setMaison(Maison maison) {
        this.maison = maison;
    }

    @Override
    public String toString() {
        return "Contrat{" +
                "id=" + id +
                ", date=" + date +
                ", montant=" + montant +
                ", matiere=" + matiere +
                ", enseignant=" + enseignant +
                ", maison=" + maison +
                '}';
    }
}
