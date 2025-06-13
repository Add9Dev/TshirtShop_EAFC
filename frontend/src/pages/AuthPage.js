import React, {useState} from "react";

// This is the Home page component that uses the Banner component to display a banner at the top of the page.
function AuthPage() {

        const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const  handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error("Échec de l’inscription");

            alert("Inscription réussie !");
        } catch (err) {
            alert(err.message);
        }
    };


    return (
        <div style={{padding: "20px", maxWidth: "800px", margin: "0 auto", color: "white"}}>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="Prénom" value={form.firstName} onChange={handleChange} required /><br />
                <input name="lastName" placeholder="Nom" value={form.lastName} onChange={handleChange} required /><br />
                <input type="email" name="mail" placeholder="Email" value={form.mail} onChange={handleChange} required /><br />
                <input type="password" name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} required /><br />
                <button type="submit">S'inscrire</button>
            </form>
        </div>

    );
}

export default AuthPage;
