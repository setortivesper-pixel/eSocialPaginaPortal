/* Dados dos eventos */
const eventos = {
    "S-1000": { titulo: "Informações do Empregador/Contribuinte/Órgão Público", descricao: "Informações do Empregador/Contribuinte/Órgão Público.", erros: [] },
    "S-1005": { titulo: "Tabela de Estabelecimentos, Obras ou Unidades de Órgãos Públicos", descricao: "Tabela de Estabelecimentos, Obras ou Unidades de Órgãos Públicos.", erros: [] },
    "S-1010": { titulo: "Tabela de Rubricas", descricao: "Tabela de Rubricas.", erros: [] },
    "S-1020": { titulo: "Tabela de Lotações Tributárias", descricao: "Tabela de Lotações Tributárias.", erros: [] },
    "S-1070": { titulo: "Tabela de Processos Administrativos/Judiciais", descricao: "Tabela de Processos Administrativos/Judiciais.", erros: [] },
    "S-1200": { titulo: "Remuneração de Trabalhador vinculado ao Regime Geral de Previd. Social", descricao: "Remuneração de Trabalhador vinculado ao Regime Geral de Previd. Social.", erros: [] },
    "S-1202": { titulo: "Remuneração de Servidor vinculado ao Regime Próprio de Previd. Social", descricao: "Remuneração de Servidor vinculado ao Regime Próprio de Previd. Social.", erros: [] },
    "S-1207": { titulo: "Benefícios - Entes Públicos", descricao: "Benefícios - Entes Públicos.", erros: [] },
    "S-1210": { titulo: "Pagamentos de Rendimentos do Trabalho", descricao: "Pagamentos de Rendimentos do Trabalho.", erros: [] },
    "S-1260": { titulo: "Comercialização da Produção Rural Pessoa Física", descricao: "Comercialização da Produção Rural Pessoa Física.", erros: [] },
    "S-1270": { titulo: "Contratação de Trabalhadores Avulsos Não Portuários", descricao: "Contratação de Trabalhadores Avulsos Não Portuários.", erros: [] },
    "S-1280": { titulo: "Informações Complementares aos Eventos Periódicos", descricao: "Informações Complementares aos Eventos Periódicos.", erros: [] },
    "S-1298": { titulo: "Reabertura dos Eventos Periódicos", descricao: "Reabertura dos Eventos Periódicos.", erros: [] },
    "S-1299": { titulo: "Fechamento dos Eventos Periódicos", descricao: "Fechamento dos Eventos Periódicos.", erros: [] },
    "S-2190": { titulo: "Registro Preliminar de Trabalhador", descricao: "Registro Preliminar de Trabalhador.", erros: [] },
    "S-2200": { titulo: "Cadastramento Inicial do Vínculo e Admissão/Ingresso de Trabalhador", descricao: "Cadastramento Inicial do Vínculo e Admissão/Ingresso de Trabalhador.", erros: [] },
    "S-2205": { titulo: "Alteração de Dados Cadastrais do Trabalhador", descricao: "Alteração de Dados Cadastrais do Trabalhador.", erros: [] },
    "S-2206": { titulo: "Alteração de Contrato de Trabalho/Relação Estatutária", descricao: "Alteração de Contrato de Trabalho/Relação Estatutária.", erros: [] },
    "S-2210": { titulo: "Comunicação de Acidente de Trabalho", descricao: "Comunicação de Acidente de Trabalho.", erros: [] },
    "S-2220": { titulo: "Monitoramento da Saúde do Trabalhador", descricao: "Monitoramento da Saúde do Trabalhador.", erros: [] },
    "S-2221": { titulo: "Exame Toxicológico do Motorista Profissional Empregado", descricao: "Exame Toxicológico do Motorista Profissional Empregado.", erros: [] },
    "S-2230": { titulo: "Afastamento Temporário", descricao: "Afastamento Temporário.", erros: [] },
    "S-2231": { titulo: "Cessão/Exercício em Outro Órgão", descricao: "Cessão/Exercício em Outro Órgão.", erros: [] },
    "S-2240": { titulo: "Condições Ambientais do Trabalho - Agentes Nocivos", descricao: "Condições Ambientais do Trabalho - Agentes Nocivos.", erros: [] },
    "S-2298": { titulo: "Reintegração/Outros Provimentos", descricao: "Reintegração/Outros Provimentos.", erros: [] },
    "S-2299": { titulo: "Desligamento", descricao: "Desligamento.", erros: [] },
    "S-2300": { titulo: "Trabalhador Sem Vínculo de Emprego/Estatutário - Início", descricao: "Trabalhador Sem Vínculo de Emprego/Estatutário - Início.", erros: [] },
    "S-2306": { titulo: "Trabalhador Sem Vínculo de Emprego/Estatutário - Alteração Contratual", descricao: "Trabalhador Sem Vínculo de Emprego/Estatutário - Alteração Contratual.", erros: [] },
    "S-2399": { titulo: "Trabalhador Sem Vínculo de Emprego/Estatutário - Término", descricao: "Trabalhador Sem Vínculo de Emprego/Estatutário - Término.", erros: [] },
    "S-2400": { titulo: "Cadastro de Beneficiário - Entes Públicos - Início", descricao: "Cadastro de Beneficiário - Entes Públicos - Início.", erros: [] },
    "S-2405": { titulo: "Cadastro de Beneficiário - Entes Públicos - Alteração", descricao: "Cadastro de Beneficiário - Entes Públicos - Alteração.", erros: [] },
    "S-2410": { titulo: "Cadastro de Benefício - Entes Públicos - Início", descricao: "Cadastro de Benefício - Entes Públicos - Início.", erros: [] },
    "S-2416": { titulo: "Cadastro de Benefício - Entes Públicos - Alteração", descricao: "Cadastro de Benefício - Entes Públicos - Alteração.", erros: [] },
    "S-2418": { titulo: "Reativação de Benefício - Entes Públicos", descricao: "Reativação de Benefício - Entes Públicos.", erros: [] },
    "S-2420": { titulo: "Cadastro de Benefício - Entes Públicos - Término", descricao: "Cadastro de Benefício - Entes Públicos - Término.", erros: [] },
    "S-2500": { titulo: "Processo Trabalhista", descricao: "Processo Trabalhista.", erros: [] },
    "S-2501": { titulo: "Informações de Tributos Decorrentes de Processo Trabalhista", descricao: "Informações de Tributos Decorrentes de Processo Trabalhista.", erros: [] },
    "S-2555": { titulo: "Solicitação de Consolidação das Informações de Tributos Decorrentes de Processo Trabalhista", descricao: "Solicitação de Consolidação das Informações de Tributos Decorrentes de Processo Trabalhista.", erros: [] },
    "S-3000": { titulo: "Exclusão de Eventos", descricao: "Exclusão de Eventos.", erros: [] },
    "S-3500": { titulo: "Exclusão de Eventos - Processo Trabalhista", descricao: "Exclusão de Eventos - Processo Trabalhista.", erros: [] },
    "S-5001": { titulo: "Informações das Contribuições Sociais por Trabalhador", descricao: "Informações das Contribuições Sociais por Trabalhador.", erros: [] },
    "S-5002": { titulo: "Imposto de Renda Retido na Fonte por Trabalhador", descricao: "Imposto de Renda Retido na Fonte por Trabalhador.", erros: [] },
    "S-5003": { titulo: "Informações do FGTS por Trabalhador", descricao: "Informações do FGTS por Trabalhador.", erros: [] },
    "S-5011": { titulo: "Informações das Contribuições Sociais Consolidadas por Contribuinte", descricao: "Informações das Contribuições Sociais Consolidadas por Contribuinte.", erros: [] },
    "S-5012": { titulo: "Imposto de Renda Retido na Fonte Consolidado por Contribuinte", descricao: "Imposto de Renda Retido na Fonte Consolidado por Contribuinte.", erros: [] },
    "S-5013": { titulo: "Informações do FGTS Consolidadas por Contribuinte", descricao: "Informações do FGTS Consolidadas por Contribuinte.", erros: [] },
    "S-5501": { titulo: "Informações Consolidadas de Tributos Decorrentes de Processo Trabalhista", descricao: "Informações Consolidadas de Tributos Decorrentes de Processo Trabalhista.", erros: [] },
    "S-5503": { titulo: "Informações do FGTS por Trabalhador em Processo Trabalhista", descricao: "Informações do FGTS por Trabalhador em Processo Trabalhista.", erros: [] },
    "S-8200": { titulo: "Anotação Judicial do Vínculo", descricao: "Anotação Judicial do Vínculo.", erros: [] },
    "S-8299": { titulo: "Baixa Judicial do Vínculo", descricao: "Baixa Judicial do Vínculo.", erros: [] }
};

const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("evento");
const evento = eventos[codigo];
const conteudo = document.querySelector("#conteudo-evento");

if (!evento) {
    conteudo.innerHTML = '<p class="mensagem-evento-nao-encontrado">Evento não encontrado.</p>';
} else {
    document.querySelector("#evento-codigo").textContent = codigo;
    document.querySelector("#evento-titulo").textContent = evento.titulo;
    document.querySelector("#evento-descricao").textContent = evento.descricao;

    const listaErros = document.querySelector("#lista-erros");

    /* Renderização dos erros */
    if (!evento.erros.length) {
        listaErros.innerHTML = '<p class="mensagem-sem-erros">Ainda não há erros cadastrados para este evento.</p>';
    } else {
        evento.erros.forEach(({ mensagem, solucao }) => {
            const card = document.createElement("article");
            card.className = "card-erro";
            card.innerHTML = `
                <h3>Mensagem do erro</h3>
                <p>${mensagem}</p>
                <h3>Como resolver</h3>
                <p>${solucao}</p>
            `;
            listaErros.appendChild(card);
        });
    }
}
