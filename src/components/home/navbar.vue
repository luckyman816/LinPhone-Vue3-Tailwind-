<template>
  <header
    class="bg-white w-full grid grid-cols-12 text-sm p-2 pb-3 items-center"
    style="background-color: #e8e8e8; min-height: 68px; max-height: 68px; "
  >
    <div class="col-span-2">
      <li class="mr-2  flex" >
        <div
          style="
            width: 40px;
            height: 40px;
            min-width: 40px;
            min-height: 40px;
            border-radius: 20px 20px 20px 20px;
            background-color: grey;
            color: white;
            padding-top: 10px;
          "
        >
          YZ
        </div>
        <a
          href="#"
          class="mt-3 ml-3"
          style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis"
          >No account configured</a
        >
      </li>
    </div>
    <div class="col-span-7">
      <div class="input-group">
        <input
          type="text"
          placeholder="Search contact, start a call or a chat"
          class="input-field"
        />
        <span class="input-group-icon">
          <font-awesome-icon
            icon="search"
            style="
              width: 1.5vw !important;
              height: 2.7vh !important;
              min-width: 30px;
              max-height: 30px;
              padding: 5px;
              color: #e9e9e9;
            "
          />
        </span>
      </div>
    </div>
    <div class="col-span-3 place-self-end">
      <li class="mr-2 inline-block mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-grid-round" viewBox="0 0 448 512">
          <path
            d="M96 96A32 32 0 1 1 32 96a32 32 0 1 1 64 0zM64 32a64 64 0 1 0 0 128A64 64 0 1 0 64 32zM96 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM64 192a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 416a64 64 0 1 0 128 0A64 64 0 1 0 0 416zM256 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM224 32a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-64 32a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm96 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM384 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM320 96a64 64 0 1 0 128 0A64 64 0 1 0 320 96zm96 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-64 32a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z"
          />
        </svg>
      </li>
      <li class="mr-2 inline-block">
        <a href="#">
          <div class="icon-style pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                :style="{ fill: 'white' }"
                d="M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm128 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-58.7 64H378.7c54.2 0 98.4 42.5 101.2 96H160.1c2.8-53.5 47-96 101.2-96zm0-32C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H485.3c14.7 0 26.7-11.9 26.7-26.7C512 411.7 452.3 352 378.7 352H261.3zM512 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128A80 80 0 1 0 512 0a80 80 0 1 0 0 160zm16 64c44.2 0 80 35.8 80 80c0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9-50.1-112-112-112H444c2.6 10.2 4 21 4 32h80zm-336 0c0-11 1.4-21.8 4-32H112C50.1 192 0 242.1 0 304c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80h80z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-s-size"
              viewBox="0 0 512 512"
            >
              <path
                :style="{ fill: 'white' }"
                d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM144 176H128v32h16H368h16V176H368 144zm0 96H128v32h16H272h16V272H272 144z"
              />
            </svg>
          </div>
        </a>
      </li>
      <li class="mr-2 inline-block">
        <a href="#">
          <div class="icon-style pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                :style="{ fill: 'white' }"
                d="M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm128 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-58.7 64H378.7c54.2 0 98.4 42.5 101.2 96H160.1c2.8-53.5 47-96 101.2-96zm0-32C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H485.3c14.7 0 26.7-11.9 26.7-26.7C512 411.7 452.3 352 378.7 352H261.3zM512 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128A80 80 0 1 0 512 0a80 80 0 1 0 0 160zm16 64c44.2 0 80 35.8 80 80c0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9-50.1-112-112-112H444c2.6 10.2 4 21 4 32h80zm-336 0c0-11 1.4-21.8 4-32H112C50.1 192 0 242.1 0 304c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80h80z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-s-size"
              viewBox="0 0 512 512"
            >
              <path
                :style="{ fill: 'white' }"
                d="M301.7 367.6l-21.3-12.3c-51.4-29.6-94.1-72.4-123.7-123.7l-12.3-21.3 17.3-17.3 40.7-40.7L156 36.2 32 58.7 32 64c0 229.7 186.3 416 416 416h5.3l22.5-124L359.7 309.5 319 350.2l-17.3 17.4zM352 272l160 64L480 512H448C200.6 512 0 311.4 0 64L0 32 176 0l64 160-55.6 55.6c26.8 46.5 65.5 85.2 112 112L352 272z"
              />
            </svg>
          </div>
        </a>
      </li>
    </div>
  </header>
</template>
<style lang="scss">
input:focus {
  border: 1px solid;
  border-color: orange;
}
.icon-style {
  width: 35px !important;
  height: 35px !important;
  color: #ffffff;
  background-color: #ff5e00;
  padding: 5px;
  border-radius: 5px;
  position: relative;
}
.icon-s-size {
  width: 10px;
  height: 10px;
  position: absolute;
  left: 23px;
  bottom: 22px;
}
.icon-grid-round {
  width: 25px;
  height: 25px;
  color: grey;
}
.input-group {
  position: relative;
}

.input-group-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  z-index: 2;
}

.input-field {
  padding-left: 2.5rem; /* Leave space for the icon */
  width: 100%;
  height: 2.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}
</style>
