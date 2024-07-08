<template>

    <main class="register-page flex justify-center items-center my-10">

      <div class="w-7/12 rounded shadow-card">
        
        <div class="font-sans p-8 text-left">
          
          <div class="mb-8">
            <h4 class="text-2xl font-bold">USE A LINPHONE ACCOUNT</h4>
          </div>

          <form action="#">
            
              <div class="form-group pb-3">
                <input type="text" name="display" placeholder="Display Name" class="block border-0 border-b-half border-light-green w-full focus:outline-none placeholder-gray-500">
                <label for="name" class="text-xs text-gray-500">Display name(optional)</label>
              </div>

            <div class="form-group pb-3">
              <input type="text" name="username" placeholder="Username" class="block border-0 border-b-half border-light-green w-full focus:outline-none placeholder-gray-500">
              <label for="username" class="text-xs text-gray-500">Username</label>
            </div>

            <div class="form-group pb-3">
              <input type="password" name="password" placeholder="Password" class="block border-0 border-b-half border-light-green w-full focus:outline-none placeholder-gray-500">
              <label for="password" class="text-xs text-gray-500">Password</label>
            </div>
            <div class="flex justify-between mt-10">
              <button class="bg-white text-dark-green border border-dark-green hover:bg-dark-green hover:text-white p-1 px-10 text-center transition ease-in duration-150">BACK</button>
              <button class="bg-dark-green text-gray-200 p-1 px-10 text-center transition ease-in duration-100 hover:opacity-90">USE</button>
            </div>
            <div class="flex justify-between mt-10">
                <div class="form-check">
                  <label class="checkbox__container checkbox__container--block" for="terms">
                    Remember me
                    <input class="answers-checkbox" id="terms" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <a href="#" class="text-dark-green no-underline font-medium">Forgot Password?</a>
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
  components: {
  }
}
</script>

<style scoped lang="scss">
  .border-b-half {
    border-bottom-width: 0.5px;
  }


</style>
