<template>
  <v-col cols="12" sm="12">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                src="https://www.bing.com/ck/a?!&&p=199acc7d2080f9cbJmltdHM9MTcwMzg5NDQwMCZpZ3VpZD0zZjExZjQ1OS00YjlhLTYxZjItMjk0NC1lNjA5NGFhNTYwMTEmaW5zaWQ9NTU0Nw&ptn=3&ver=2&hsh=3&fclid=3f11f459-4b9a-61f2-2944-e6094aa56011&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZSB1c2VyJkZPUk09SVFGUkJBJmlkPThBNEE0NTZCMUY0QkM4NkNFMzhCQ0I5NTkzN0M0NEM0MDg4MjY5MkI&ntb=1"
                cover
              >
                <v-row>
                  <v-col cols="12" sm="6">
                    <div class="d-flex fill-height justify-center align-center">
                      <h2 class="text-white top">{{ item.title }}</h2>
                      <br />
                    </div>
                    <div class="d-flex fill-height justify-center align-center">
                      <p class="text text-white">{{ item.text }}</p>
                    </div>
                    <div class="d-flex fill-height justify-center align-center">
                      <v-btn style="margin-top: -120px">Buy Now</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
</template>

<script>
export default{
  data(){
    return {
      items:[]
    }
  }
}
</script>
