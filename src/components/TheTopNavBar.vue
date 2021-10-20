<template>
  <nav
    id="nav"
    class="topnav"
  >
    <router-link to="/">
      <KonnectLogo />
    </router-link>
    <div class="topnav__menu">
      <!--  bell  -->
      <div class="icon"></div>
      <!--  question mark  -->
      <div class="icon"></div>
      <!--  user avatar  -->
      <div class="avatar"></div>
    </div>
  </nav>
</template>

<script>
import KonnectLogo from '@/components/KonnectLogo.vue'

export default {
  name: 'TheTopNavBar',
  components: {
    KonnectLogo
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 24px;
  margin-bottom: 65px;
  border-bottom: 1px solid #e5e5e5;

  &__menu {
    display: flex;
    align-items: center;

    & > * {
      margin-left: 24px;
    }
  }
}

.icon {
  background-color: #A3B6D9;
  border-radius: 50%;
  height: 20px;
  width: 20px;
}

.avatar {
  background-color: #e5e5e5;
  border-radius: 50%;
  height: 32px;
  width: 32px;
}
</style>
