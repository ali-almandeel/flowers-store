<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">Flowers CART</p>
      <v-row>
      <v-col class="d-flex align-stretch" cols="3" sm="3" v-for="(product , index) in items" :key="product.id"
    >
        <ProductsItems :product="product" >
          <template #action>
            <v-btn class="primary white--text"
              @Click="product.isActive = !product.isActive; isDialog = true" outlined tile dense>
              <v-icon color="blue">mdi-delete-outline</v-icon>
            </v-btn>
            <v-dialog width="400" v-model="isDialog">
              <v-card>
                <v-card-title>
                  Do you want to delelte the product from a cart ?
                </v-card-title>
                <v-card-title>
                  product Name : {{ product.name }}
                </v-card-title>
                <v-card-actions>
                  <v-btn @Click="isDialog = false, deleteItem(index)">delete from cart</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </ProductsItems>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<script>
import { useCartStore } from "@/store/app";
import { mapState, mapActions } from "pinia";
import ProductsItems from '@/components/ProductsItems.vue';
export default {
  components: {
    ProductsItems,
  },
  data: () => ({
    isDialog: false
  }),
  computed: {
    ...mapState(useCartStore, ['items'])
  }
  ,
  methods: {
    ...mapActions(useCartStore, ['deleteItem'])
  }
}
</script>

