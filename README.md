# Catálogo MENEZZI

- `index.html` — catálogo para os clientes (botão **Comprar** abre o WhatsApp com a mensagem pronta)
- `admin.html` — painel da loja (login): relatórios, nova venda, vendas, pedidos do WhatsApp, produtos, categorias e dados da loja
- `js/firebase.js` — configuração do Firebase
- `firestore.rules` — regras de segurança do banco
- `video/` — vídeo de apresentação e roteiro da narração
- `img/produtos/` — fotos dos produtos importados do Instagram (publique esta pasta junto com o site)

## Configurar o Firebase (uma vez só)

1. **Firestore**: console.firebase.google.com → projeto *edupro-7921a* → Firestore Database → criar banco (se ainda não existir).
2. **Login da admin**: Authentication → Sign-in method → ative **E-mail/senha**. Depois em *Users* → **Add user** com o e-mail e a senha da dona da loja.
3. **Regras**: Firestore → Rules. Cole o conteúdo de `firestore.rules`, troque `TROQUE-PELO-EMAIL-DA-ADMIN@gmail.com` pelo e-mail do passo 2 e clique em **Publicar**.
   ⚠️ Se esse projeto já tem regras de outro sistema (EduPro), **não apague as antigas**: só acrescente os blocos `menezzi_*` e a função `isAdmin()`.
4. Entre em `admin.html` → **Minha loja** → coloque o **número do WhatsApp** com DDD e salve. (Sem o número, o botão usa o link do Instagram, que não leva a mensagem do produto.)
5. **Produtos** → **+ Importar do Instagram**: cria as categorias Bolsas e Cintos e os 5 produtos que estavam nas postagens públicas do @lojamenezzi. Depois é só editar preço, estoque e fotos (os sem preço na legenda aparecem como "Consulte o preço").
6. **Categorias** → toque nas sugestões (Carteiras, Óculos, Relógios…) para criar as demais.

## Rodar no computador
```
python3 -m http.server 8791
```
Abra http://localhost:8791 (catálogo) e http://localhost:8791/admin.html (painel).

## Publicar na internet
Qualquer hospedagem estática serve (Firebase Hosting, Netlify, Vercel). Com Firebase Hosting:
```
npm i -g firebase-tools
firebase login
firebase init hosting   # pasta pública: .
firebase deploy
```

## Como funciona
- As fotos são reduzidas no navegador e salvas direto no Firestore (não precisa do plano pago do Storage). Até 5 fotos por produto.
- Cada clique em **Comprar** vira um registro em **Pedidos WhatsApp**; dali dá para "Registrar venda" com um toque.
- Ao finalizar uma venda o estoque baixa automaticamente; excluir uma venda devolve o estoque.
- **Vendas → Exportar planilha** gera um CSV que abre no Excel/Google Planilhas.
