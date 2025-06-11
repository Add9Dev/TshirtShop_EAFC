package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pid.eafc.tshirtshop_eafc.model.Collection;
import pid.eafc.tshirtshop_eafc.repository.CollectionRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {

    @Autowired
    private CollectionRepository collectionRepository;

    @GetMapping
    public ResponseEntity<?> getAllCollections() {
        try {
            List<Collection> collections = collectionRepository.findAll();
            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", collections);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération des collections");
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCollectionById(@PathVariable Long id) {
        try {
            return collectionRepository.findById(id)
                    .map(collection -> {
                        Map<String, Object> response = new HashMap<>();
                        response.put("status", "success");
                        response.put("data", collection);
                        return ResponseEntity.ok(response);
                    })
                    .orElseGet(() -> {
                        Map<String, Object> response = new HashMap<>();
                        response.put("status", "error");
                        response.put("message", "Collection non trouvée");
                        return ResponseEntity.notFound().build();
                    });
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération de la collection");
            return ResponseEntity.internalServerError().body(response);
        }
    }
}