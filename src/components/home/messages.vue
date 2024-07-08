<template>
    <div class="flex h-full">
      <div class="sidebar w-100" style="min-width: 300px">
        <div
          class="bg-white flex-col row-span-3"
          style="background-color: #e1e4e7"
        >
          <div class="flex p-5">
            <ul class="font-bold flex-1 text-left">
              Messages
            </ul>
            <ul class="font-bold flex-1 text-right">
              <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
            </ul>
          </div>
          <div class="pb-2 mx-2">
            <div class="input-group">
              <input
                type="text"
                placeholder="Search in the list"
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
        </div>
        <div class="row-span-9">
          <ul>
            <div
              v-for="messageHistory in messageHistories"
              :key="messageHistory.id"
              @click="
                showMessageHistory(
                  messageHistory.phoneNum,
                  messageHistory.sip,
                  messageHistory.history
                )
              "
            >
              <div
                class="flex w-100 call-list"
                v-if="messageHistory.id % 2 == 0"
              >
                <div class="icon-bg-call m-3">
                  <font-awesome-icon
                    icon="user"
                    class="font-semibold my-3 icon-style-call"
                  />
                </div>
                <div class="flex-col">
                  <p class="font-bold text-left">
                    {{ messageHistory.phoneNum }}
                  </p>
                  <p class="text-sm text-left">{{ messageHistory.sip }}</p>
                </div>
              </div>
              <div class="flex w-100 call-list-1" v-else>
                <div class="icon-bg-call m-3">
                  <font-awesome-icon
                    icon="user"
                    class="font-semibold my-3 icon-style-call"
                  />
                </div>
                <div class="flex-col">
                  <p class="font-bold text-left">
                    {{ messageHistory.phoneNum }}
                  </p>
                  <p class="text-sm text-left">{{ messageHistory.sip }}</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div v-if="showDetail" class="bg-white w-full flex flex-col h-[calc(100vh-65px)]">
        <div class="h-20 min-h-20 bg-[#f5f5f5] flex p-3">
          <div class="icon-bg-call-nav">
            <font-awesome-icon
              icon="user"
              class="font-semibold my-3 icon-style-call-nav"
            />
          </div>
          <div>
            <h1 class="font-bold ml-3 text-left">{{ phoneNumber }}</h1>
            <h1 class="font-light ml-3 text-xs">{{ sipAddress }}</h1>
          </div>
          <div class="flex-grow"></div>
          <div class="flex">
            <div class="icon-bg-call-2 m-1">
              <font-awesome-icon
                :icon="['fas', 'video']"
                class="font-semibold my-3 icon-style-call"
              />
            </div>
            <div class="icon-bg-call-2 m-1">
              <font-awesome-icon
                :icon="['fas', 'phone']"
                class="font-semibold my-3 icon-style-call"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 my-3 border-b pb-3">
          <div class="col-start-2 col-span-2 input-group mr-3">
            <input
              type="text"
              placeholder="Search messages"
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
        <div class="overflow-y-auto grow">
          <div
            v-for="it in histories"
            :key="it.id"
            class="my-4 p-2"
          >
            <div
              v-if="it.type == 'send'"
              class="flex justify-end "
            >
              <div class=" w-fit p-4 text-sm" style="background-color: #ccf7ff; border-radius: 10px 10px 0 10px">{{ it.content }}</div>
            </div>
            <div
              v-else
              class="flex justify-start w-fit p-4 text-sm"
              style="background-color: #f1f1f1; border-radius: 0 10px 10px 10px"
            >
              {{ it.content }}
            </div>
          </div>
        </div>
        <div style="background-color: #f1f1f1">Footer</div>
      </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
let id = 0;
let message_id = 0;
const showDetail = ref(false);
const phoneNumber = ref("");
const sipAddress = ref("");
const histories = ref([]);
function showMessageHistory(number, sip, history) {
  showDetail.value = true;
  phoneNumber.value = number;
  sipAddress.value = sip;
  histories.value = history;
}
const messageHistories = ref([
  {
    id: id++,
    phoneNum: 786748,
    sip: "3592086011@12048.css.prolope.net",
    history: [
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content:
          "What are you doing now? I am full stact devloper. I 'm well-versed in Vue.js React.js'",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content:
          "What are you doing now? I am full stact devloper. I 'm well-versed in Vue.js React.js'",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content:
          "What are you doing now? I am full stact devloper. I 'm well-versed in Vue.js React.js'",
        type: "recieve",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content:
          "What are you doing now? I am full stact devloper. I 'm well-versed in Vue.js React.js'",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content:
          "What are you doing now? I am full stact devloper. I 'm well-versed in Vue.js React.js'",
        type: "send",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 123456543,
    sip: "3592086011@12048.css.prolope.net",
    history: [
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "Waiting for your response",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, there?",
        type: "send",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 7654333456,
    sip: "3592086011@12048.css.prolope.net",
    history: [
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "recieve",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "send",
      },
      {
        message_id: message_id++,
        message_date: "2024-01-03 11-17 AM",
        content: "hello, how are you?",
        type: "send",
      },
    ],
  },
]);
</script>
<style lang="scss">
input:focus {
  border: 1px solid;
  border-color: orange;
}
</style>
