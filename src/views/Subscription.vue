<template>
  <div class="m-5 bg-white dark:bg-customLight relative">
    <h1 class="bg-auto text-3xl font-bold text-black dark:text-white">KÊNH ĐÃ ĐĂNG KÍ</h1>
    <!-- nội dung chính -->
    <div class="flex flex-col bg-auto m-5 dark:bg-customLight ">
      <!-- AVT + TEN KENH -->
      <button class="flex flex-row text-black dark:text-white">
        <div class="flex w-7 h-7 rounded-full items-center mr-2 bg-gray-400"></div>
        <!-- ten kenh -->
        <div class="text-lg font-arial font-medium">{{ video.channel }}</div>
      </button>

      <!-- list video -->
      <div class="flex flex-row w-auto h-52 bg-white dark:bg-customLight rounded-xl pt-2 ">
        <!-- mot video -->
        <button v-for="(video, index) in videos":key="index" class="flex flex-col bg-auto rounded-xl text-black" style="width: 100%">
          <!-- Video Container -->
          <div class="video-wrapper rounded-auto overflow-hidden">
            <video
              :src="video.src"
              controls
              ref="videoElement"
              class="video rounded-xl">
            </video>
          </div>
          <!-- Tiêu đề và thông tin -->
          <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row">
             <!-- Avatar -->
              <div class="flex w-7 h-7 rounded-full items-center pl-2 bg-gray-400"></div>
             <!-- Tiêu đề -->
              <div class="flex flex-col justify-left text-left text-black dark:text-white">
                <h1 class="text-lg font-arial font-medium">{{ video.title }}</h1>
                <h2>{{ video.views }} lượt xem</h2>
              </div>
            </div>
           
          </div>
        </button>

        <!-- nút chuyển phải -->
        <button class="absolute right-0 top-2/3 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full" @click="nextSlide">
          <i class="bx bx-chevron-right text-2xl"></i>
        </button> 
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Subscription",
  data() {
    return {
      videos: [
        { src: "video1.mp4", title: "Video 1", views: "10K" },
        // { src: "video2.mp4", title: "Video 2", views: "20K" },
        // { src: "video3.mp4", title: "Video 3", views: "15K" },
        // { src: "video4.mp4", title: "Video 4", views: "30K" },
        // { src: "video5.mp4", title: "Video 5", views: "5K" },
        // { src: "video6.mp4", title: "Video 6", views: "8K" },
      ],
      currentIndex: 0, // Vị trí hiện tại
      maxIndex: 0, // Tổng số slide
    };
  },
  computed: {
    maxIndex() {
      // Số lượng slide khả dụng
      return Math.max(this.videos.length - 3, 0);
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex += 1;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
  },
};
</script>

<style>
.video-wrapper {
  aspect-ratio: 16 / 9; /* Đảm bảo tỷ lệ video */
}
</style>
