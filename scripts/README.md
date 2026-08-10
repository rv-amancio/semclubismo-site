# Scripts do Projeto

Este diretório concentra scripts de manutenção e publicação editorial do SemClubismo.

## Visão Geral

| Script | Comandos npm | Uso |
| --- | --- | --- |
| `pauta-admin.mjs` | `pauta:admin`, `pauta:draft`, `pauta:review`, `pauta:social`, `pauta:approve` | Gerar, revisar e publicar a Pauta da mesa e textos para redes |
| `pauta-images.mjs` | `pauta:images` | Gerar cards em SVG para feed, story, thumbnail e posts de opinião |
| `patch-storybook-angular.cjs` | `postinstall` | Corrigir fallback de porta do Storybook Angular após instalar dependências |

## `pauta-admin.mjs`

Script administrativo da redação SemClubismo.

Ele busca placares e classificação do Brasileirão, monta uma pauta editorial, gera textos para redes sociais e publica no site somente após aprovação manual.

### Painel Interativo

```bash
npm run pauta:admin
```

Opções do painel:

- `1`: gerar novo rascunho da rodada
- `2`: revisar rascunho atual
- `3`: revisar textos para redes
- `4`: gerar imagens da pauta
- `5`: aprovar e publicar rascunho
- `6`: sair

### Fluxo Por Comando

Gerar rascunho:

```bash
npm run pauta:draft
```

Revisar pauta:

```bash
npm run pauta:review
```

Revisar textos para redes:

```bash
npm run pauta:social
```

Gerar imagens para redes:

```bash
npm run pauta:images
```

Publicar no site:

```bash
npm run pauta:approve
```

O comando de aprovação só publica quando o admin digita exatamente:

```text
SIM
```

### Rodada Específica

Use datas no formato `AAAAMMDD`.

```bash
npm run pauta:draft -- --start=20260725 --end=20260727
```

### Arquivos Gerados

Rascunho estruturado:

```text
content/pautas/draft/pauta-da-mesa.json
```

Prévia da pauta:

```text
content/pautas/draft/pauta-da-mesa.md
```

Textos para Instagram, WhatsApp, X/Twitter, Stories e Reels/Shorts:

```text
content/pautas/draft/redes-sociais.md
```

Cards em SVG e PNG para feed, story, thumbnail e posts de crítica/elogio/resenha:

```text
content/pautas/draft/imagens/
content/pautas/draft/imagens/png/
```

Pauta publicada no site:

```text
src/assets/content/pauta-da-mesa.json
```

Arquivos arquivados depois da aprovação:

```text
content/pautas/publicadas/
```

### Quando Usar

Use este script depois de uma rodada, clássico, sequência importante ou janela de jogos que mereça leitura editorial.

Antes de aprovar, revise:

- placares e tabela
- título e resumo
- tom das opiniões
- críticas e elogios
- textos para redes

## `pauta-images.mjs`

Script de apoio visual da pauta.

Ele lê o rascunho em JSON e cria imagens em SVG com a identidade do SemClubismo. Quando Chrome/Chromium está disponível, também exporta PNGs prontos para postagem.

### Gerar Imagens

```bash
npm run pauta:images
```

### Arquivos Gerados

```text
content/pautas/draft/imagens/01-feed-instagram.svg
content/pautas/draft/imagens/02-story-enquete.svg
content/pautas/draft/imagens/03-thumbnail-reels.svg
content/pautas/draft/imagens/04-card-critica.svg
content/pautas/draft/imagens/05-card-elogio.svg
content/pautas/draft/imagens/06-card-resenha.svg
content/pautas/draft/imagens/preview.html
content/pautas/draft/imagens/png/01-feed-instagram.png
content/pautas/draft/imagens/png/02-story-enquete.png
content/pautas/draft/imagens/png/03-thumbnail-reels.png
content/pautas/draft/imagens/png/04-card-critica.png
content/pautas/draft/imagens/png/05-card-elogio.png
content/pautas/draft/imagens/png/06-card-resenha.png
```

Dimensões dos PNGs principais:

- feed: `1080x1080`
- story: `1080x1920`
- thumbnail: `1280x720`

### Quando Usar

Use depois de gerar e revisar o rascunho da pauta.

Se o texto do rascunho mudar, rode o comando de imagens novamente para atualizar os cards.

## `patch-storybook-angular.cjs`

Script técnico executado automaticamente pelo `postinstall`.

```bash
npm install
```

Ele ajusta arquivos instalados do Storybook Angular para garantir fallback correto de porta em ambiente local.

### Quando Usar Manualmente

Normalmente não precisa rodar manualmente. Se o Storybook apresentar problema de porta depois de reinstalar dependências, execute:

```bash
node scripts/patch-storybook-angular.cjs
```

### O Que Ele Altera

O script tenta aplicar correções em:

```text
node_modules/@storybook/angular/dist/builders/start-storybook/index.js
node_modules/storybook/dist/core-server/index.cjs
```

Como esses arquivos ficam dentro de `node_modules`, as mudanças podem desaparecer após reinstalar dependências. Por isso o script roda no `postinstall`.

## Validação Após Mudanças

Depois de alterar qualquer script, rode:

```bash
npm run check
```

Para testar o fluxo editorial sem publicar:

```bash
npm run pauta:draft
npm run pauta:review
npm run pauta:social
npm run pauta:images
```
