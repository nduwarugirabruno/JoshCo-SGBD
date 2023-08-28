package com.app.joshco.service.impl;

import com.app.joshco.model.Admin;
import com.app.joshco.repository.AdminRepository;
import com.app.joshco.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    /**
     * @param admin the characteristic of the admin
     * @return the state of the creation on the teacher entity
     */
    @Override
    public ResponseEntity<String> create(Admin admin) {
        try {
            if (admin.getLogin() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un login",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            else if (admin.getPassword() == null)
                return new ResponseEntity<>(
                        "Vous devez entrer un password",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            admin.setState(true);
            Admin admin1 = adminRepository.save(admin);
            return new ResponseEntity<>(
                    "Vous avez enregistré une nouvelle admin avec succès " + admin1,
                    HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the admin to update
     * @param admin the new characteristic of the admin
     * @return the state of the update on the admin entity
     */
    @Override
    public ResponseEntity<String> update(Long id, Admin admin) {
        try {
            Optional<Admin> use = adminRepository.findById(id);
            if (use.isEmpty())
                return new ResponseEntity<>(
                        "admin not found",
                        HttpStatus.OK);

            if (admin.getLogin() != null && !use.get().getLogin().equals(admin.getLogin()))
                use.get().setLogin(admin.getLogin());

            if (admin.getPassword() != null && !use.get().getPassword().equals(admin.getPassword()))
                use.get().setPassword(admin.getPassword());

            Admin admin1 = adminRepository.saveAndFlush(use.get());
            return new ResponseEntity<>(
                    "Modifications reussies: "+ admin1 ,
                    HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param id the identifiant of the admin to delete
     * @return the state of the deleted on the admin entity
     */
    @Override
    public ResponseEntity<String> delete(Long id) {
        Optional<Admin> use = adminRepository.findById(id);
        if (use.isEmpty())
            return new ResponseEntity<>(
                    "Admin not found...",
                    HttpStatus.OK);

        use.get().setState(false);
        Admin c1 =  adminRepository.saveAndFlush(use.get());
        return new ResponseEntity<>(
                "Suppression reussie..."+ c1,
                HttpStatus.OK);
    }

    /**
     * @return the whole List of active admin
     */
    @Override
    public List<Admin> getAll() {
        List<Admin> list = new ArrayList<>();
        adminRepository.findAll().forEach(admin -> {
            if (admin.getState())
                list.add(admin);
        });
        return list;
    }

    /**
     * @return the deactivated admin's List
     */
    @Override
    public List<Admin> getAllDeactivated() {
        List<Admin> list = new ArrayList<>();
        adminRepository.findAll().forEach(admin -> {
            if (!admin.getState())
                list.add(admin);
        });
        return list;
    }

    /**
     * @return the admin corresponding to the login
     */
    @Override
    public Admin getByLogin(String login) {
        System.out.println(adminRepository.findAll());
        for (Admin a : adminRepository.findAll()) if (a.getLogin().equals(login)) return a;
        return null;
    }
}
