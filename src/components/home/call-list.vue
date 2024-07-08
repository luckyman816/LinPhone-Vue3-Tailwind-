<template>
  <section class="flex">
    <div class="sidebar min-w-[300px] h-[calc(100vh-66px)]">
      <div
        class="row-span-3 bg-white col-span-2 flex-col"
        style="background-color: #e1e4e7"
      >
        <div class="flex pt-5">
          <ul class="font-bold flex-1 ml-3 text-left">
            Call List
          </ul>
          <ul class="font-bold flex-1 mr-3 text-right">
            <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
          </ul>
        </div>
        <div class="mt-5 mx-2">
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
      <div class="row-span-9 overflow-y-auto  h-[calc(100vh-169px)]">
        <ul>
          <div
            v-for="callHistory in callHistories"
            :key="callHistory.id"
            @click="
              showCallHistory(
                callHistory.phoneNum,
                callHistory.sip,
                callHistory.history
              )
            "
          >
            <div class="flex w-100 call-list" v-if="callHistory.id % 2 == 0">
              <div class="icon-bg-call m-3">
                <font-awesome-icon
                  icon="user"
                  class="font-semibold my-3 icon-style-call"
                />
              </div>
              <div class="flex-col m-3">
                <p class="font-bold text-left">{{ callHistory.phoneNum }}</p>
                <div class="flex">
                  <font-awesome-icon
                    :icon="['fas', 'phone-slash']"
                    v-if="callHistory.history[0].type == 'missed'"
                    rotation="180"
                    style="color: red"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'location-arrow']"
                    v-else-if="callHistory.history[0].type == 'incoming'"
                    style="color: #0e9aa7"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'location-arrow']"
                    v-else-if="callHistory.history[0].type == 'outcoming'"
                    rotation="180"
                    style="color: #0e9aa7"
                  />
                  <h3 class="ml-2 text-sm font-light">
                    {{ callHistory.history[0].callDate }}
                  </h3>
                </div>
              </div>
            </div>
            <div class="flex w-100 call-list-1" v-else>
              <div class="icon-bg-call m-3">
                <font-awesome-icon
                  icon="user"
                  class="font-semibold my-3 icon-style-call"
                />
              </div>
              <div class="flex-col m-3">
                <p class="font-bold text-left">{{ callHistory.phoneNum }}</p>
                <div class="flex">
                  <font-awesome-icon
                    :icon="['fas', 'phone-slash']"
                    v-if="callHistory.history[0].type == 'missed'"
                    rotation="180"
                    style="color: red"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'location-arrow']"
                    v-else-if="callHistory.history[0].type == 'incoming'"
                    style="color: #0e9aa7"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'location-arrow']"
                    v-else-if="callHistory.history[0].type == 'outcoming'"
                    rotation="180"
                    style="color: #0e9aa7"
                  />
                  <h3 class="ml-2 text-sm font-light">
                    {{ callHistory.history[0].callDate }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div v-if="detailIndex" class="bg-white w-full">
      <div>
        <div
          class="h-20 min-h-20 bg-white flex p-3"
          style="background-color: #f5f5f5"
        >
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
            <div class="icon-bg-call-2 m-1">
              <font-awesome-icon
                :icon="['fas', 'comment-dots']"
                class="font-semibold my-3 icon-style-call"
              />
            </div>
            <div class="icon-bg-call-1 m-1 ml-10">
              <font-awesome-icon
                :icon="['fas', 'user-plus']"
                class="font-semibold my-3 icon-style-call-1"
              />
            </div>
            <div class="icon-bg-call-1 m-1">
              <font-awesome-icon
                :icon="['fas', 'trash-can']"
                class="font-semibold my-3 icon-style-call-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-y-auto h-[calc(100vh-145px)]">
        <div v-for="history_it in histories" :key="history_it.id">
          <div class="flex justify-start gap-3 my-5">
            <div class="">
              <font-awesome-icon
                :icon="['fas', 'phone-slash']"
                v-if="history_it.type == 'missed'"
                rotation="180"
                style="color: red"
              />
              <font-awesome-icon
                :icon="['fas', 'location-arrow']"
                v-else-if="history_it.type == 'incoming'"
                style="color: #0e9aa7"
              />
              <font-awesome-icon
                :icon="['fas', 'location-arrow']"
                v-else-if="history_it.type == 'outcoming'"
                rotation="180"
                style="color: #0e9aa7"
              />
            
            </div>
            <div class=" ">{{ history_it.callDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
let id = 0;
let call_id = 0;
const detailIndex = ref(false);
const phoneNumber = ref("");
const sipAddress = ref("");
const histories = ref([]);
function showCallHistory(number, sip, history) {
  phoneNumber.value = number;
  sipAddress.value = sip;
  detailIndex.value = true;
  histories.value = history;
}
const callHistories = ref([
  {
    id: id++,
    phoneNum: 786748,
    sip: "3592086011@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-17 AM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 874565,
    sip: "098765@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 657477457,
    sip: "2345678@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "incoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },

  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
  {
    id: id++,
    phoneNum: 1134,
    sip: "876542142@12048.css.prolope.net",
    history: [
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "outcoming",
        callDate: "2024-01-03 11-30 PM",
      },
      {
        call_id: call_id++,
        type: "missed",
        callDate: "2024-01-03 11-30 PM",
      },
    ],
  },
]);
</script>
<style lang="scss">
.icon-bg-call {
  min-width: 38px !important;
  min-height: 38px !important;
  width: 38px !important;
  height: 38px !important;
  background-color: #5a585b;
  border-radius: 19px 19px 19px 19px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-bg-call-2 {
  min-width: 40px !important;
  min-height: 40px !important;
  width: 40px !important;
  height: 40px !important;
  background-color: #95a4b1;
  border-radius: 20px 20px 20px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-style-call {
  width: 50% !important;
  height: 50% !important;
  color: #ffffff;
  position: absolute;
  right: 9px;
}
.icon-bg-call-1 {
  min-width: 40px !important;
  min-height: 40px !important;
  width: 40px !important;
  height: 40px !important;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-style-call-1 {
  width: 50% !important;
  height: 50% !important;
  color: #d1d1d1;
  position: absolute;
  right: 25%;
}
.icon-bg-call-nav {
  min-width: 50px !important;
  min-height: 50px !important;
  width: 50px !important;
  height: 50px !important;
  background-color: grey;
  border-radius: 25px 25px 25px 25px;
  position: relative;
}
.icon-style-call-nav {
  width: 50% !important;
  height: 50% !important;
  color: #ffffff;
  position: absolute;
  right: 25%;
}
input:focus {
  border: 1px solid;
  border-color: orange;
}
.call-list {
  background-color: #f5f5f5;
}
.call-list:hover {
  background-color: #ff5e00;
  color: white;
}
.call-list:active {
  background-color: #ff5e00;
  color: white;
}
.call-list-1 {
  background-color: white;
}
.call-list-1:hover {
  background-color: #ff5e00;
  color: white;
}
.call-list-1:active {
  background-color: #ff5e00;
  color: white;
}
</style>
