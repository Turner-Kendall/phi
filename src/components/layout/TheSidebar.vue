<template>
  <aside id="sidebar">
    <ThemeSwitcher />
    <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=93756&url_id=902">
      <img src="/nord.webp" alt="Nord VPN is our sponsor" />
    </a>
    <h5>φhi Sponsors:</h5>
    <ul>
      <li v-for="item in asideData" :key="item.id" class="aside-item">
        <a :href="item.link">
          {{ item.title }}
        </a>
        <small>
          {{ item.description }}
        </small>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { asideData } from '../../data/asideData'
import ThemeSwitcher from '../layout/ThemeSwitcher.vue'
</script>
