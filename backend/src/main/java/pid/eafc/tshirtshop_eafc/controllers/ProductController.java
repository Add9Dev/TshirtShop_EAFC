// src/main/java/pid/eafc/tshirtshop_eafc/controllers/ProductController.java
package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pid.eafc.tshirtshop_eafc.dto.ProductDTO;
import pid.eafc.tshirtshop_eafc.model.Product;
import pid.eafc.tshirtshop_eafc.model.ProductImage;
import pid.eafc.tshirtshop_eafc.repository.ProductImageRepository;
import pid.eafc.tshirtshop_eafc.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImageRepository productImageRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/byCategory")
    public List<ProductDTO> getProductsByCategory(@RequestParam Long categoryId) {
        List<Product> products = productRepository.findByCategoryId(categoryId);

        return products.stream()
                .map(product -> {
                    List<ProductImage> images = productImageRepository.findAllByProductId(product.getId());
                    return new ProductDTO(product, images);
                })
                .toList();
    }


    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<ProductImage> images = productImageRepository.findAllByProductId(id);
        ProductDTO productDTO = new ProductDTO(product.get(), images);
        return ResponseEntity.ok(productDTO);
    }
}
