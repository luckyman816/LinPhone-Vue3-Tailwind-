<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal gird grid-rows-12" style="width: 90vw; height: 80vh">
      <div class=" row-span-11">
        <ul class="h-10 pt-3" style="background-color: #efefef">
          <h2 class="font-bold">{{ title }}</h2>
        </ul>
        <div class="grid grid-cols-12 m-4">
          <div class="col-span-6 flex-col">
            <ul class="text-left">
              subject
            </ul>
            <input class="border input-search" style="width: 43vw" />
            <div class="flex my-3">
              <label class="switch">
                <input type="checkbox" @click="showDetail" />
                <span class="slider round"></span>
              </label>
              <h1 class="ml-3">Would you like to schedule your meeting?</h1>
            </div>
            <div v-if="checkedStatus">
              <div class="grid grid-rows-1">
                <div class="grid grid-cols-4 text-left">
                  <h1 class="label-date text-left">Date</h1>
                  <h1 class="label-time">Time</h1>
                  <h1>Duration</h1>
                  <h1>Timezone</h1>
                </div>
                <div class="grid grid-cols-4">
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="YYYY-MM-DD"
                    min="1990-01-01"
                    max="2050-12-31"
                    class="input-date border h-10 rounded-md"
                    style="width: 8vw"
                  />
  
                  <input
                    type="time"
                    id="appt"
                    name="appt"
                    min="09:00"
                    max="18:00"
                    class="input-time border rounded-md"
                    required
                    style="width: 8vw"
                  />
  
                  <select
                    class="border rounded-md"
                    name="duration"
                    id="duration-select"
                    style="width: 8vw"
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="0.5">30 minutes</option>
                    <option value="1">1 hour</option>
                    <option value="2">2 hour</option>
                    <option value="4">4 hour</option>
                  </select>
  
                  <select
                    class="border w-full rounded-md"
                    @change="handleTimezoneChange"
                    :value="timezone"
                    style="width: 8vw"
                  >
                    <option v-for="(zone, index) in timezones" :key="index">
                      {{ zone }}
                    </option>
                  </select>
                  {{ result && result.toString() }}
                </div>
              </div>
              <div class="flex-col">
                <h1 class="text-left ml-5">Add a description</h1>
                <div>
                  <textarea
                    name="Description"
                    class="border rounded-md"
                    id=""
                    style="width: 40vw; height: 30vh"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="col-span-6 border mt-4 mr-3" style="height: 60vh">
            <input
              class="border mt-5 h-10 input-search pl-3"
              placeholder="Search participants"
              style="width: 40vw; border-radius: 5px"
            />
          </div>
        </div>
      </div>
      <div class="row-span-1">
        <button @click="closeModal" class="mx-5 modal-button">Cancel</button>
        <button @click="saveModal" class="mx-5 modal-button">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
import { timezoneNames, ZonedDate } from "@progress/kendo-date-math";
import "@progress/kendo-date-math/tz/all";
export default {
  props: ["showModal", "title", "content"],
  mounted: function () {
    this.timezones = timezoneNames()
      .filter((l) => l.indexOf("/") > -1)
      .sort((a, b) => a.localeCompare(b));
  },
  data() {
    return {
      checkedStatus: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close"); // Emit an event to notify the parent component to close the modal
    },
    showDetail() {
      this.checkedStatus = !this.checkedStatus;
    },
    tick: function () {
      const date = new Date();
      const result = ZonedDate.fromLocalDate(date, this.timezone);
      this.date = date;
      this.result = result;
    },
    handleTimezoneChange: function (event) {
      this.timezone = event.target.value;
    },
  },
};
</script>

<style>
/* Add CSS for modal styling as per your requirements */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.label-date {
  display: block;
  font: 1rem "Fira Sans", sans-serif;
  margin: 1px;
}

.input-date {
  margin: 0.4rem 0;
}
.label-time {
  display: block;
  font: 1rem "Fira Sans", sans-serif;
}

.input-time,
.label-time {
  margin: 0.4rem 0;
}
.modal-button {
  background-color: #ff5e00;
  width: 10vw;
  height: 5vh;
  border-radius: 10px;
  color: white;
}
.modal-button:hover {
  background-color: grey;
}
.input-search:focus {
  border: 1px solid;
  border-color: #ff5e00;
}
</style>
