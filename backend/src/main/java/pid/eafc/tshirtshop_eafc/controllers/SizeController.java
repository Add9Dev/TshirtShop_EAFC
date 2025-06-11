package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pid.eafc.tshirtshop_eafc.model.Size;
import pid.eafc.tshirtshop_eafc.repository.SizeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sizes")
public class SizeController {

    @Autowired
    private SizeRepository sizeRepository;

    @GetMapping
    public ResponseEntity<?> getAllSizes() {
        try {
            List<Size> sizes = sizeRepository.findAll();
            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", sizes);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération des tailles");
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSizeById(@PathVariable Long id) {
        try {
            return sizeRepository.findById(id)
                    .map(size -> {
                        Map<String, Object> response = new HashMap<>();
                        response.put("status", "success");
                        response.put("data", size);
                        return ResponseEntity.ok(response);
                    })
                    .orElseGet(() -> {
                        Map<String, Object> response = new HashMap<>();
                        response.put("status", "error");
                        response.put("message", "Taille non trouvée");
                        return ResponseEntity.notFound().build();
                    });
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération de la taille");
            return ResponseEntity.internalServerError().body(response);
        }
    }
} 