package com.app.joshco.configuration;

import com.app.joshco.model.Admin;
import com.app.joshco.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader implements CommandLineRunner {

    final
    AdminService adminService;

    @Autowired
    public DataLoader(AdminService adminService) {
        this.adminService = adminService;
    }


    /**
     * Callback used to run the bean.
     *
     * @param args incoming main method arguments
     * @throws Exception on error
     */
    @Override
    public void run(String... args) throws Exception {

        try  {

            // Load data in variables
            Admin admin = new Admin("admin", "admin");

            // Show Datas in console
            // System.out.println(admin);

            // Load datas in DataBase
            if (adminService.getAll().isEmpty())
                adminService.create(admin);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
