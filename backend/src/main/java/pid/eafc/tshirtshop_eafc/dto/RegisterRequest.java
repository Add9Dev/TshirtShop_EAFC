package pid.eafc.tshirtshop_eafc.dto;

import org.springframework.lang.NonNull;

public class RegisterRequest {
    @NonNull
    private String firstName;

    @NonNull
    private String lastName;

    @NonNull
    private String mail;

    @NonNull
    private String password;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
} 