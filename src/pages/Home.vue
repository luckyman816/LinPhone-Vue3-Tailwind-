<template>
  <div class="flex justify-center h-full gap-40">
    <div class="col-start-2 place-self-center justify-self-end">
      <div class="sidebar bg-white w-100">
            <div class="bg-white flex flex-col justify-center items-center">
              <div class="mb-2 text-right icon-container">
                <font-awesome-icon
                  :icon="['fas', 'users']"
                  class="font-semibold my-3 icon-x"
                />
                <div class="icon-s-container">
                  <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="icon-s"
                  />
                </div>
              </div>
              <div class="font-bold mt-2 text-sm " style="color: #565964">
                INVITE YOUR FRIENDS
              </div>
              <div
                class="font-light mt-2 text-xs"
                style="
                  color: #aba9c3;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                Invite your friends on Linphone
              </div>
              <br />
              <router-link to="/invite">
                <button class="">INVITE</button>
              </router-link>
            </div>
          </div>
    </div>
    <div class="col-start-3 place-self-center justify-self-start">
      <div class="sidebar bg-white w-100">
            <div class="bg-white flex flex-col items-center">
              <div class="mb-2 text-right icon-container">
                <font-awesome-icon
                  icon="user"
                  class="font-semibold my-3 icon-x"
                />
                <div class="icon-s-container">
                  <font-awesome-icon :icon="['fas', 'cog']" class="icon-s" />
                </div>
              </div>
              <div class="font-bold mt-2 text-sm" style="color: #565964">
                ACCOUNT ASSISTANT
              </div>
              <div class="font-light mt-2 text-xs" style="color: #aba9c3">
                Create or manage your <br> linphone account
              </div>
              <router-link to="/assistant">
                <button class="mt-2">ASSISTANT</button>
              </router-link>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import sidebar from '@/components/home/sidebar'
export default {};
</script>

<style lang="scss">
.sidebar {
  .main {
    ul {
      max-height: 100%;
      height: 100%;
      li {
        padding: 0.35rem 0.5rem;
        &:not(:first-of-type) {
          margin-top: 2px;
        }
        a {
          font-size: 14px;
          padding: 0 0.5rem;
        }
      }
    }
  }

  ul.departments {
    li {
      padding-left: 1rem;
      a {
        justify-self: start !important;
      }
      &::before {
        content: "•";
        position: relative;
        left: 0;
        top: 0;
      }
    }
  }

  .border-b-half {
    border-bottom-width: 0.5px;
  }
  button {
    background-color: #ff5e00;
    color: white;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    font-weight: bold;
    font-size: 12px;
  }
  button:hover {
    background-color: #b64300;
  }
  .icon-container {
    width: 150px;
    height: 150px;
    background-color: #4c5964;
    border-radius: 75px 75px 75px 75px;
    position: relative;
  }
  .icon-x {
    width: 80px;
    height: 80px;
    color: #ffffff;
    padding: 0px;
    border-radius: 40px 40px 40px 40px;
    right: 35px;
    top: 25px;
    position: absolute;
  }
  .icon-s-container {
    background-color: #ff5e00;
    width: 50px;
    height: 50px;
    border-radius: 25px 25px 25px 25px;
    position: absolute;
    left: 95px;
    top: 95px;
  }
  .icon-s {
    color: white;
    position: relative;
    width: 25px;
    height: 25px;
    top: 12px;
    right: 12px;
  }
}
</style>
