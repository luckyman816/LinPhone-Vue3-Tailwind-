<template>
  <div class="grid grid-rows-3 grid-flow-col h-4/5">
    <div class="row-start-2">
      <div class="grid grid-cols-3">
        <div class="col-start-2">
          <div>
            <h1
              class="font-bold text-left text-xl"
              style="
                color: #ff5e00;
                border-color: #ff5e00;
                border-bottom: 1px solid;
              "
            >
              Invite Friends
            </h1>
          </div>
          <div class="my-5">
            <h1 class="text-left text-base">Friend's email address</h1>
          </div>
          <div class="my-5">
            <input
              type="search"
              class="border border-gray-300 text-gray-600 focus:outline-none p-1 h-full invite-input w-full"
              style="
                font-size: 15px;
                height: 30px;
                min-width: 250px;
                border-radius: 5px;
              "
            />
          </div>
          <div class="my-5">
            <h1 class="text-left text-base">Message</h1>
          </div>
          <div>
            <textarea
              v-model="text"
              name="Description"
              class="border rounded-md w-full invite-textarea pl-2"
              id=""
              placeholder="XXX wants to invite you on Linphone"
              style="height: 20vh"
            ></textarea>
          </div>
          <div class="flex justify-around">
            <button @click="closeFriend" class="mx-5 invite-button">
              Cancel
            </button>
            <button @click="saveFriend" class="mx-5 invite-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.invite-input:focus {
  border: 1px solid;
  border-color: orange;
}
.invite-textarea:focus {
  border: 1px solid;
  border-color: orange;
  outline-color: orange;
  outline: 1px;
}
.invite-button {
  background-color: #ff5e00;
  width: 8vw;
  height: 5vh;
  border-radius: 15px;
  color: white;
}
.invite-button:hover {
  background-color: grey;
}
</style>
