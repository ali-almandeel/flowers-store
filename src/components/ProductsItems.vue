<template>
  <v-card class="mx-auto my-12 pb-4" max-width="374">
    <v-img height="250" cover :src="product.image"></v-img>

    <v-card-item class="mt-n1">
      <v-card-title class="text-center">{{ product.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="text-center">
        {{ product.description }}
      </div>
      <v-row align="center" class="mx-0 mt-2">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>
        <v-spacer></v-spacer>
        <slot name="action" />
        <v-spacer></v-spacer>
        <div class="text-grey ms-4">$ {{ product.price }}</div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

export default{
props:{
product:Object
}
}
</script>
