package pid.eafc.tshirtshop_eafc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pid.eafc.tshirtshop_eafc.model.ProductImage;

import java.util.List;

public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {
    List<ProductImage> findAllByProductId(Integer product_id);
}
