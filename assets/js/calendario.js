document.addEventListener("DOMContentLoaded", function () {
    atualizarDataHora();

    async function atualizarDataHora() {
        let agora = new Date();
        let dia = agora.getDate().toString().padStart(2, '0');
        let mes = (agora.getMonth() + 1).toString().padStart(2, '0');
        let ano = agora.getFullYear();
        let horas = agora.getHours().toString().padStart(2, '0');
        let minutos = agora.getMinutes().toString().padStart(2, '0');
        let segundos = agora.getSeconds().toString().padStart(2, '0');

        let dataFormatada = `${dia}/${mes}/${ano}`;
        let horaFormatada = `${horas}:${minutos}:${segundos}`;

        // Verificar se é feriado (Consulta na API)
        let feriado = await verificarFeriado(ano, mes, dia);

        document.getElementById("data-hora").innerHTML =
            `<strong>Data:</strong> ${dataFormatada} <br>
             <strong>Hora:</strong> ${horaFormatada} <br>
             <strong>Feriado:</strong> ${feriado ? feriado : "Não"}`;

        // Atualiza a cada segundo
        setTimeout(atualizarDataHora, 1000);
    }

    async function verificarFeriado(ano, mes, dia) {
        try {
            let response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${2025}`);
            let feriados = await response.json();

            let dataAtual = `${ano}-${mes}-${dia}`;
            let feriadoEncontrado = feriados.find(f => f.date === dataAtual);

            return feriadoEncontrado ? feriadoEncontrado.name : null;
        } catch (error) {
            console.error("Erro ao buscar feriados:", error);
            return "Não foi possível verificar";
        }
    }
});