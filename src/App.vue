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

    <RouterView />
  </section>
</template>

<style scoped>
#mainBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(55, 58, 61);
  width: 90vw;
  border-radius: var(--reg-br);
  overflow: hidden;
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
  width: 50%;
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
}

#mainBodyTopRight {
  width: 55%;
  height: 100%;
  padding-right: 10px;
  display: hidden;
}

@media screen and (min-width: 768px) {
  #mainBody {
    width: 535px;
  }

  #mainBodyTopRight {
    display: flex;
  }

  #mainBodyTopLeft {
    width: 45%;
  }
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

#navbar .navbarLink:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.navbarLinkActive {
  text-decoration: underline;
}
</style>
