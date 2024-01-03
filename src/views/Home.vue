<template>
  <v-app>
    <v-main>
      <HeroSection />
      <v-container>
        <v-row>
          <v-toolbar color="transparent" class="pa-13">
            <v-toolbar-title class="w-100 d-flex align-center justify-center h-100 text-h4 pa-10">Products</v-toolbar-title>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <ProductsApi  />
          </v-col>
          <v-toolbar color="transparent" class="mt-n10">
            <v-toolbar-title class="w-100 d-flex align-center justify-center h-100 text-h4 pa-10">Our Teams</v-toolbar-title>
          </v-toolbar>
          <!-- <v-col cols="12" sm="12" class="mt-n10">
            <TeamApi />
          </v-col> -->
          <v-col cols="12" sm="12" class="mt-n10">
            <OurTeam />
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import ProductsApi from "@/components/ProductsApi.vue";
// import TeamApi from "@/components/TeamApi.vue";
import OurTeam from "@/components/OurTeam.vue";
import HeroSection from "@/components/HeroSection.vue";
</script>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.top {
  margin-top: 100px;
}
.text {
  margin-top: -40px;
  margin-left: 80px;
}
.top-day {
  margin-top: 120px;
}
</style>
