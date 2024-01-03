
<template>
    <v-app-bar elevation="5" flat>
  <v-container class="d-flex">
      <v-app-bar-title>
       <v-icon icon="mdi-circle-slice-4" />
      </v-app-bar-title>
        <v-btn to="/" exact>Home</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/products">products</v-btn>
        <v-btn>Ar</v-btn>
        <v-btn>dark</v-btn>
        <v-btn to="/cart" icon="mdi-cart"></v-btn>
      </v-container>
    </v-app-bar>

</template>
<script setup>
  //
</script>
