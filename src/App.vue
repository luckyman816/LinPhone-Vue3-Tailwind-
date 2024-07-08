<template>
  <div class="flex flex-col h-screen">
    <div id="nav">
      <navbar />
    </div>
    <div class="flex justify-left h-full" style="background-color: rgb(245 245 245); z-index: 1;">
      <div id="" style="width: 63px; min-width: 63px; ">
        <sidebar/>
      </div>
      <div class="w-full" style="background-color: white; z-index: 2; ">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/home/sidebar";
import navbar from "@/components/home/navbar";
export default {
  components: {
    navbar,
    sidebar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 7vh;
  min-height: 65px;
  a {
    font-weight: bold;
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.border-b-half {
  border-bottom-width: 0.5px;
}

.checkbox {
  &__container {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &--block {
      display: block;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      width: 0;
      height: 0;
    }

    .checkmark {
      position: absolute;
      top: 3px;
      left: 0;
      height: 18px;
      width: 18px;
      border: 1px solid #ccc;
      margin-top: 0.4px;
      /* The checkmark/indicator (hidden when not checked) */
      &::after {
        content: "";
        position: absolute;
        opacity: 0;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        transition: opacity 0.5s;
      }
    }
  }
}
//background change on checkbox hover effect
.checkbox__container:hover input ~ .checkmark {
  background: #f0f0f0;
}

//add a green background when the checkbox is checked

.checkbox__container input:checked ~ .checkmark {
  background: #1ab394;
  border-color: #1ab394;
}

.checkbox__container input:checked ~ .checkmark--green {
  background: rgb(7, 119, 67);
  border-color: rgb(7, 119, 67);
}

//show checkmark when checkbox is checked
.checkbox__container input:checked ~ .checkmark::after {
  opacity: 1;
}

// input radio button

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  position: relative;
  padding-left: 2rem;
  font-size: 1rem;
  padding-top: 0.2rem;
  line-height: 1.5;
  cursor: pointer;
  color: #333;
}

.radio-button {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  display: inline-block;
  background: #fff;
  border: 1px solid #1ab394;
}

.radio-button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background: #1ab394;
  opacity: 0;
  transition: opacity 0.5s;
}

.radio-button--green::after {
  background: rgb(7, 119, 67);
}

input[type="radio"]:checked + label .radio-button::after {
  opacity: 1;
}

input[type="radio"]:checked + label .radio-button {
  border: 2px solid #1ab394;
}

input[type="radio"]:checked + label .radio-button--green {
  border: 2px solid rgb(7, 119, 67);
}
</style>
