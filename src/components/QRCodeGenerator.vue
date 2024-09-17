<template>
  <div class="main_container">
    <div class="qr-code-generator">
      <h1>QR Code Generator</h1>
      <div class="form-group">
        <input v-model="url" type="text" placeholder="Enter URL" />
        <button @click="generateQRCode">Generate QR Code</button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
      <div v-if="qrCode" class="qr-code-container">
        <img :src="qrCode" alt="Generated QR Code" class="qr-code-image" />
        <button class="download-button" @click="downloadQRCode">
          <i class="fa fa-download"></i> Download
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { generateQRCode } from '../utils/qrcode-generator.js';

export default {
  data() {
    return {
      url: '',
      qrCode: null,
      errorMessage: '', 
    };
  },
  methods: {
    isValidURL(url) {
      try {
        new URL(url);
        return true; 
      } catch (error) {
        return false; 
      }
    },
    async generateQRCode() {
      if (this.url) {
        if (!this.isValidURL(this.url)) {
          this.errorMessage = 'Please enter a valid URL.';
          return;
        }
        this.errorMessage = ''; 
        try {
          this.qrCode = await generateQRCode(this.url);
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      } else {
        this.errorMessage = 'Please enter a URL.';
      }
    },
    downloadQRCode() {
      const link = document.createElement('a');
      link.href = this.qrCode;
      link.download = 'qr-code.png';
      link.click();
    },
  },
};
</script>

<style src="../styles/qr-code-generator.css"></style>
