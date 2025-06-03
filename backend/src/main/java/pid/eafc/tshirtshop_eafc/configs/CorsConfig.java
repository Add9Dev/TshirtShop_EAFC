package pid.eafc.tshirtshop_eafc.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * Configuration class for CORS settings.
 * This class allows cross-origin requests from specified origins.
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    /**
     * Configures CORS mappings for the application.
     * This method allows cross-origin requests from http://localhost:3000 (frontend app)
     * with specified HTTP methods and headers.
     *
     * @param registry the CorsRegistry to configure, overrides the default CORS settings.
     */
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}
