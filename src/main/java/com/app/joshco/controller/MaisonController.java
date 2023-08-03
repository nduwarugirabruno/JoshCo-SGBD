package com.app.joshco.controller;

import com.app.joshco.service.MaisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/maison")
public class MaisonController {

    private final MaisonService maisonService;

    @Autowired
    public MaisonController(MaisonService maisonService) {
        this.maisonService = maisonService;
    }
}
