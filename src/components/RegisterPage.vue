<template>
  <div>
    <b-row no-gutters>
      <template v-if="!isMobile">
        <leftside-image />
      </template>
      <b-col>
        <div class="rightside">
          <b-container class="login">
            <b-row>
              <h2>Register</h2>
            </b-row>
            <b-row>
              <label for="input-live"><span>Email:</span></label>
              <b-form-input
                class="inputs"
                v-model="email"
                :state="emailState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your email address"
                trim
              ></b-form-input>
              <label for="inputs">Password:</label>
              <b-form-input
                class="inputs"
                v-model="password"
                :state="passwordState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your password"
                trim
                type="password"
              ></b-form-input>
              <label for="input-live">Confirm Password:</label>
              <b-form-input
                class="inputs"
                v-model="confirmedPassword"
                :state="confirmedPasswordState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your password"
                trim
                type="password"
              ></b-form-input>
              <b-form-text v-if="emailState === false" id="input-live-help">Must enter a valid Email address</b-form-text>
            </b-row>
            <b-row>
              <b-col>
                <b-button class="btn" pill @click="registerHandler">Sign up</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="signup">Already have an account? <button class="textbtn" @click="alreadyUser">Sign in</button></p>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LeftsideImage from './LeftsideImage.vue';

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmedPassword: '',
      isMobile: false
    }
  },

  components: {
    'leftside-image': LeftsideImage,
  },

  mounted() {
    window.onresize = () => {
      this.isMobile = window.screen.width < 576
    }
  },

  computed: {
    emailState() {
      if (this.email.length == 0){
        return null
      }
      return this.email.length > 2 ? true : false
    },

    passwordState() {
      if (this.password.length == 0){
        return null
      }
      return this.password.length > 2 ? true : false
    },

    confirmedPasswordState() {
      if (this.confirmedPassword.length == 0){
        return null
      }
      return this.confirmedPassword.length > 2 ? true : false
    }
  },

  methods: {
    registerHandler() {
      this.alreadyUser()
    },
    alreadyUser() {
      this.$router.push({ path: '/'})
    },
  }
}
</script>

<style>
.rightside {
  height: 100vh;
  width: 100%;
}


.rightside .login {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 400;
  color: black;
}
.rightside .login h2{
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  font-size: 60px;
  padding-bottom: 5%;
}

.login {
  padding-top: 10%;
  padding-left: 17%;
  padding-right: 17%;
}

.inputs {
  margin-bottom: 3%;
}

.btn {
  width: 100px;
  height: 40px;
  background-color: #fa1543;
  border: none;
  float: right;
  margin-top: 3%;
}

.btn:focus {
  box-shadow: none;
  background-color: #fa1543;
}

.btn:hover {
  background-color: #fa1543;
}

.col, .col-4 {
  padding-left: 0px;
  padding-right: 0px;
}
.signup {
  padding-top: 3%;
  text-align: center;
}

.textbtn {
  color: #007bff;
  border: none;
}
.textbtn:focus {
    outline: 0 !important;
}
</style>