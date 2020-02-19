<template>
  <div>
    <b-row no-gutters>
      <template v-if="$resize && $mq.above(992)">
        <leftside-image />
      </template>
      <b-col>
        <div class="rightside">
          <b-container class="login">
            <b-row>
              <h2>Sign in</h2>
            </b-row>
            <b-row>
              <label for="inputs"><span>Email:</span></label>
              <b-form-input
                class="inputs"
                v-model="email"
                placeholder="Enter your email address"
                trim
              ></b-form-input>
              <label for="inputs">Password:</label>
              <b-form-input
                class="inputs"
                v-model="password"
                placeholder="Enter your password"
                trim
                type="password"
              ></b-form-input>
            </b-row>
            <b-row align-h="between">
              <b-col cols="4">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="RememberMe"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Remember me
                </b-form-checkbox>
              </b-col>
              <b-col cols="4">
                <button class="textbtn">Forgot Password?</button>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button class="btn" pill>Sign in</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="signup">Dont have an account? <button class="textbtn" @click="registerHandler">Sign up</button></p>
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
      RememberMe: 'not_accepted',
      // isMobile: false,
    }
  },

  components: {
    'leftside-image': LeftsideImage,
  },

  // mounted() {
  //   window.onresize = () => {
  //     this.isMobile = window.screen.width < 576
  //   }
  // },

  computed: {
    emailState() {
      if (this.email.length == 0){
        return null
      }
      return this.email.length > 2 ? true : false
    }
  },
  methods: {
    registerHandler() {
      this.$router.push({ path: 'register'})
    }
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

@media only screen and (max-width: 992px) {
  .login {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>