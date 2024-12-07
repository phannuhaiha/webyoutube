<template>
  <div class="min-h-screen flex">
    <!-- Nội dung chính -->
    <div class="flex-grow ">
      <Header @toggle-menu="toggleNav" @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />
      <div class="flex flex-row">
        <!-- Menu Drawer (Nav) -->
        <Nav :isOpen="isNavOpen" :isDarkMode="isDarkMode" />
        <div class="flex-grow bg-white dark:bg-customLight">
          <!-- Truyền trạng thái isNavOpen -->
          <RouterView :isNavOpen="isNavOpen" :isDarkMode="isDarkMode" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from '../components/Header.vue';
import Nav from '../components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Nav,
    
  },
  data() {
    return {
      isNavOpen: false, // Trạng thái mở/đóng của menu Nav
      isDarkMode: false, // Trạng thái chế độ sáng/tối
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen; // Đảo ngược trạng thái khi nhấn vào nút
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode; // Đổi trạng thái sáng/tối
    },
  },
};
</script>

<style scoped>
/* Các style bổ sung nếu cần */
</style>
