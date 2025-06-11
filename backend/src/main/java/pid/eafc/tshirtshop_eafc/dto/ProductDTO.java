package pid.eafc.tshirtshop_eafc.dto;

import pid.eafc.tshirtshop_eafc.model.Product;
import pid.eafc.tshirtshop_eafc.model.ProductImage;

import java.util.Set;

/**
 * Data Transfer Object for Product that includes product details and associated images.
 */
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private String colorHex;
    private String categoryName;
    private Set<ProductImage> images;

    public ProductDTO(Product product, Set<ProductImage> images) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.stock = product.getStock();
        this.colorHex = product.getColorHex();
        this.categoryName = product.getCategory() != null ? product.getCategory().getName() : null;
        this.images = images;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getColorHex() {
        return colorHex;
    }

    public void setColorHex(String colorHex) {
        this.colorHex = colorHex;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Set<ProductImage> getImages() {
        return images;
    }

    public void setImages(Set<ProductImage> images) {
        this.images = images;
    }
}
