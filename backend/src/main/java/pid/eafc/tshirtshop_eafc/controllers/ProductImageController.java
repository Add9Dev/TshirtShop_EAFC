package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pid.eafc.tshirtshop_eafc.model.ProductImage;
import pid.eafc.tshirtshop_eafc.repository.ProductImageRepository;

import java.util.List;

@RestController
@RequestMapping("/api/productsimages")
public class ProductImageController {

    @Autowired
    private ProductImageRepository productImageRepository;

    @GetMapping
    public List<ProductImage> getAllProducts() {
        return productImageRepository.findAll();
    }

    /**
     * Get all product images by product ID
     * @param id id of the product for which images are requested
     * @return JSON list of product images for the specified product ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<List<ProductImage>> getProductImagesByProductId(@PathVariable Long id) {
        List<ProductImage> productImages = productImageRepository.findAllByProductId(id);

        if (productImages.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productImages);
    }
}
