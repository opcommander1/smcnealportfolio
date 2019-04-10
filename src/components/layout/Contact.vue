<template>
  <section class="contact">
    <div class="back-gd teal">
      <h1 class="center">Contact Me</h1>
      <p class="center" id="subtitle">Let's Build This</p>
      <div class="container">
        <div class="row">
          <div class="col m12 s6 offset-s3">
            <div class="card-panel brown lighten-5">
              <form @submit.prevent="addCustomer">
                <div class="input-field col s6">
                  <input type="text" name="name" v-model="name">
                  <label for="name">Name:</label>
                </div>
                <div class="input-field col s6">
                  <input type="text" name="email" v-model="email">
                  <label for="email">Email:</label>
                </div>
                <div class="input-field col s12">
                  <textarea v-model="message" name="message" class="materialize-textarea"></textarea>
                  <label for="message">Message:</label>
                </div>
                <div class="col s12 center">
                  <a class="teal btn-large">SUBMIT</a>
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
      feedback: null
    }
  },
  methods: {
    addCustomer(){
      if(this.name && this.email) {
        this.feedback = null
        db.collection('customers').add({
          name: this.name,
          email: this.email,
          message: this.message
        }).then(() => {
          this.name = null,
          this.email = null,
          this.message = null
        })
      } else if (!this.name) {
        this.feedback = "Please enter a name"
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
  height: 250px;
  width: 100%;
  overflow: auto;
}
</style>


