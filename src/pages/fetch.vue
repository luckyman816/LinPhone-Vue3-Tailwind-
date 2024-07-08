<template>
  <main class="register-page flex justify-center items-center my-10">
    <div class="w-7/12 rounded shadow-card">
      <div class="font-sans p-8 text-left">
        <div class="mb-8">
          <h4 class="text-2xl font-bold">FETCH REMOTE CONFIGURATION</h4>
        </div>

        <form action="#">
          <div class="flex justify-between mt-10">
            <div class="form-group pb-3">
              <input
                type="text"
                name="url"
                placeholder="URL"
                class="block border-0 border-b-half border-light-green w-full focus:outline-none placeholder-gray-500"
              />
              <label for="url" class="text-xs text-gray-500">URL</label>
            </div>
            <button
              class="bg-dark-green text-gray-200 p-1 px-10 text-center transition ease-in duration-100 hover:opacity-90"
            >
              FETCH
            </button>
          </div>
          <div class="flex justify-between mt-10">
            <button
              class="bg-white text-dark-green border border-dark-green hover:bg-dark-green hover:text-white p-1 px-10 text-center transition ease-in duration-150"
            >
              BACK
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped lang="scss">
.border-b-half {
  border-bottom-width: 0.5px;
}
</style>
