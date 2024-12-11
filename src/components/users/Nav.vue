<template>
    <div
      :class="[isOpen ? 'w-50' : 'w-16', isDarkMode ? 'bg-gray-900' : 'bg-slate-400']"
      class="fixed text-black min-h-screen transition-all duration-300 ease-in-out p-4">

      <div class="flex flex-col space-y-10">
        <!-- Trang Chủ -->
        <RouterLink to="/product">
          <button class="flex items-center space-x-2">
          <i :class="isDarkMode ?  'text-black' : 'text-black'" class="bx bx-home-alt text-2xl"></i>
          <span v-if="isOpen">Trang Chủ</span>
        </button>
        </RouterLink>
      
        <!-- Kênh Đăng Ký -->
        <router-link to="/subscription">
          <button class="flex items-center space-x-2">
          <i :class="isDarkMode ? 'text-white' : 'text-black'" class="bx bxs-slideshow text-2xl"></i>
          <span v-if="isOpen">Kênh Đăng Ký</span>
        </button>
        </router-link>
        
        <!-- Phim Bộ -->
        <button class="flex items-center space-x-2">
          <i :class="isDarkMode ? 'text-white' : 'text-black'" class="bx bx-movie text-2xl"></i>
          <span v-if="isOpen">Phim Bộ</span>
        </button>
  
        <!-- Cài Đặt -->
        <button class="flex items-center space-x-2">
          <i :class="isDarkMode ? 'text-white' : 'text-black'" class="bx bx-cog text-2xl"></i>
          <span v-if="isOpen">Cài Đặt</span>
        </button>
  
        <!-- NỘI DUNG THÊM KHI NAV MỞ -->
        <div v-if="isOpen">
          <div class="flex flex-col space-y-10">
            <!-- Phim Đã Xem -->
            <button class="flex items-center space-x-2">
              <i :class="isDarkMode ? 'text-white' : 'text-black'" class="bx bx-repost text-2xl"></i>
              <span>Phim Đã Xem</span>
            </button>
  
            <!-- Kênh đã thích -->
            <button class="flex items-center space-x-2">
              <i :class="isDarkMode ? 'text-white' : 'text-black'" class="bx bx-like text-2xl"></i>
              <span>Kênh đã thích</span>
            </button>
              
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  export default {
    name: 'Nav',
    props: {
      isOpen: {
        type: Boolean,
        default: false, // Thanh nav bắt đầu ở trạng thái đóng
      },
      isDarkMode: {
        type: Boolean,
        default: false, // Trạng thái Dark Mode
      }
    },
    
  };
  </script>
  
  <style scoped>
  /* Các style bổ sung nếu cần */
  
  </style>
  