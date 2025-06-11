package pid.eafc.tshirtshop_eafc.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pid.eafc.tshirtshop_eafc.dto.RegisterRequest;
import pid.eafc.tshirtshop_eafc.model.Role;
import pid.eafc.tshirtshop_eafc.model.User;
import pid.eafc.tshirtshop_eafc.repository.RoleRepository;
import pid.eafc.tshirtshop_eafc.repository.UserRepository;

import java.time.Instant;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        // Validation des champs
        if (request.getFirstName() == null || request.getFirstName().trim().isEmpty()) {
            throw new IllegalArgumentException("Le prénom est requis");
        }
        if (request.getLastName() == null || request.getLastName().trim().isEmpty()) {
            throw new IllegalArgumentException("Le nom est requis");
        }
        if (request.getMail() == null || request.getMail().trim().isEmpty()) {
            throw new IllegalArgumentException("L'email est requis");
        }
        if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
            throw new IllegalArgumentException("Le mot de passe est requis");
        }

        // Validation du format de l'email
        if (!request.getMail().matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            throw new IllegalArgumentException("Format d'email invalide");
        }

        // Validation du mot de passe
        if (request.getPassword().length() < 8) {
            throw new IllegalArgumentException("Le mot de passe doit contenir au moins 8 caractères");
        }

        // Vérifier si l'email existe déjà
        if (userRepository.existsByMail(request.getMail())) {
            throw new IllegalArgumentException("Cet email est déjà utilisé");
        }

        // Créer un nouvel utilisateur
        User user = new User();
        user.setFirstName(request.getFirstName().trim());
        user.setLastName(request.getLastName().trim());
        user.setMail(request.getMail().trim().toLowerCase());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(Instant.now());

        // Récupérer le rôle "user" (id = 1)
        Role userRole = roleRepository.findById(1)
                .orElseThrow(() -> new IllegalArgumentException("Rôle utilisateur non trouvé"));
        user.setRole(userRole);

        try {
            return userRepository.save(user);
        } catch (Exception e) {
            throw new IllegalArgumentException("Erreur lors de l'enregistrement de l'utilisateur: " + e.getMessage());
        }
    }
} 