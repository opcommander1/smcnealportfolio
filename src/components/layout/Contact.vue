<template>
  <section class="contact" id="contact">
    <div class="back-gd teal">
      <h1 class="center">Contact Me</h1>
      <p class="center" id="subtitle">Let's Build This</p>
      <div class="container">
        <div class="row">
          <div class="col m12 s12">
            <div class="card-panel brown lighten-5">
              <form @submit.prevent="addCustomer">
                <div class="input-field col m6 s12">
                  <input type="text" name="name" v-model="name">
                  <label for="name">Name:</label>
                  <p v-if="feedbackone" class="red-text center">{{ feedbackone }}</p>
                </div>
                <div class="input-field col m6 s12">
                  <input type="text" name="email" v-model="email">
                  <label for="email">Email:</label>
                  <p v-if="feedbacktwo" class="red-text center">{{ feedbacktwo }}</p>
                </div>
                <div class="input-field col m12 s12">
                  <textarea v-model="message" name="message" class="materialize-textarea"></textarea>
                  <label for="message">Message:</label>
                </div>
                <div class="col s12 center">
                  <button class="teal btn-large">SUBMIT</button>
                  <p v-if="feedbackthree" class="green-text center">{{ feedbackthree }}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import db from '@/firebase/init'
// import firebase from 'firebase'

export default {
  name: 'Contact',
  data(){
    return {
      name: null,
      email: null,
      message: null,
      feedbackone: null,
      feedbacktwo: null,
      feedbackthree: null
    }
  },
  methods: {
    addCustomer(){
      if(this.name && this.email) {
        this.feedbackone = null
        this.feedbacktwo = null
        this.feedbackthree = null
        this.feedbackthree = "Sent Successfully"
        db.collection('customers').add({
          name: this.name,
          email: this.email,
          message: this.message
        }).then(() => {
          this.name = null,
          this.email = null,
          this.message = null,
          this.feedbackone = null,
          this.feedbacktwo = null,
          this.feedbackthree = null
        })
      } if(!this.name) {
        this.feedbackone = "Please enter a name"
      } if(!this.email) {
        this.feedbacktwo = "Please enter a email"
      }
    }
  }
}
</script>

<style>
.contact .back-gd h1{
  font-weight: 300;
}

#subtitle {
  font-size: 1.4em;
  font-weight: 300;
}

.contact .card-panel {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>


