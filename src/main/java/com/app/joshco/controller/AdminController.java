package com.app.joshco.controller;

import com.app.joshco.model.Admin;
import com.app.joshco.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<String> create(@RequestBody Admin admin) {
        return adminService.create(admin);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Admin admin) {
        return adminService.update(id, admin);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return adminService.delete(id);
    }

    @GetMapping(path = "/read")
    public List<Admin> readAll() {
        return adminService.getAll();
    }
}
