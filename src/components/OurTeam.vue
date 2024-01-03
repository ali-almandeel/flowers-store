<template>
            <v-row>

              <v-col cols="3" v-for="user in usersEmployee" :key="user.id" sm="4">
                <v-card class="mx-auto my-12 pb-4" max-width="374" >
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-card-item class="mt-10">
                        <v-card-title class="text-center"
                          >{{user.name}}</v-card-title
                        >
                      </v-card-item>
                      <v-card-text>
                        <div class="text-center">
                          {{user.email}}
                        </div>
                        <div class="text-center mt-4">
                          <v-btn color="black">{{ user.website }}</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img
                        height="250"
                        class="mx-4"
                        src="../../public/R.png"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
</template>

<script>
export default {
  data: () => ({
    users:[],
  }),
   mounted(){
          fetch('apiUsers.json')
          .then(res => res.json())
          .then(item => this.users = item)

  },
  computed: {
    usersEmployee() {
      return (this.users.filter(a => a.role == "employee"))
    }
  }
};
</script>
