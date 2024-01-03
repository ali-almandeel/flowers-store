<template>
  <v-row >
    <v-col class="d-flex align-stretch" cols="3" sm="3" v-for="product in products" :key="product.id"
    >
    <ProductsItems :product="product" >
    <template #action>
      <v-btn class="primary white--text" v-if="product.isActive" @Click="addToCart(product),product.isActive=false" outlined tile dense >
        <v-icon  color="blue">mdi-cart-outline</v-icon>
      </v-btn>
    </template>
    </ProductsItems>
  </v-col>
  </v-row>
</template>

<script>
import { useCartStore } from "@/store/app";
import {  mapActions } from "pinia";
import ProductsItems from './ProductsItems.vue'
export default {
  components:{
    ProductsItems
  },
  data: () => ({
    products:[],
    isDialog:false
  }),
   mounted(){
          fetch('apiFlowers.json')
          .then(res => res.json())
          .then(products => this.products = products)
  },
  props: {
    // all: {
    //   type: Boolean,
    //   default:true
    // },
  },
  computed: {
    Items() {
      return (this.all ? this.products : this.products.filter(a => a.id < 10))
    }
  },
  methods:{
    ...mapActions(useCartStore , ['addToCart'])
  }
};

</script>

<style>
</style>
