package pid.eafc.tshirtshop_eafc.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import pid.eafc.tshirtshop_eafc.dto.RegisterRequest;
import pid.eafc.tshirtshop_eafc.model.Role;
import pid.eafc.tshirtshop_eafc.model.User;
import pid.eafc.tshirtshop_eafc.repository.RoleRepository;
import pid.eafc.tshirtshop_eafc.repository.UserRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AuthServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RoleRepository roleRepository;

    @InjectMocks
    private AuthService authService;

    private RegisterRequest validRequest;
    private Role userRole;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        
        // Setup valid request
        validRequest = new RegisterRequest();
        validRequest.setFirstName("John");
        validRequest.setLastName("Doe");
        validRequest.setMail("john.doe@example.com");
        validRequest.setPassword("password123");

        // Setup user role
        userRole = new Role();
        userRole.setId(1);
        userRole.setName("user");

        // Default mock behavior
        when(userRepository.existsByMail(any())).thenReturn(false);
        when(roleRepository.findById(1)).thenReturn(Optional.of(userRole));
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArguments()[0]);
    }

    @Test
    void register_WithValidData_ShouldCreateUser() {
        // Act
        User result = authService.register(validRequest);

        // Assert
        assertNotNull(result);
        assertEquals(validRequest.getFirstName(), result.getFirstName());
        assertEquals(validRequest.getLastName(), result.getLastName());
        assertEquals(validRequest.getMail(), result.getMail());
        assertEquals(validRequest.getPassword(), result.getPassword());
        assertEquals(userRole, result.getRole());

        verify(userRepository).existsByMail(validRequest.getMail());
        verify(roleRepository).findById(1);
        verify(userRepository).save(any(User.class));
    }

    @Test
    void register_WithExistingEmail_ShouldThrowException() {
        // Arrange
        when(userRepository.existsByMail(validRequest.getMail())).thenReturn(true);

        // Act & Assert
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            authService.register(validRequest);
        });

        assertEquals("Cet email est déjà utilisé", exception.getMessage());
        verify(userRepository).existsByMail(validRequest.getMail());
        verify(roleRepository, never()).findById(anyInt());
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void register_WithNonExistentRole_ShouldThrowException() {
        // Arrange
        when(roleRepository.findById(1)).thenReturn(Optional.empty());

        // Act & Assert
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            authService.register(validRequest);
        });

        assertEquals("Rôle utilisateur non trouvé", exception.getMessage());
        verify(userRepository).existsByMail(validRequest.getMail());
        verify(roleRepository).findById(1);
        verify(userRepository, never()).save(any(User.class));
    }

    @ParameterizedTest
    @ValueSource(strings = {"", " ", "a", "a@", "@b", "a@b", "a@b."})
    void register_WithInvalidEmail_ShouldThrowException(String invalidEmail) {
        // Arrange
        validRequest.setMail(invalidEmail);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @ParameterizedTest
    @ValueSource(strings = {"", " ", "a", "ab", "abc"})
    void register_WithInvalidFirstName_ShouldThrowException(String invalidFirstName) {
        // Arrange
        validRequest.setFirstName(invalidFirstName);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @ParameterizedTest
    @ValueSource(strings = {"", " ", "a", "ab", "abc"})
    void register_WithInvalidLastName_ShouldThrowException(String invalidLastName) {
        // Arrange
        validRequest.setLastName(invalidLastName);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @ParameterizedTest
    @ValueSource(strings = {"", " ", "a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg"})
    void register_WithInvalidPassword_ShouldThrowException(String invalidPassword) {
        // Arrange
        validRequest.setPassword(invalidPassword);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @Test
    void register_WithNullFirstName_ShouldThrowException() {
        // Arrange
        validRequest.setFirstName(null);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @Test
    void register_WithNullLastName_ShouldThrowException() {
        // Arrange
        validRequest.setLastName(null);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @Test
    void register_WithNullEmail_ShouldThrowException() {
        // Arrange
        validRequest.setMail(null);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @Test
    void register_WithNullPassword_ShouldThrowException() {
        // Arrange
        validRequest.setPassword(null);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            authService.register(validRequest);
        });
    }

    @Test
    void register_WithSpecialCharactersInName_ShouldCreateUser() {
        // Arrange
        validRequest.setFirstName("Jean-Pierre");
        validRequest.setLastName("O'Connor");

        // Act
        User result = authService.register(validRequest);

        // Assert
        assertNotNull(result);
        assertEquals("Jean-Pierre", result.getFirstName());
        assertEquals("O'Connor", result.getLastName());
    }

    @Test
    void register_WithAccentedCharacters_ShouldCreateUser() {
        // Arrange
        validRequest.setFirstName("José");
        validRequest.setLastName("García");

        // Act
        User result = authService.register(validRequest);

        // Assert
        assertNotNull(result);
        assertEquals("José", result.getFirstName());
        assertEquals("García", result.getLastName());
    }
} 