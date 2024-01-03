<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item
              src="../../public/image/9.webp"
            >
            </v-carousel-item>
            <v-carousel-item
              src="../../public/image/1.webp"
            >
            </v-carousel-item>
            <v-carousel-item
              src="../../public/image/3.webp"
            >
            </v-carousel-item>
            <v-carousel-item
              src="../../public/image/4..webp"
            >
            </v-carousel-item>

          </v-carousel>
        </div>
        <v-col cols="12" sm="12" class="mt-n10">
            <ProductsApi />
          </v-col>
      </div>
    </v-container>
  </div>
</template>
<script>
import ProductsApi from '@/components/ProductsApi.vue';
    export default {
      components:{
        ProductsApi,
      },
        data: () => ({
        })
    }
</script>
