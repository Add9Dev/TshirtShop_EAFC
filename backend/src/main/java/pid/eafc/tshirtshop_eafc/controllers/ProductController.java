// src/main/java/pid/eafc/tshirtshop_eafc/controllers/ProductController.java
package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pid.eafc.tshirtshop_eafc.dto.ProductDTO;
import pid.eafc.tshirtshop_eafc.model.Product;
import pid.eafc.tshirtshop_eafc.repository.ProductRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        try {
            List<Product> products = productRepository.findAllWithCategoryAndImages();
            List<ProductDTO> productDTOs = products.stream()
                    .map(product -> new ProductDTO(product, product.getProductImages()))
                    .toList();

            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", productDTOs);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération des produits");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/category")
    public ResponseEntity<?> getProductsByCategory(@RequestParam Integer categoryId) {
        try {
            List<Product> products = productRepository.findByCategoryIdWithImages(categoryId);
            List<ProductDTO> productDTOs = products.stream()
                    .map(product -> new ProductDTO(product, product.getProductImages()))
                    .toList();

            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", productDTOs);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération des produits de la catégorie");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        try {
            Optional<Product> product = productRepository.findByIdWithCategoryAndImages(id);
            if (product.isEmpty()) {
                Map<String, Object> response = new HashMap<>();
                response.put("status", "error");
                response.put("message", "Produit non trouvé");
                return ResponseEntity.badRequest().body(response);
            }

            ProductDTO productDTO = new ProductDTO(product.get(), product.get().getProductImages());

            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", productDTO);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Erreur lors de la récupération du produit");
            return ResponseEntity.badRequest().body(response);
        }
    }
}
