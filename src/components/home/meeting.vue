<template>
  <div class="content col-span-5" style="height: 60px" justify-left>
    <div
      class="w-full flex text-sm p-2 items-center justify-between"
      style="background-color: #F3F3F3"
    >
      <ul class="mx-10 my-3 text-base font-bold">
        Meetings
      </ul>
      <ul>
        <router-link to="/meeting">
          <button class="create-button" @click="openModal">
            Create Meeting
          </button>
        </router-link>
      </ul>
    </div>
    <div class="bg-white w-full flex text-sm p-2 items-center justify-left">
      <ul>
        <li class="mr-5 inline-block ">
          <button
            class="meeting-button"
            v-if="button_state"
            @click="change_button_state()"
          >
            FINISHED
          </button>
          <button
            class="meeting-button-1"
            v-else
            @click="change_button_state()"
          >
            FINISHED
          </button>
        </li>
      </ul>
      <ul>
        <li class="mr-5 inline-block">
          <button
            class="meeting-button"
            v-if="!button_state"
            @click="change_button_state()"
          >
            SCHEDULED
          </button>
          <button
            class="meeting-button-1"
            v-else
            @click="change_button_state()"
          >
            SCHEDULED
          </button>
        </li>
      </ul>
    </div>
  </div>
  <MeetingModal
    :showModal="modalVisible"
    title="Start Video Conference"
    content="This is the content of the modal."
    @close="modalVisible = false"
  />
</template>
<script setup>
import { ref } from "vue";
const button_state = ref(false);
function change_button_state() {
  button_state.value = !button_state.value;
}
</script>
<script>
import MeetingModal from "./meeting-modal.vue";
export default {
  components: {
    MeetingModal, // Register the Modal component
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
  },
};
</script>
<style lang="scss">
.create-button {
  background-color: #d0d8de;
  width: 5vw !important;
  min-width: 150px ;
  height: 30px !important;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 13px;
}
.create-button:hover {
  background-color: #6b7a86;
}
.meeting-button {
  background-color: #d0d8de;
  width: 5vw !important;
  min-width: 100px ;
  height: 30px !important;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 13px;
}
.meeting-button:hover {
  background-color: #6b7a86;
}
.meeting-button-1 {
  background-color: #ff5e00;
  width: 5vw !important;
  min-width: 100px;
  height: 30px !important;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 13px;
}
</style>
