package com.app.joshco;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;


@SpringBootApplication
public class CrudApplication {
    public static void main(String[] args) {
        SpringApplication.run(CrudApplication.class, args);
    }

    @EventListener({ApplicationReadyEvent.class})
    void applicationReadyEvent() {
        System.out.println("Application started... launching browser now");
        browse("http://localhost:8080/");
    }

    public static void browse(String url) {
        if (Desktop.isDesktopSupported()) {
            Desktop desktop = Desktop.getDesktop();
            try {
                desktop.browse(new URI(url));
            } catch (IOException | URISyntaxException e) {
                e.printStackTrace();
            }
        } else {
            Runtime runtime = Runtime.getRuntime();
            try {
                String os = System.getProperty("os.name");
                System.out.println("Système d'exploitation : " + os);
                if (os.toLowerCase().startsWith("linux"))
                    runtime.exec("xdg-open " + url);

                else if (os.toLowerCase().startsWith("windows"))
                    runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);

                else System.out.println("Another Operating System...");

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
