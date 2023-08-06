package com.app.joshco.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "Admin")
@Table(name = "Admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "login", length = 100)
    private String login;

    @Column(nullable = false, name = "password", length = 15)
    private String password;

    @Column(nullable = false, name = "state")
    private Boolean state;

    public Admin() {
        super();
    }

    public Admin(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
