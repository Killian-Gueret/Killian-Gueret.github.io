$(".footer").load("/pages/footer.html")

function button_page(string)
{$(document).on("click", `.${string}`, ()=>{window.location.replace(`./pages/${string}.html`)})}

button_page("about"), button_page("skills"), button_page("experiences"), button_page("projects")
$(document).on("click", ".return", ()=>{window.location.replace("/index.html")})