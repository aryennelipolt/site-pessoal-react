import React, {useState}from "react";

import "./Contact.css";

function Contact() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState(""); 

    function enviarFormulario(event){
        event.preventDefault();

        console.log("Formulário enviado!");

        const texto = `nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER;

        const linkWhatsapp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, '_blanck');
        
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

        let telefoneFomatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        if (textoApenasNumeros.lenght < 11) {
            telefoneFomatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }

        setTelefone(telefoneFomatado);
    }

    return (
        <form onSubmit={enviarFormulario}>
                    
            <fieldset>
                <label htmlFor="input-nome">Nome</label>
                <input 
                    type="text" 
                    name="input-nome" 
                    id="input-nome" 
                    required 
                    minLength="2"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
            </fieldset>
        
            <fieldset>
                <label htmlFor="input-email">E-mail</label>
                <input 
                    type="email" 
                    name="input-email" 
                    id="input-email" 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </fieldset>
        
            <fieldset>
                <label htmlFor="input-tel">Telefone</label>
                <input 
                    type="tel" 
                    name="input-tel" 
                    id="input-tel" 
                    placeholder="(81) 99999-7777" 
                    required 
                    pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                    maxLength="15"
                    value={telefone}
                    onChange={mascaraTelefone}
                />
            </fieldset>
        
            <fieldset>
                <label htmlFor="input-msg">Mensagem</label>
                <textarea 
                    name="input-msg" 
                    id="input-msg" 
                    cols="30" 
                    rows="10"
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                ></textarea>
            </fieldset>
        
            <center>
                <input type="submit" value="ENVIAR" className="button"/>    
            </center>
                
        </form>
        
    )
}

export default Contact;
