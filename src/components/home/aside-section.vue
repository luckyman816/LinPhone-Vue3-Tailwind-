<template>
  <aside class="w-100 col-span-1">
    <ul class="m-3 relative flex flex-col">
      <li class="mb-2" id="side-button">
        <router-link to="/home">
          <div class="icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 576 512">
              <path
                :style="{ fill: 'white' }"
                d="M298.6 12L288 2.7 277.4 12 5.4 252l21.2 24L64 243V496v16H80 496h16V496 243l37.4 33 21.2-24L298.6 12zM96 480V214.7L288 45.3 480 214.7V480H368V304 288H352 224 208v16V480H96zm144 0V320h96V480H240z"
              />
            </svg>
          </div>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link to="/call-list">
          <div class="icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 512 512">
              <path
                :style="{ fill: 'white' }"
                d="M301.7 367.6l-21.3-12.3c-51.4-29.6-94.1-72.4-123.7-123.7l-12.3-21.3 17.3-17.3 40.7-40.7L156 36.2 32 58.7 32 64c0 229.7 186.3 416 416 416h5.3l22.5-124L359.7 309.5 319 350.2l-17.3 17.4zM352 272l160 64L480 512H448C200.6 512 0 311.4 0 64L0 32 176 0l64 160-55.6 55.6c26.8 46.5 65.5 85.2 112 112L352 272z"
              />
            </svg>
          </div>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link to="/messages">
          <div class="icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 512 512">
              <path
                :style="{ fill: 'white' }"
                d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM144 176H128v32h16H368h16V176H368 144zm0 96H128v32h16H272h16V272H272 144z"
              />
            </svg>
          </div>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link to="/contact">
          <div class="icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 448 512">
              <path
                :style="{ fill: 'white' }"
                d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              />
            </svg>
          </div>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link to="/meeting">
          <div class="icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 576 512">
              <path
                :style="{ fill: 'white' }"
                d="M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32 .7c-5.3-.5-10.6-.7-16-.7s-10.7 .2-16 .7V192H32V448c0 17.7 14.3 32 32 32H296.2c10 12.1 21.7 22.9 34.6 32H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32zm48 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"
              />
            </svg>
          </div>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
/* eslint-disable */
export default {};
</script>
<style>
.icon-bg {
  width: 40px !important;
  height: 40px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #ff5e00;
  padding: 5px;
  border-radius: 5px;
}
.icon-bg:hover {
  background-color: #b64300;
}
.icon-size {
  width: 25px;
  height: 25px;
  /* margin-left: 3px ; */
}
</style>
