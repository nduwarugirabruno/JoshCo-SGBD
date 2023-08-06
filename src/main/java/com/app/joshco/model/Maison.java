package com.app.joshco.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "Maison")
@Table(name = "Maison")
public class Maison {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "noms", length = 100)
    private String noms;

    @Column(nullable = false, name = "tel", length = 15)
    private Long tel;

    @Column(nullable = false, name = "quartier", length = 50)
    private String quartier;

    @Column(nullable = false, name = "state")
    private Boolean state;

    public Maison() {
        super();
    }

    public Maison(String noms, Long tel, String quartier) {
        this.noms = noms;
        this.tel = tel;
        this.quartier = quartier;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNoms(String noms) {
        this.noms = noms;
    }

    public void setTel(Long tel) {
        this.tel = tel;
    }

    public void setQuartier(String quartier) {
        this.quartier = quartier;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Maison{" +
                "id=" + id +
                ", noms='" + noms + '\'' +
                ", tel=" + tel +
                ", quartier='" + quartier + '\'' +
                '}';
    }
}
