package pid.eafc.tshirtshop_eafc.dto;

import pid.eafc.tshirtshop_eafc.model.Product;
import pid.eafc.tshirtshop_eafc.model.ProductImage;

import java.util.List;

/**
 * Data Transfer Object for Product that includes product details and associated images.
 */
public class ProductDTO {
    private Product product;
    private List<ProductImage> images;

    public ProductDTO(Product product, List<ProductImage> images) {
        this.product = product;
        this.images = images;
    }

    /**
     * Gets the product details.
     *
     * @return the product
     */
    public Product getProduct() {
        return product;
    }

    /**
     * Gets the list of product images.
     *
     * @return the list of product images
     */
    public List<ProductImage> getImages() {
        return images;
    }
}
