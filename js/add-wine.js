document.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById('editModeCheckbox');
    let mainContainer = document.querySelector('main');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            mainContainer.innerHTML = `<main>
            <div class="container mt-5 pt-5 text-center">
              <h1>Aggiungi etichette</h1>
              <div id="form-box">
                <form id="form" class="text-start needs-validation mt-5">
                  <div class="mb-3">
                    <label for="model">Nome:</label>
                    <input
                      id="model"
                      type="text"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="brand">Produttore:</label>
                    <input
                      id="brand"
                      type="text"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="price">Prezzo:</label>
                    <input
                      id="price"
                      type="number"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="image">Image(url):</label>
                    <input
                      id="image"
                      type="text"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="description" class="d-block has-validation"
                      >Descrizione:</label
                    >
                    <textarea
                      id="description"
                      class="form-control"
                      required
                    ></textarea>
                  </div>
                  <div class="d-flex justify-content-between">
                    <button id="reset" class="btn btn-secondary m-0">
                      Reset
                    </button>
                    <button id="submit" class="btn btn-primary">Aggiungi</button>
                  </div>
                </form>
              </div>
            </div>
          </main>`;
        } else {
            mainContainer.innerHTML = `<main>
            <div class="container mt-5 pt-5 text-center">
              <h1>Aggiungi etichette</h1>
              <div id="form-box">
                <form id="form" class="text-start needs-validation mt-5">
                  <div class="mb-3">
                    <label for="model">Nome:</label>
                    <input
                      id="model"
                      type="text"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="brand">Produttore:</label>
                    <input
                      id="brand"
                      type="text"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="price">Prezzo:</label>
                    <p>La modifica del prezzo è disponibile solo in modalità Admin.</p>
                  </div>
                  <div class="mb-3">
                    <label for="image">Image(url):</label>
                    <input
                      id="image"
                      type="text"
                      class="form-control has-validation"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="description" class="d-block has-validation"
                      >Descrizione:</label
                    >
                    <textarea
                      id="description"
                      class="form-control"
                      required
                    ></textarea>
                  </div>
                  <div class="d-flex justify-content-between">
                    <button id="reset" class="btn btn-secondary m-0">
                      Reset
                    </button>
                    <button id="submit" class="btn btn-primary">Aggiungi</button>
                  </div>
                </form>
              </div>
            </div>
          </main>`;
        }
    });
});
