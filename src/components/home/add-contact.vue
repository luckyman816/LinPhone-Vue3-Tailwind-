<template>
  <div class="content h-[calc(100vh-65px)] ">
    <div
      class="bg-white w-full flex text-sm p-2 items-center"
      style="background-color: #f5f5f5"
    >
      <div class="icon-bg-contract ml-10">
        <font-awesome-icon
          :icon="['user', 'camera']"
          class="font-semibold my-3 icon-style-contract"
        />
      </div>
      <div class="ml-3 text-sm">
        <input
          placeholder="Display Name"
          class="font-mono italic h-10"
          style="background-color: #e8e8e8; border: 0; outline: 0"
        />
      </div>
    </div>
    <div class="overflow-auto h-[calc(100vh-131px)] ">
      <div class="w-full flex border-b pl-10 py-5">
      <div>
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
      </div>
      <div class="ml-2">
        <h1 class="text-base font-mono font-bold w-40 text-left">
          SIP ACCOUNT(S)
        </h1>
      </div>
      <div class="ml-3 text-sm">
        <input
          placeholder="SIP account"
          class="font-mono italic text-base"
          style="background-color: #e8e8e8; border: 0; outline: 0"
        />
      </div>
    </div>
    <div class="w-full flex border-b pl-10 py-5">
      <div>
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
      </div>
      <div class="ml-2">
        <h1 class="text-base font-mono font-bold w-40 text-left">COMPANIES</h1>
      </div>
      <div class="ml-3 text-sm">
        <input
          placeholder="Companies"
          class="font-mono italic text-base"
          style="background-color: #e8e8e8; border: 0; outline: 0"
        />
      </div>
    </div>
    <div class="w-full flex border-b pl-10 py-5">
      <div>
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
      </div>
      <div class="ml-2">
        <h1 class="text-base font-mono font-bold w-40 text-left">EMAIL(S)</h1>
      </div>
      <div class="ml-3 text-sm">
        <input
          placeholder="Email"
          class="font-mono italic text-base"
          style="background-color: #e8e8e8; border: 0; outline: 0"
        />
      </div>
    </div>
    <div class="w-full flex border-b pl-10 py-5">
      <div>
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
      </div>
      <div class="ml-2">
        <h1 class="text-base font-mono font-bold w-40 text-left">WEBSITE(S)</h1>
      </div>
      <div class="ml-3 text-sm">
        <input
          placeholder="Website"
          class="font-mono italic text-base"
          style="background-color: #e8e8e8; border: 0; outline: 0"
        />
      </div>
    </div>
    <div class="w-full flex pl-10 py-5">
      <div class="ml-7">
        <h1 class="text-base font-mono font-bold w-40 text-left">ADDRESS</h1>
      </div>
      <div class="ml-3 text-sm flex-col">
        <div class="mb-5">
          <input
            placeholder="Street"
            class="font-mono italic text-base  w-fit"
            style="background-color: #e8e8e8; border: 0; outline: 0 ;"
          />
        </div>
        <div class="mb-5">
          <input
            placeholder="Locality"
            class="font-mono italic text-base"
            style="background-color: #e8e8e8; border: 0; outline: 0"
          />
        </div>
        <div class="mb-5">
          <input
            placeholder="Postal code"
            class="font-mono italic text-base"
            style="background-color: #e8e8e8; border: 0; outline: 0"
          />
        </div>
        <div class="mb-5">
          <input
            placeholder="Country"
            class="font-mono italic text-base"
            style="background-color: #e8e8e8; border: 0; outline: 0"
          />
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center align-middle py-5">
        <router-link to = "/contact">
            <button class="button m-5">Cancel</button>
        </router-link>
        <button class="button m-5">Ok</button>
    </div>
    </div>
  </div>
</template>
<style lang="scss">
.icon-bg-contract {
  min-width: 50px !important;
  min-height: 50px !important;
  width: 50px !important;
  height: 50px !important;
  background-color: #5a585b;
  border-radius: 25px 25px 25px 25px;
  position: relative;
}
.icon-style-contract {
  width: 50% !important;
  height: 50% !important;
  color: #ffffff;
  position: absolute;
  right: 25%;
}
.button {
    width: 7vw !important;
    height: 30px !important;
    border-radius: 10px;
    color: white;
    background-color: #ff5e00
}
.button:hover {
    background-color: #5a585b;
}
</style>
