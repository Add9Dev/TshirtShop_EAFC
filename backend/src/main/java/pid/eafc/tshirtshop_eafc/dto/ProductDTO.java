package pid.eafc.tshirtshop_eafc.dto;

import pid.eafc.tshirtshop_eafc.model.Product;
import pid.eafc.tshirtshop_eafc.model.ProductImage;

import java.util.List;

public class ProductDTO {
    private Product product;
    private List<ProductImage> images;

    public ProductDTO(Product product, List<ProductImage> images) {
        this.product = product;
        this.images = images;
    }

    public Product getProduct() {
        return product;
    }

    public List<ProductImage> getImages() {
        return images;
    }
}
