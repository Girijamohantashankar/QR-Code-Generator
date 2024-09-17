import QRCode from 'qrcode';

export const generateQRCode = async (url) => {
  try {
    const qrCodeData = await QRCode.toDataURL(url, {
      color: {
        dark: '#000000',
        light: '#ffffff', 
      },
      width: 300,
      margin: 1,
    });
    return qrCodeData;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};
