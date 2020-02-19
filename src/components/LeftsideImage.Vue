<template>
  <b-col>
    <div class="leftside">
      <div class="image"/>
      <div class="overlay"/>
      <div class="content">
        <div class="title">
          <span>day</span>
          <span>planner.</span>
        </div>
        <div class="subheading">
          <span>make every day count</span>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.leftside{
  height: 100vh;
  width: 100%;
}

.leftside {
  position: relative;
  overflow: hidden;
}

.leftside .image {
  position: absolute;
  width: 50vw;
  height: 100vh;
  background: url(../assets/calendar1.jpg);
  background-size: cover;
  transition: transform 200ms;
}

.leftside .image:hover {
  transform: scale(1.05);
}

.leftside .overlay {
  pointer-events: none;
  top: 0;
  left: 0;
  position: absolute;
  width: 50vw;
  height: 100vh;
  opacity: 0.7;
  background: linear-gradient(-135deg, #ffbc00, #ff00a5);
  filter: saturate(0.8);
}

.leftside .content {
  pointer-events: none;
  top: 0;
  left: 0;
  position: absolute;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10%;
}

.leftside .content .title {
  color: white;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  line-height: 70px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
}

.leftside .content .subheading {
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  /* line-height: 70px; */
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 300;
  margin-top: 40px;
}

.leftside .content .title span {
  margin: 0;
}
</style>