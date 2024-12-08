<template>
    <div class="relative">
      <!-- Header -->
      <div :class="isDarkMode ? 'dark' : ''" class="flex justify-between items-center p-1 bg-darkCustom dark:bg-customLight text-black dark:text-white" >
        <!-- Góc trái: Menu Icon và Logo -->
        <div class="flex items-center space-x-4">
          <!-- Menu Icon (Hamburger) -->
          <div @click="$emit('toggle-menu')" class=" ml-2 space-y-1 cursor-pointer">
            <div class="w-8 h-1 bg-white dark:bg-white"></div>
            <div class="w-8 h-1 bg-white dark:bg-white"></div>
            <div class="w-8 h-1 bg-white dark:bg-white"></div>
          </div>
  
          <!-- Logo -->
          <div class="bg-auto rounded-full py-2 text-white text-4xl font-bold" style="width: 120px; height: 70px;">
            <img src="./icons/Logo.png" class="flex w-full h-full">
          </div>
        </div>
  
        <!-- Ở giữa: Thanh tìm kiếm -->
        <div class="flex-grow max-w-md mx-auto">
          <!-- Input tìm kiếm -->
          <div class="flex items-center">
            <input 
              type="text" 
              placeholder="Tìm kiếm" 
              class="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none"
            />
            <!-- Nút tìm kiếm -->
            <button class="ml-2 p-1 rounded-full hover:bg-black focus:outline-none">
              <i class="bx bx-search p-1 text-4xl text-white"></i>
            </button>
          </div>
        </div>
  
        <!-- Góc phải: Các biểu tượng khác -->
        <div class="flex items-center space-x-4">
          <!-- Icon Video -->
          <button>
            <i class="bx bx-video text-4xl text-white"></i>
          </button>
  
          <!-- Icon Bell -->
          <button>
            <i class="bx bx-bell text-4xl text-white "></i>
          </button>
  
          <!-- Avatar tròn -->
          <button>
            <i class='bx bx-user-circle text-4xl text-white'></i>
          </button>
  
          <!-- Nút chuyển đổi giữa chế độ tối và sáng -->
          <button @click="toggleTheme" class="ml-2">
            <i v-if="isDarkMode" class="bx bx-sun text-4xl text-white"></i>
            <i v-else class="bx bx-moon text-4xl text-white"></i>
          </button>
        </div>
      </div>
  
      <!-- Thanh Nav (Side Drawer) -->
      
    </div>
  </template>
  
  <script>
  import 'boxicons/css/boxicons.min.css'; // Import Boxicons
  
  export default {
    name: 'Header',
    data() {
      return {
        isDarkMode: false, // Bắt đầu với chế độ sáng
        isNavOpen: false,  // Trạng thái mở/đóng thanh nav
      }
    },
    methods: {
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
          document.documentElement.classList.add('dark'); // Thêm chế độ tối
        } else {
          document.documentElement.classList.remove('dark'); // Xóa chế độ tối
        }
      },
      toggleNav() {
        this.isNavOpen = !this.isNavOpen; // Mở hoặc đóng thanh nav
      }
    }
  }
  </script>
  
  <style scoped>s
  /* Dark mode styles */
  .dark {
    background-color: #1a202c; /* Dark background */
    color: #f7fafc; /* Light text */
  }
  
  /* Transition for nav drawer */
  .transition-transform {
    transition: transform 0.3s ease-in-out;
  }
  
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 50;
  }

@media (max-width: 768px) {
   /* Thu nhỏ các biểu tượng */
 .md\:text-4xl {
    font-size: 2rem;
  }
  .text-4xl {
    font-size: 1.5rem;
  }
}
@media (min-width: 768px) {
  /* Đảm bảo các phần giữ kích thước cố định */
  .flex-none > div {
    flex-shrink: 0;
  }
 
}

  </style>
  