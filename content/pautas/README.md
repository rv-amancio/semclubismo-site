# Guia do Admin: Pauta da Mesa

Este guia explica como gerar, revisar e publicar a **Pauta da mesa** no site do SemClubismo.

O script busca placares e classificação, monta um rascunho editorial e só publica depois de uma confirmação manual no fluxo local.

Em produção, o GitHub Actions também roda um fluxo automático depois das rodadas de quinta e domingo para atualizar a pauta e o Radar sem depender de uma solicitação manual.

## Antes de Começar

Entre na pasta do projeto:

```bash
cd "semclubismo-site"
```

Confirme que as dependências estão instaladas:

```bash
npm install
```

O projeto usa Node.js 22.

## Caminho Mais Simples

Rode o painel no terminal:

```bash
npm run pauta:admin
```

Escolha uma opção:

- `1`: gerar novo rascunho da rodada
- `2`: revisar rascunho atual
- `3`: revisar textos para redes
- `4`: gerar imagens da pauta
- `5`: aprovar e publicar rascunho
- `6`: sair

Para publicar, o script vai pedir confirmação. Digite exatamente:

```text
SIM
```

Qualquer outra resposta cancela a publicação.

## Publicação Automática

O robô de rodada fica em:

```text
.github/workflows/atualizar-rodada.yml
```

Ele roda:

- domingo às 23:40 de Brasília, para a rodada do fim de semana
- quinta às 23:40 de Brasília, para a rodada do meio de semana

O fluxo executa:

```bash
npm run pauta:auto
npm run radar:snapshot
npm run check
```

Se houver mudança, ele commita na `main`. O push dispara o deploy de produção no Vercel.

Também dá para rodar manualmente pela aba **Actions** do GitHub usando `workflow_dispatch`.

## Fluxo Recomendado

1. Gere o rascunho:

```bash
npm run pauta:draft
```

2. Revise o texto:

```bash
npm run pauta:review
```

3. Revise os textos para redes:

```bash
npm run pauta:social
```

4. Gere as imagens da pauta:

```bash
npm run pauta:images
```

5. Aprove e publique:

```bash
npm run pauta:approve
```

6. Valide o site:

```bash
npm run check
```

## Analisar uma Rodada Específica

Use datas no formato `AAAAMMDD`.

Exemplo para analisar jogos entre 8 e 9 de agosto de 2026:

```bash
npm run pauta:draft -- --start=20260808 --end=20260809
```

Também funciona chamando o script direto:

```bash
node scripts/pauta-admin.mjs draft --start=20260808 --end=20260809
```

## Arquivos Criados

Rascunho em JSON:

```text
content/pautas/draft/pauta-da-mesa.json
```

Prévia em Markdown, mais fácil de ler:

```text
content/pautas/draft/pauta-da-mesa.md
```

Textos para redes sociais:

```text
content/pautas/draft/redes-sociais.md
```

Imagens para redes sociais:

```text
content/pautas/draft/imagens/
content/pautas/draft/imagens/png/
```

Arquivo publicado no site:

```text
src/assets/content/pauta-da-mesa.json
```

Arquivo arquivado depois da aprovação:

```text
content/pautas/publicadas/AAAA-MM-DD-pauta-da-mesa.json
```

Arquivo de redes arquivado depois da aprovação:

```text
content/pautas/publicadas/AAAA-MM-DD-redes-sociais.md
```

Pasta de imagens arquivada depois da aprovação, se existir:

```text
content/pautas/publicadas/AAAA-MM-DD-imagens/
```

## Onde Aparece no Site

Depois de aprovada, a pauta aparece automaticamente na seção:

```text
Pauta da mesa
```

O conteúdo publicado inclui:

- título da rodada
- resumo editorial
- fatos principais
- opiniões editoriais em provocação, análise e resenha
- críticas
- elogios
- resenha
- próxima conversa
- fontes usadas como base

## Textos Para Redes

O comando `npm run pauta:draft` também cria textos prontos para distribuição:

- legenda para Instagram
- mensagem para WhatsApp
- thread para X/Twitter
- sequência de Stories
- roteiro curto para Reels/Shorts

Para revisar apenas esses textos:

```bash
npm run pauta:social
```

O arquivo pode ser editado manualmente antes de postar nas redes:

```text
content/pautas/draft/redes-sociais.md
```

## Imagens Para Redes

Depois de revisar o rascunho, gere os cards:

```bash
npm run pauta:images
```

O comando cria:

- card quadrado para feed
- story com enquete
- thumbnail para Reels/Shorts
- card de crítica
- card de elogio
- card de resenha
- página `preview.html` para conferir tudo no navegador

Os arquivos ficam em:

```text
content/pautas/draft/imagens/
```

Os PNGs prontos para postagem ficam em:

```text
content/pautas/draft/imagens/png/
```

Dimensões principais:

- feed: `1080x1080`
- story: `1080x1920`
- thumbnail: `1280x720`

Se o texto da pauta mudar, rode `npm run pauta:images` de novo.

## Radar

O Radar usa dados em tempo real quando o provedor responde. Como fallback, o repositório guarda um snapshot local em:

```text
src/app/core/radar/radar.fallback.ts
```

Atualize manualmente com:

```bash
npm run radar:snapshot
```

O snapshot cobre os últimos 5 dias e os próximos 14 dias para manter a tela perto da rodada atual.

## Fontes Usadas

O script consulta endpoints públicos da ESPN Brasil para:

- placares do Brasileirão Série A
- classificação do Brasileirão Série A

As fontes exibidas no site apontam para páginas públicas de placares, classificação e tabela.

## Problemas Comuns

### `Erro: fetch failed`

O script não conseguiu acessar a internet.

Tente novamente. Se estiver rodando dentro do Codex, pode ser necessário permitir acesso de rede.

### `Nenhum rascunho encontrado`

Você tentou revisar ou aprovar antes de gerar um rascunho.

Rode:

```bash
npm run pauta:draft
```

### PNG não foi gerado

O SVG foi criado, mas o ambiente não conseguiu abrir Chrome/Chromium para exportar PNG.

Confira se o Chrome está instalado e rode novamente:

```bash
npm run pauta:images
```

### A pauta ficou com uma janela errada

Gere de novo usando `--start` e `--end`:

```bash
npm run pauta:draft -- --start=AAAAMMDD --end=AAAAMMDD
```

### Publiquei, mas quero revisar antes de subir para produção

Rode:

```bash
npm run check
```

Depois abra o site local e confira a seção **Pauta da mesa**.

## Regra Editorial

O público vê apenas a voz do SemClubismo. O script é uma ferramenta interna de redação.

Antes de publicar, revise se:

- a opinião está no tom da marca
- não há erro de placar ou tabela
- críticas e elogios estão equilibrados
- o texto não acusa sem base
- a próxima conversa faz sentido para a rodada seguinte
