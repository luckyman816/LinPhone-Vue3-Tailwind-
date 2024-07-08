<template>
  <div
    class="grid grid-cols-12 w-full place-content-center"
    style="height: 60px; background-color: #e8e8e8"
  >
    <div class="col-span-2 place-self-center">Contacts</div>
    <div class="text-left col-span-6">
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

    <div class="col-span-1 space-x-1 text-left place-self-center">
      <button class="search-button text-xs">ALL</button>
    </div>
    <div class="col-span-1 space-x-1 text-left place-self-center">
      <button class="search-button text-xs">ONLINE</button>
    </div>
    <div class="col-span-2 place-self-center">
      <router-link to="add-contact">
        <button class="contact-button text-xs">Add Contact</button>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
input:focus {
  border: 1px solid;
  border-color: orange;
}
.search-button {
  background-color: #6b7a86;
  width: 5vw !important;
  height: 30px !important;
  min-width: 50px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 13px;
}
.contact-button {
  background-color: #ff5e00;
  width: 7vw !important;
  height: 30px !important;
  min-width: 100px;
  border-radius: 7px;
  color: white;
  font-weight: bold;
}
</style>
