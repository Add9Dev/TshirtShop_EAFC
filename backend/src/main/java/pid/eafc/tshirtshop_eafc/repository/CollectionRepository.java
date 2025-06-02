package pid.eafc.tshirtshop_eafc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pid.eafc.tshirtshop_eafc.model.Collection;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
}
