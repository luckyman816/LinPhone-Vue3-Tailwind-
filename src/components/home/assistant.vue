<template>
  <div class="grid grid-rows-12 h-full">
    <div class="row-start-3 row-span-3">
      <div class="flex flex-col">
        <div class="mb-2 icon-container-a place-self-center">
          <font-awesome-icon icon="user" class="font-semibold my-3 icon-x-a" />
          <div class="icon-s-container-a">
            <font-awesome-icon :icon="['fas', 'cog']" class="icon-s-a" />
          </div>
        </div>
        <div class="">
          <h1 class="font-bold text-xl">Welcome</h1>
        </div>
        <div class="">
          <p class="text-base">
            This assistant will help you config and use sip account
          </p>
        </div>
      </div>
    </div>
    <div class="row-start-9 row-span-4 place-self-center">
      <div class="checkbox-wrapper-48">
        <label>
          <input type="checkbox" name="cb" />
          I accept Belledonne Communication's terms of use and privacy policy
        </label>
      </div>
      <div class="grid grid-cols-2 grid-rows-2">
        <div>
          <router-link to="/register">
            <button class="assistant-button">CREATE A LINPHONE ACCOUNT</button>
          </router-link>
        </div>
        <div>
          <router-link to="/use-account">
            <button class="assistant-button">USE A LINPHONE ACCOUNT</button>
          </router-link>
        </div>
        <div>
          <router-link to="/sip-account">
            <button class="assistant-button">USE A SIP ACCOUNT</button>
          </router-link>
        </div>
        <div>
          <router-link to="/fetch">
            <button class="assistant-button">FETCH REMOTE CONFIGURATION</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.icon-container-a {
  width: 150px;
  height: 150px;
  background-color: #4c5964;
  border-radius: 75px 75px 75px 75px;
  position: relative;
}
.icon-x-a {
  width: 80px;
  height: 80px;
  color: #ffffff;
  padding: 0px;
  border-radius: 40px 40px 40px 40px;
  right: 35px;
  top: 25px;
  position: absolute;
}
.icon-s-container-a {
  background-color: #ff5e00;
  width: 50px;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
  position: absolute;
  left: 95px;
  top: 95px;
}
.icon-s-a {
  color: white;
  position: relative;
  width: 25px;
  height: 25px;
  top: 12px;
}
.checkbox-wrapper-48 {
  --gray: #636e72;
  --very-light-gray: #eee;
  --light-gray: #9098a9;
  --x-light-gray: #dfe6e9;
  --gradient: linear-gradient(
    180deg,
    #e02020 0%,
    #fa6400 100%,
    #f7b500 0%,
    #6dd400 0%,
    #0091ff 0%,
    #6236ff 0%,
    #b620e0 0%
  );
}

.checkbox-wrapper-48 label {
  font-size: 12px;
}

/* CORE STYLES */
.checkbox-wrapper-48 input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  font: inherit;
  border: 0.1em solid var(--light-gray);
  margin-bottom: -0.125em;
}
.checkbox-wrapper-48 input[type="checkbox"] {
  border-radius: 0.25em;
}
.checkbox-wrapper-48 input:checked {
  border-color: transparent;
  background: var(--gradient) border-box;
  box-shadow: 0 0 0 0.1em inset #fff;
}
.checkbox-wrapper-48 input:not(:checked):hover {
  border-color: transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    var(--gradient) border-box;
}
.assistant-button {
  background-color: #909fab;
  color: white;
  width: 300px;
  height: 30px;
  margin-top: 5px;
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 5px;
}
.assistant-button:hover {
  background-color: #4c5964;
  color: white;
}
</style>
