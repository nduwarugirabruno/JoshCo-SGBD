package com.app.joshco.service;

import com.app.joshco.model.Admin;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AdminService {
    ResponseEntity<String> create(Admin admin);
    ResponseEntity<String> update(Long id, Admin admin);
    ResponseEntity<String> delete(Long id);
    List<Admin> getAll();
}
