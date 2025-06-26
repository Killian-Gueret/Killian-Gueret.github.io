$(".footer").load("/pages/footer.html")

$(document).on("click", ".about", ()=>{window.location.replace("./pages/about.html")})
$(document).on("click", ".skills", ()=>{window.location.replace("./pages/skills.html")})
$(document).on("click", ".experiences", ()=>{window.location.replace("./pages/experiences.html")})
$(document).on("click", ".projects", ()=>{window.location.replace("./pages/projects.html")})
$(document).on("click", ".return", ()=>{window.location.replace("/index.html")})

// if()