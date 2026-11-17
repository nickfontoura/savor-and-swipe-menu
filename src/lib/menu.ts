import chaGeladoImg from "@/assets/products/cha-gelado.png.asset.json";
import cafeGeladoImg from "@/assets/products/cafe-gelado.png.asset.json";
import cafePersonalizadoImg from "@/assets/products/cafe-personalizado.png.asset.json";
import chocolateQuenteImg from "@/assets/products/chocolate-quente.png.asset.json";
import rocamboleImg from "@/assets/products/rocambole.png.asset.json";
import croissantDoceImg from "@/assets/products/croissant-doce.png.asset.json";
import croissantSalgadoImg from "@/assets/products/croissant-salgado.png.asset.json";
import creppeFrancesImg from "@/assets/products/creppe-frances.png.asset.json";
import fatiaBoloSimplesImg from "@/assets/products/fatia-bolo-simples.png.asset.json";
import fatiaBoloRecheadoImg from "@/assets/products/fatia-bolo-recheado.png.asset.json";

export type ProductOption = { label: string; price?: number };

export type Product = {
  id: string;
  name: string;
  description: string;
  /** Base price in BRL. When options carry their own price, that price wins. */
  price: number;
  image?: string;
  badge?: "Mais vendido" | "Novo no menu";
  optionLabel?: string;
  options?: ProductOption[];
};

export type MenuSection = {
  id: string;
  title: string;
  products: Product[];
};

export const menu: MenuSection[] = [
  {
    id: "bebidas",
    title: "Bebidas e Cafés",
    products: [
      {
        id: "cha-gelado",
        name: "Chá Gelado",
        price: 15.5,
        image: chaGeladoImg.url,
        description:
          "Bebida refrescante feita com a infusão de ervas ou folhas de chá, servida com gelo.",
      },
      {
        id: "cafe-gelado",
        name: "Café Gelado",
        price: 18.5,
        image: cafeGeladoImg.url,
        description: "Bebida à base de café, misturada com alimento congelado.",
      },
      {
        id: "cafe-personalizado",
        name: "Café Personalizado",
        price: 20.9,
        image: cafePersonalizadoImg.url,
        badge: "Mais vendido",
        description:
          "Para os amantes de gatos: escolha o formato ou desenho de preferência para sua bebida.",
      },
      {
        id: "chocolate-quente",
        name: "Chocolate Quente",
        price: 12.9,
        image: chocolateQuenteImg.url,
        description: "Bebida quente e doce, feita com chocolate derretido ou cacau em pó.",
      },
    ],
  },
  {
    id: "cafe-da-manha",
    title: "Café da Manhã",
    products: [
      {
        id: "rocambole",
        name: "Rocambole",
        price: 15,
        image: rocamboleImg.url,
        description: "Massa de bolo com cobertura, enrolada sobre si mesma.",
        optionLabel: "Tamanho",
        options: [
          { label: "P", price: 15 },
          { label: "M", price: 25 },
          { label: "G", price: 40 },
        ],
      },
      {
        id: "croissant-doce",
        name: "Croissant Doce",
        price: 22.9,
        image: croissantDoceImg.url,
        badge: "Mais vendido",
        description: "Pão leve e amanteigado de massa folhada em formato de meia-lua.",
        optionLabel: "Sabor",
        options: [
          { label: "Doce de leite com banana" },
          { label: "Creme de confeiteiro" },
          { label: "Chocolate ou Nutella" },
        ],
      },
      {
        id: "croissant-salgado",
        name: "Croissant Salgado",
        price: 14,
        image: croissantSalgadoImg.url,
        description: "Massa leve e amanteigada, recheada com clássicos.",
        optionLabel: "Sabor",
        options: [
          { label: "Frango com requeijão ou catupiry" },
          { label: "Presunto e queijo" },
          { label: "Quatro queijos" },
        ],
      },
      {
        id: "creppe-frances",
        name: "Creppe Francês",
        price: 29,
        image: creppeFrancesImg.url,
        badge: "Novo no menu",
        description:
          "Panqueca de massa muito fina e delicada, com recheios doces ou salgados.",
      },
      {
        id: "fatia-bolo-simples",
        name: "Fatia de Bolo Simples",
        price: 9,
        image: fatiaBoloSimplesImg.url,
        description: "Fatia de bolo individual, em média entre 100g e 150g.",
      },
      {
        id: "fatia-bolo-recheado",
        name: "Fatia de Bolo Recheado",
        price: 20,
        image: fatiaBoloRecheadoImg.url,
        badge: "Novo no menu",
        description: "Fatia de bolo recheada no meio, em média entre 200g e 350g.",
      },
      {
        id: "misto-quente",
        name: "Misto Quente",
        price: 9,
        description: "Sanduíche clássico com pão, queijo e presunto, tostado até derreter.",
      },
      {
        id: "brownie",
        name: "Brownie",
        price: 14.9,
        badge: "Mais vendido",
        description: "Bolo de chocolate de massa densa, interior úmido e casquinha crocante.",
      },
      {
        id: "coxinha",
        name: "Coxinha",
        price: 11.9,
        description: "Salgado brasileiro com massa de farinha de trigo e recheio de frango.",
      },
      {
        id: "bolinha-de-queijo",
        name: "Bolinha de Queijo",
        price: 14.9,
        description: "Salgadinho frito e empanado, recheado com queijo muçarela.",
      },
      {
        id: "pao-de-queijo",
        name: "Pão de Queijo",
        price: 3.5,
        description: "Pãozinho de polvilho e queijo, macio por dentro e crocante por fora.",
      },
    ],
  },
];
