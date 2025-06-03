package pid.eafc.tshirtshop_eafc.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configuration class for security settings.
 * This class configures the security filter chain to disable CSRF protection
 * and allows all requests without authentication.
 */
@Configuration
public class SecurityConfig {

    /**
     * Configures the security filter chain.
     * This method disables CSRF protection and allows all requests without authentication
     * TODO: need to implement proper security measures for production use.
     *
     * @param http the HttpSecurity object to configure
     * @return the configured SecurityFilterChain
     * @throws Exception if an error occurs during configuration
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                );
        return http.build();
    }
}
