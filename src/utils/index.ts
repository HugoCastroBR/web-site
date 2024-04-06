const generateWhatsAppMessage = (text: string) => {
  return encodeURIComponent(text);
};

const sendWhatsAppMessage = (text: string) => {
  if (typeof window !== "undefined") {
    
    window?.open(`https://api.whatsapp.com/send?phone=${5532999523931}&text=${text}`);
  }
};

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { generateWhatsAppMessage, sendWhatsAppMessage, wait }