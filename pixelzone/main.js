document.getElementById("load-testimonials").addEventListener("click", function () {
  fetch('testimonials.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("testimonials-container");
      container.innerHTML = ""; // Limpa o conteúdo anterior (se necessário)
      
      data.forEach((testimonial) => {
        const div = document.createElement("div");
        div.className = "testimonial";
        div.innerHTML = `
          <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
          <p>"${testimonial.text}"</p>
        `;
        container.appendChild(div);
      });

      document.getElementById("load-testimonials").textContent = "Depoimentos Carregados!";
    })
    .catch(error => console.error("Erro ao carregar depoimentos:", error));
});

