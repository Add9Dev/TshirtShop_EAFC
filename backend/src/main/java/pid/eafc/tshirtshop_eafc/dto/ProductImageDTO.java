package pid.eafc.tshirtshop_eafc.dto;

import pid.eafc.tshirtshop_eafc.model.ProductImage;

public class ProductImageDTO {
    private Integer id;
    private String imageUrl;
    private String altText;
    private Boolean isPrimary;

    public ProductImageDTO(ProductImage image) {
        this.id = image.getId();
        this.imageUrl = image.getImageUrl();
        this.altText = image.getAltText();
        this.isPrimary = image.getIsPrimary();
    }

    public Integer getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getAltText() {
        return altText;
    }

    public Boolean getIsPrimary() {
        return isPrimary;
    }
} 