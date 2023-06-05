<script lang="ts">
import { defineComponent } from 'vue'
import ComponentDivider from './ComponentDivider.vue'
import GithubIconVue from './Icons/GithubIcon.vue'
import TwitterIconVue from './Icons/TwitterIcon.vue'
import TelegramIconVue from './Icons/TelegramIcon.vue'

export default defineComponent({
  name: 'HomeComponent',
  components: { ComponentDivider, GithubIconVue, TwitterIconVue, TelegramIconVue }
})
</script>

<template>
  <section id="mainCard">
    <section id="mainCardLeft">
      <h1 id="nameText">Kayda</h1>
      <ComponentDivider />
      <span class="aboutMe">
        Hey! I'm commonly known as Kayda or StarnightFox. I am just your average, generic fox lmfao
      </span>
      <ComponentDivider />
      <span class="aboutMe">
        In my free time, I love to code discord bots, listen to music and play games with friends
      </span>
      <ComponentDivider />
    </section>
    <section id="mainCardRight">
      <div id="profilePic">
        <img
          id="profilePicImg"
          src="https://cdn.discordapp.com/attachments/760786878692720653/1115273079908745246/KaydaUwU.png"
          alt="Profile Picture"
        />
        <a id="creditLink" href="https://twitter.com/StardustFoxArt">From StardustFoxArt</a>
      </div>
      <ComponentDivider />
      <span class="aboutMe">
        I love to develop websites. Although- I am bad at the UI part. Very ironic for a fullstack
        web developer, eh?
      </span>
      <ComponentDivider />
      <footer id="mainCardBottom">
        <a href="https://github.com/starnightfox" class="footerIcon">
          <GithubIconVue />
        </a>
        <a href="https://twitter.com/starnightfox" class="footerIcon">
          <TwitterIconVue />
        </a>
        <a href="https://t.me/starnightfox" class="footerIcon">
          <TelegramIconVue />
        </a>
      </footer>
    </section>
  </section>
</template>

<style scoped>
#mainCard {
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: var(--main-bg);
  width: 100%;
  box-sizing: border-box;
  padding: 10px 11px;
}

#mainCardBottom {
  height: 50px;
  width: 100%;
}

#mainCardLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}

#nameText {
  color: rgb(255, 255, 255);
  font-size: 2rem;
  margin: 0;
  padding: 0;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
}

.aboutMe {
  width: 75%;
  font-size: 1.1rem;
}

#mainCardRight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
}

#profilePic {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#profilePicImg {
  width: 50%;
  height: 50%;
  border-radius: 50%;
}

#creditLink {
  color: rgb(255, 255, 255);
  font-size: 0.8rem;
  text-decoration: none;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px;
  border-radius: var(--small-br);
  width: fit-content;
}

#creditLink:hover {
  background-color: var(--hover-background);
  box-shadow: var(--main-shadow);
}

#mainCardBottom {
  display: flex;
  justify-content: space-evenly;
  width: 75%;
}

@media screen and (min-width: 768px) {
  #creditLink {
    font-size: 1.1rem;
  }
}
</style>
