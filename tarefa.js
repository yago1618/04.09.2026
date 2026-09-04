const lista = document.getElementById("lista");
const nomeInput = document.getElementById("nome");
const adicionar = document.getElementById("adicionar");

adicionar.addEventListener("click", async () => {
        const li = document.createElement("li");
        lista.body.appendChild(li);

        li.innerHTML = `<span>${nome}</span>
        <div>
                <button class="btn-concluir">Concluir</button>
        </div>`;
});

li.querySelector(".btn-concluir").addEventListener("click", async () => {
      li.innerHTML = `<span>${nome} (Concluído)</span>`
    }
);