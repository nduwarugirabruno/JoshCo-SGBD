package com.app.joshco.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity(name = "Enseignant")
@Table(name = "Enseignant")
public class Enseignant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, name = "names", length = 100)
	private String names;
	@Column(nullable = false, name = "age", length = 7)
	private Integer age;
	@Column(nullable = false, name = "tel", length = 15)
	private Long tel;
	@Column(nullable = false, name = "domicile", length = 50)
	private String domicile;
	@Column(nullable = false, name = "niveau", length = 50)
	private String niveau;
	@ElementCollection
	@CollectionTable
	@Column(nullable = false, name = "matiere")
	private List<String> matiere;

	public Enseignant() {
		super();
	}

	public Enseignant(String names, Integer age, Long tel, String domicile, String niveau, List<String> matiere) {
		this.names = names;
		this.age = age;
		this.tel = tel;
		this.domicile = domicile;
		this.niveau = niveau;
		this.matiere = matiere;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNames() {
		return names;
	}

	public void setNames(String names) {
		this.names = names;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Long getTel() {
		return tel;
	}

	public void setTel(Long tel) {
		this.tel = tel;
	}

	public String getDomicile() {
		return domicile;
	}

	public void setDomicile(String domicile) {
		this.domicile = domicile;
	}

	public String getNiveau() {
		return niveau;
	}

	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}

	public List<String> getMatiere() {
		return matiere;
	}

	public void setMatiere(List<String> matiere) {
		this.matiere = matiere;
	}

	@Override
	public String toString() {
		return "Enseignant{" +
				"id=" + id +
				", names='" + names + '\'' +
				", age=" + age +
				", tel=" + tel +
				", domicile='" + domicile + '\'' +
				", niveau='" + niveau + '\'' +
				", matiere=" + matiere +
				'}';
	}
}
