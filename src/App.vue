<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section id="mainBody">
    <header id="mainBodyTop">
      <div id="mainBodyTopLeft">
        <nav id="navbar">
          <RouterLink to="/" class="navbarLink" active-class="navbarLinkActive">Home</RouterLink>
          <RouterLink to="/Projects" class="navbarLink" active-class="navbarLinkActive"
            >Projects</RouterLink
          >
        </nav>
      </div>
      <div id="mainBodyTopRight" />
    </header>

    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<style scoped>
#mainBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-bg);
  width: 90vw;
  border-radius: var(--reg-br);
  overflow: hidden;

  -webkit-box-shadow: var(--main-shadow);
  -moz-box-shadow: var(--main-shadow);
  box-shadow: var(--main-shadow);
}

#mainBodyTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(43, 41, 41);
  width: 100%;
  height: 50px;
  box-sizing: border-box;
}

#mainBodyTopLeft {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(59, 57, 57);
  position: relative;
}

#mainBodyTopLeft::after {
  content: '';
  position: absolute;
  top: 0;
  left: 100%;
  border-top: 50px solid transparent;
  border-left: 25px solid rgb(59, 57, 57);
  background-color: transparent;
  z-index: 2;
}

#mainBodyTopRight {
  width: 55%;
  height: 100%;
  padding-right: 10px;
  position: relative;
}

#mainBodyTopRight::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-top: 50px solid transparent;
  border-left: 50px solid rgba(59, 57, 57, 0.5);
  background-color: transparent;
  z-index: 1;
}

#navbar .navbarLink {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid transparent;
  border-radius: var(--reg-br);
}

#navbar .navbarLinkActive {
  background-color: rgba(255, 255, 255, 0.1);
}

#navbar .navbarLink:hover {
  background-color: var(--hover-background);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media screen and (min-width: 768px) {
  #mainBody {
    width: 50vw;
  }

  #mainBodyTopLeft {
    width: 55%;
  }
}

@media screen and (min-width: 800px) {
  #mainBodyTopLeft {
    width: 50%;
  }
}
</style>
