   const cima = document.getElementById('cima');
    const baixo = document.getElementById('baixo');
    const infoDiv = document.getElementById("info");
    const faixaP = document.getElementById("faixa");
    const faixaSelect = document.getElementById("faixaSelect");
    let currentIndex = 0;

    function exibirParametro(index) {
      const parametro = parametrosJson[index];
      
      // Atualizar os elementos diretamente com os valores do objeto
      document.getElementById("parametro").textContent = parametro["Parâm."];
      document.getElementById("descricao").textContent = parametro["Descrição"];

      if (Array.isArray(parametro["Faixa de Valores"])) {
        faixaP.textContent = "Faixa :";
        faixaP.classList.add("faixa-array");
        faixaSelect.innerHTML = ""; // Limpar opções anteriores

        parametro["Faixa de Valores"].forEach(opcao => {
          const option = document.createElement("option");
          option.value = opcao.split(" = ")[0];
          option.textContent = opcao;
          faixaSelect.appendChild(option);
        });

        faixaSelect.classList.remove("faixa-array");
      } else {
        faixaP.textContent = `Faixa: ${parametro["Faixa de Valores"]}`;
        faixaP.classList.remove("faixa-array");
        faixaSelect.classList.add("faixa-array");
      }
    }

    cima.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + parametrosJson.length) % parametrosJson.length;
      exibirParametro(currentIndex);
    });

    baixo.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % parametrosJson.length;
      exibirParametro(currentIndex);
    });

    // Exibir o primeiro parâmetro ao carregar a página
    exibirParametro(currentIndex);