package pid.eafc.tshirtshop_eafc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pid.eafc.tshirtshop_eafc.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByMail(String mail);
} 