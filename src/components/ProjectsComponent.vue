<script lang="ts">
import { defineComponent } from 'vue'
import ProjectLink from './ProjectLink.vue'
import ComponentDivider from './ComponentDivider.vue'

export default defineComponent({
  name: 'ProjectsComponent',
  components: { ProjectLink, ComponentDivider }
})
</script>

<template>
  <section id="projectsCard">
    <section id="projects">
      <section class="project">
        <div class="projectLeft">
          <span class="projectTitle">Basement manager</span>
          <ProjectLink link="https://github.com/StarnightFox/BasementManager" />
        </div>
        <span class="projectRight">
          This is a very simple bot I made for my discord server. Its main purpose is to give new
          members a few questions to answer which it will then send to a channel where my and other
          trusted users can either accept or deny said user
        </span>
      </section>
      <ComponentDivider />
      <section class="project">
        <div class="projectLeft">
          <span class="projectTitle">This website</span>
          <ProjectLink link="https://github.com/StarnightFox/my-website" />
        </div>
        <span class="projectRight">
          This is the website you are currently on. It's a very simple website made with Vue.js and
          Vite. I built this mostly just to play around with Vue.js so its codebase is admittedly a
          mess
        </span>
      </section>
      <ComponentDivider />
      <section class="project">
        <div class="projectLeft">
          <span class="projectTitle">Lavamusic</span>
          <ProjectLink link="https://github.com/StarnightFox/lavamusic" />
        </div>
        <span class="projectRight">
          This isn't a project I made myself but I am a contributor to it, even if my contribution
          is small for now. It's a music bot for discord that can stream from multiple different
          sources using a lavalink backend
        </span>
      </section>
    </section>
  </section>
</template>

<style>
#projectsCard {
  text-align: center;
  background-color: var(--main-bg);
  width: 100%;
  box-sizing: border-box;
  padding: 10px 11px;
}

#projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
}

.projectLeft,
.projectRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.projectLeft {
  margin-bottom: 10px;
}

.projectTitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

@media screen and (min-width: 768px) {
  .project {
    flex-direction: row;
  }

  .projectLeft,
  .projectRight {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
