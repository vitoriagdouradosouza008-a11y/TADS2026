
function main() {

    var n, i, cont;

    var media, porcentagem, soma;

    // 2. Entrada da quantidade de possoas
    n = Number(window.prompt('Entre com a quantidade de pessoas'));
    
    //3. Inicializão do vetors (Arrays) de deforma correta em JS
    let nomes = [];
    let idades = [];
    let alturas = [];

    // 4. Coleta de dados
    for (i = 0; i <n ; i++) {
        // Usamos (i + 1) para mostrar 1ª pessoa; 2ª pessoa, etc.
       //window.alert("Dados da " + ( i + 1) + "ª pessoa:");
        window.alert (`Dados da ${i + 1}ª Pessoa`);
        nomes.push(window.prompt(`Nome da ${i+1}ª pessoa`))
        nomes[i] = window.prompt(`Nome da ${i+1} + ª pessoa:`);
        // idades[i] = Number(window.prompt(`Idade da ${i+1} ª pessoa:`));
        idades[i] = Number(window.prompt(`Idade da ${i+1} ª pessoa:`));
        alturas[i] = Number(window.prompt(`Altura da ${i+1} ª pessoa`));
    }

    // 5. Cálculo da média de altura
    soma = 0;
    for (i = 0; i <= n - 1; i++) {
        soma = soma + alturas[i];
    }
    media = soma / n;

    // 6. Cálculo de menores de 16 anos
    window.alert("Altura média das pessoas é: " + media);
    cont = 0;
    for (i = 0; i <n; i++) {
        if (idades[i] < 16) {
            cont = cont + 1;
        }
    }

    // 7. Cálculo da porcentagem (sem o comando (double))
    porcentagem =  (cont * 100) / n;

    // 8. Exibição do resultados
    window.alert("Altura média: " + media.toFixed(2)); // toFixed(2) limita a 2 casas
    window.alert("Pessoas com menores de 16 anos: " + porcentagem.toFixed(1) + "%");

    // Listando nomes dos menores de 16
    for (i = 0; i < n;  i++) {
        if (idades[i] < 16) {
            window.alert("Pessoas que são menores de 16 anos: " + nomes[i]);
        }
    }
}
