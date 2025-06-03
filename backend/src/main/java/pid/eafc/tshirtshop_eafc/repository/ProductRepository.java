package pid.eafc.tshirtshop_eafc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pid.eafc.tshirtshop_eafc.model.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(Long categoryId);
}
 