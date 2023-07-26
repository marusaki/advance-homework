<template>
  <base-card>
    <h2>Signup</h2>
    <p class="error" v-if="errorMsg">Signup error: {{ errorMsg }}</p>
    <p class="success" v-if="isSuccess">Signup success</p>
    <form @submit.prevent="submitForm" v-if="!isSuccess">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <div class="form-control">
        <label for="fullname">Full name</label>
        <input type="fullname" id="fullname" v-model.trim="fullname" />
      </div>
      <p v-if="!formIsValid">
        Please enter a valid email and password (password must be at least 6
        characters long).
      </p>
      <base-button>Signup</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      fullname: "",
      formIsValid: true,
      isSuccess: false,
      errorMsg: "",
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      try {
        await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
          fullname: this.fullname,
        });
        this.isSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.error {
  color: red;
  text-align: center;
}
.success {
  color: rgb(15, 152, 77);
  text-align: center;
}
</style>
