import capaAsset from "@/assets/capa-frente-30-dias.jpg.asset.json";

// Edite aqui preço, link de checkout e contato. Nada é inventado: campos vazios ficam ocultos.
export const product = {
  name: "30 Dias de Encontro com Deus",
  subtitle: "Uma jornada de fé, oração e transformação espiritual.",
  format: "Material digital em PDF",
  /** URL da imagem da capa original. Vazio = capa provisória. */
  coverImage: capaAsset.url,
  /** Ex.: "R$ 29,90". Vazio = "Preço em breve". */
  price: "",
  /** Link real do checkout (Kiwify, Hotmart, Mercado Pago...). Vazio = botão leva à seção de compra. */
  checkoutUrl: "",
  contactEmail: "",
  privacyUrl: "",
  termsUrl: "",
  refundUrl: "",
};
