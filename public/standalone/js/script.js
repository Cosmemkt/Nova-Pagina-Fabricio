// Centralized WhatsApp Number Configuration
const WHATSAPP_NUMBER = "5548991774043";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("formName").value;
            const phone = document.getElementById("formPhone").value;
            const subject = document.getElementById("formSubject").value;
            const message = document.getElementById("formMessage").value;

            const text = `Olá, meu nome é ${name} (${phone}). Gostaria de orientação sobre: ${subject}.${
                message ? ` Resumo do meu caso: ${message}` : ""
            }`;

            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

            // Track conversion event if dataLayer exists
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: "lead_form_submitted",
                    subject: subject
                });
            }

            // Redirect to WhatsApp
            window.open(waUrl, "_blank");
        });
    }
});
