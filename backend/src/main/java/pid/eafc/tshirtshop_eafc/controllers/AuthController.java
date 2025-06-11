package pid.eafc.tshirtshop_eafc.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pid.eafc.tshirtshop_eafc.dto.RegisterRequest;
import pid.eafc.tshirtshop_eafc.services.AuthService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            authService.register(request);
            response.put("status", "success");
            response.put("message", "Utilisateur enregistré avec succès");
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException e) {
            response.put("status", "error");
            response.put("message", "Cet email est déjà utilisé");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } catch (IllegalArgumentException e) {
            response.put("status", "error");
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Une erreur est survenue lors de l'enregistrement");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
} 