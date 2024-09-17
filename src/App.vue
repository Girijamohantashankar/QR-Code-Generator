<template>
  <div id="app">
    <QRCodeGenerator />
  </div>
</template>

<script>
import QRCodeGenerator from './components/QRCodeGenerator.vue';

export default {
  name: 'App',
  components: {
    QRCodeGenerator
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
