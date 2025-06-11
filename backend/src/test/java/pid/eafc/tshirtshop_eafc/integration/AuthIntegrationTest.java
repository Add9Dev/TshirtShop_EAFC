package pid.eafc.tshirtshop_eafc.integration;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import pid.eafc.tshirtshop_eafc.dto.RegisterRequest;
import pid.eafc.tshirtshop_eafc.model.Role;
import pid.eafc.tshirtshop_eafc.repository.RoleRepository;
import pid.eafc.tshirtshop_eafc.repository.UserRepository;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class AuthIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Test
    void register_WithValidData_ShouldCreateUser() throws Exception {
        // Préparation des données de test
        RegisterRequest request = new RegisterRequest();
        request.setFirstName("John");
        request.setLastName("Doe");
        request.setMail("john.doe@example.com");
        request.setPassword("password123");

        // Vérification que le rôle utilisateur existe
        Role userRole = roleRepository.findById(1)
                .orElseThrow(() -> new RuntimeException("Rôle utilisateur non trouvé"));

        // Exécution de la requête
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("Inscription réussie"));

        // Vérification en base de données
        assert userRepository.existsByMail("john.doe@example.com");
    }

    @Test
    void register_WithExistingEmail_ShouldReturnError() throws Exception {
        // Préparation des données de test
        RegisterRequest request = new RegisterRequest();
        request.setFirstName("John");
        request.setLastName("Doe");
        request.setMail("existing@example.com");
        request.setPassword("password123");

        // Première inscription
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());

        // Tentative de réinscription avec le même email
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Cet email est déjà utilisé"));
    }

    @Test
    void register_WithInvalidData_ShouldReturnValidationErrors() throws Exception {
        // Test avec des données invalides
        RegisterRequest request = new RegisterRequest();
        request.setFirstName("J"); // Trop court
        request.setLastName("D"); // Trop court
        request.setMail("invalid-email"); // Email invalide
        request.setPassword("123"); // Mot de passe trop court

        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors").exists())
                .andExpect(jsonPath("$.errors.firstName").exists())
                .andExpect(jsonPath("$.errors.lastName").exists())
                .andExpect(jsonPath("$.errors.mail").exists())
                .andExpect(jsonPath("$.errors.password").exists());
    }

    @Test
    void register_WithMissingRequiredFields_ShouldReturnValidationErrors() throws Exception {
        // Test avec des champs manquants
        RegisterRequest request = new RegisterRequest();
        // Tous les champs sont null

        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors").exists())
                .andExpect(jsonPath("$.errors.firstName").exists())
                .andExpect(jsonPath("$.errors.lastName").exists())
                .andExpect(jsonPath("$.errors.mail").exists())
                .andExpect(jsonPath("$.errors.password").exists());
    }
} 