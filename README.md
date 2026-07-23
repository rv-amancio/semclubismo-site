# Sem Clubismo

Site do podcast **Sem Clubismo** com um Radar automático do futebol brasileiro.

## Desenvolvimento

Requisitos: Node.js 22 e npm.

```bash
npm install
npm start
```

O Angular fica disponível em `http://localhost:4200`. Durante o desenvolvimento, se a rota
serverless não existir localmente, o cliente consulta a fonte esportiva diretamente e mantém o
último snapshot válido no navegador.

Para reproduzir também a Function da Vercel, use `vercel dev` com o diretório deste projeto como
raiz.

## Radar automático

O fluxo não depende de edição manual:

1. A tela solicita `GET /api/radar` ao abrir e a cada cinco minutos.
2. A Function consulta placares, agenda, classificação e notícias, normaliza os dados e responde
   em um contrato próprio.
3. A CDN mantém a resposta por cinco minutos e pode servir o snapshot anterior por mais cinco
   minutos enquanto revalida. Com jogos ao vivo, esse cache cai para um minuto.
4. No desenvolvimento local, se a Function não existir, o navegador usa a fonte direta.
5. Em produção, se a API falhar, o último snapshot salvo é exibido como desatualizado e novas
   tentativas continuam automaticamente.

Competições acompanhadas: Brasileirão Série A, Copa do Brasil, Libertadores e Sul-Americana. Nas
competições continentais, a interface exibe os jogos com clubes presentes na Série A; se a
classificação estiver indisponível, mantém a agenda geral e sinaliza o snapshot como parcial.

Os dados esportivos são obtidos de endpoints públicos da ESPN Brasil, sem chave. Esses endpoints
não oferecem contrato público de estabilidade; por isso, toda a integração fica isolada no mapper
e pode ser substituída por um provedor licenciado sem alterar os componentes visuais.

Arquivos principais:

- `api/radar.ts`: agregação serverless e política de cache.
- `src/app/core/radar/radar.service.ts`: atualização, recuperação e cache local.
- `src/app/core/radar/radar.mapper.ts`: normalização do provedor.
- `src/app/shared/feature/sc-radar/`: interface do Radar.

## Deploy

O projeto está preparado para Vercel. Se o repositório pai for importado, configure
`semclubismo-site` como **Root Directory**. O build usa `npm run build` e publica
`dist/sem-clubismo`.

Nenhuma variável de ambiente é necessária para o provedor atual.

Antes de publicar, execute `npm run check`. O comando valida separadamente o build Angular e a
Function serverless, que não faz parte do `tsconfig.app.json`.
