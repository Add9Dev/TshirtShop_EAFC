package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String index() {
        return "";
    }

    @GetMapping("/api/home")
    public String home() {
        return "Hello world";
    }
}
