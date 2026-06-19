# Glossário de Sensoriamento Remoto e Machine Learning

Este repositório contém um glossário simples feito com HTML, CSS e JavaScript.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── data/
│   └── termos.json
├── .nojekyll
└── README.md
```

## Como adicionar novos termos

Abra o arquivo `data/termos.json` e adicione um novo item seguindo este modelo:

```json
{
  "termo": "Novo termo",
  "definicao": "Descrição curta e clara do termo.",
  "tags": ["Métricas", "Machine Learning"]
}
```

Atenção:

- Cada item precisa estar separado por vírgula.
- O último item da lista não deve ter vírgula depois da chave final.
- As tags podem ser reutilizadas para permitir o filtro automático.

## Como publicar no GitHub Pages

1. Suba estes arquivos para a raiz do seu repositório.
2. Vá em **Settings**.
3. Clique em **Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/root`.
6. Salve.

Depois disso, o site ficará disponível no endereço indicado pelo GitHub Pages.
