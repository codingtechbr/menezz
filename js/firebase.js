// Configuração do Firebase — compartilhada entre o catálogo e o painel admin
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZxookZugaOMdlduEkqM3G6VcepaXDXVM",
  authDomain: "edupro-7921a.firebaseapp.com",
  projectId: "edupro-7921a",
  storageBucket: "edupro-7921a.firebasestorage.app",
  messagingSenderId: "480921515697",
  appId: "1:480921515697:web:1682c5b65213970b63d490",
  measurementId: "G-G1CL4FEFCK"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Coleções com prefixo para não misturar com outros dados do projeto
export const COL = {
  config: "menezzi_config",
  categorias: "menezzi_categorias",
  produtos: "menezzi_produtos",
  pedidos: "menezzi_pedidos",
  vendas: "menezzi_vendas",
};

// Dados padrão da loja (usados até a dona salvar os dela no painel)
export const LOJA_PADRAO = {
  nome: "MENEZZI",
  slogan: "Bolsas, acessórios, perfumaria e presentes",
  descricao: "Bolsas premium, carteiras, cintos, óculos, relógios, perfumes e presentes escolhidos com carinho. Loja física em Antas-BA e envio para todo o Brasil.",
  whatsapp: "",
  whatsappLink: "https://wa.me/message/VWC6QFWFCJOJC1",
  instagram: "lojamenezzi",
  endereco: "Antas - BA",
  horario: "Seg a Sáb · 8h às 18h",
  logo: "",
  banner: "",
};

export const brl = (v) =>
  (Number(v) || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
