<template>

    <main class="forgotPassword-page flex justify-center items-center my-10">

      <div class="w-10/12 rounded shadow-card grid grid-cols-2">


        <div class="logo-images flex justify-center items-center content-center bg-light-gray">
          <img src="@/assets/images/online-icon.png" alt="Prolope Logo" class="mr-2 align-top">
          <img src="@/assets/images/prolope-icon.svg" alt="Prolope Logo" class="mr-2 image2 mt-2">
          <img src="@/assets/images/group.svg" alt="Prolope Logo group" class="mr-2 image3 align-baseline mt-2">
        </div>

        
        <div class="font-sans p-8 text-left">
          
          <div class="mb-8">
            <h4 class="text-2xl font-bold">Recover Your Password</h4>
            <p class="mt-2 text-dark-gray">Please enter your e-mail address and we will send you instructions how to reset your password.</p>
          </div>

          <form action="#">

            <div class="form-group pb-3">
              <input type="email" name="email" placeholder="e-mail" class="block border-0 border-b-half border-light-green w-full focus:outline-none placeholder-gray-500">
              <label for="name" class="text-xs text-gray-500">Type your e-mail</label>
            </div>


            <div class="flex justify-between mt-10">

              <button class="bg-white text-dark-green border border-dark-green hover:bg-dark-green hover:text-white p-1 px-10 text-center transition ease-in duration-150">Back to login</button>

              <button class="bg-dark-green text-gray-200 p-1 px-10 text-center transition ease-in duration-100 hover:opacity-90">Recover Password
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
  components: {
  }
}
</script>

<style scoped lang="scss">
  .logo-images {
    .image2 {
      width: 200px;
      height: 30px;
    }
    .image3 {
      width: 103px;
      height: 30px;
    }
  }
  .register-icon {
    width: 350px;
    height: 300px;
  }
  .border-b-half {
    border-bottom-width: 0.5px;
  }


</style>
