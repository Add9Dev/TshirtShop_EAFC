package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HomeController handles requests to the home page.
 * It provides a simple greeting message for demonstration purposes.
 */
@RestController
public class HomeController {
    @GetMapping("/")
    public String index() {
        return "";
    }

    /**
     * Handles requests to the /api/home endpoint.
     * Returns a simple greeting message.
     * Shouldn't be used in production and shouldn't be here. Its just for testing purposes.
     *
     * @return a greeting message
     */
    @GetMapping("/api/home")
    public String home() {
        return "Hello world";
    }
}
