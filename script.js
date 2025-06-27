$(".footer").load("/pages/footer.html")

/**
 * Ajoute une action à tous les éléments ayant la classe spécifiée.
 * Lorsqu'un de ces éléments est cliqué, l'utilisateur est redirigé vers une page HTML correspondante.
 *
 * @param {string} pageName - Nom de la classe et du fichier HTML cible (sans extension).
 * Exemple : button_page("contact") écoutera les clics sur les éléments avec la classe .contact
 *           et redirigera vers "./pages/contact.html".
 */
function button_page(pageName)
{$(document).on("click", `.${pageName}`, ()=>{window.location.replace(`./pages/${pageName}.html`)})}

["about", "skills", "experiences", "projects"].forEach(button_page);
$(document).on("click", ".return", ()=>{window.location.replace("/index.html")})
