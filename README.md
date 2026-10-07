# CAIXA Consórcio — simulação fiel + busca no header

Réplica visual do site [caixaconsorcio.com.br](https://www.caixaconsorcio.com.br/)
usando assets oficiais (logo, fontes CAIXA Std, banners, ícones e fotos de
produto), com um **campo de busca no header** indexando Central de Ajuda e Blog.

## Rodar

```bash
python3 -m http.server 5173
```

Abra [http://localhost:5173](http://localhost:5173).

## O que está igual ao site real

- Fonte **CAIXA Std** (Light/Regular/SemiBold/Bold)
- Logo oficial SVG
- Header: Produtos · Imobiliário · Veículos Leves · Veículos Pesados · Conteúdos · Fale Conosco · Já sou cliente · Simular
- Hero com os 7 banners oficiais do CDN + dots do carrossel
- Passo a passo com ícones oficiais
- Cards de produto com fotos oficiais
- CTA “Contrate 100% Online”, vídeos, blog, FAQ, newsletter e footer

## O que é novo (simulação)

- Campo **Buscar…** no header (entre a navegação e as ações)
- Dropdown com resultados da Central de Ajuda e do Blog
- Página `/busca.html` com filtros

## Testar a busca

Digite `FGTS`, `fraude`, `contemplação` ou `parcela` no header.
