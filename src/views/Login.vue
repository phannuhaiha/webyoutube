<template>
    <div class="flex w-screen h-screen items-center justify-center"> 
        <div class="flex md:flex-row flex-col w-[80%] max-w-[1200px] h-[60%] max-h-[800px] bg-gray-200 rounded-xl " >
            <!-- tieeu de -->
             <div class=" flex flex-col text-black text-arial md:ml-8 md:mt-8 md:w-1/4 w-auto h-1/3 items-center md:items-start">
                <!-- Logo -->
                 <div class="bg-auto items-center rounded-full py-2 text-white text-2xl font-bold" style="width: 120px; height: 70px;">
                   <img src="../components/icons/Logo.png" class="flex w-full h-full">
                 </div>
                <h1 class="text-2xl text-bold justify-center">ĐĂNG KÍ TÀI KHOẢN MỚI</h1> 
             </div>
             <!-- thong tin co ban -->
            <div class="flex flex-col justify-center text-xl gap-5 md:w-1/3 w-auto md:h-auto h-[50%] p-3 ">
                <!-- ho ten -->
                 <div class="flex flex-col gap-8  w-auto h-[30%] ">
                    <!-- ho -->
                    <div class="flex flex-col gap-1 w-auto h-[30%] ">
                        <label>Nhập họ của bạn: </label>
                        <input id="lastname" placeholder=" Nhập họ của bạn (không bắt buộc)" class="flex rounded">
                    </div>
                    <!-- ten -->
                    <div class="flex flex-col w-auto gap-1 h-[30%]">
                        <label>Nhập tên của bạn: </label>
                        <input id="fistname" placeholder=" Nhập tên của bạn (bắt buộc)" class="flex rounded">
                    </div>
                 </div>
                 
                 <!-- ngay+than+nam sinh -->
                 <div class="flex md:flex-row flex-col gap-5 w-auto h-[15%] ">
                    <!-- ngay -->
                     <div class="flex flex-col justify-between w-[35%] h-[10%]">
                        <label>Ngày: </label>
                        <input type="number" id="quantity" name="quantity" min="1" max="31" step="1" class="flex rounded ">
                     </div>
                     <!-- thang -->
                     <div class="flex flex-col justify-between w-[35%] h-[10%]">
                        <label>Tháng: </label>
                        <input type="number" id="quantity" name="quantity" min="1" max="12" step="1" class="flex rounded">
                     </div>
                     <!-- nam -->
                     <div class="flex flex-col justify-between w-[35%] h-[10%]">
                        <label>Năm: </label>
                        <input type="number" id="quantity" name="quantity" min="1900" max="2024" step="1" class="flex rounded">
                     </div>           
                 </div>
                 <!-- Gioi tinh -->
                 <div class="flex flex-row justify-between gap-5 w-[75%] h-[12%] ">
                    <div class="flex flex-row gap-5 w-auto h-auto">
                        <label>Giới tính: </label>
                        <select name="sex" id="sex" class="flex rounded">
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Giới tính thứ ba"> Giới tính thứ ba</option>
                        </select>
                    </div>
                 </div>
            </div>
            <!-- thong tin dang nhap -->
            <div class="flex flex-col justify-center gap-6 text-xl md:w-1/3 w-auto md:h-auto h-[50%] p-3 ">
                <!-- email -->
                <div class="flex flex-col gap-1 w-auto h-[15%] ">
                    <label>Nhập địa chỉ email: </label>
                    <input id="email" placeholder=" Nhập địa chỉ email" class="flex rounded">
                </div>
                <!-- mật khẩu -->
                <div class="flex flex-col gap-1 w-auto h-[15%] ">
                    <label>Nhập mật khẩu: </label>
                    <div class="relative flex items-center">
                    <!-- Input mật khẩu -->
                     <input v-model="password" :type="isPasswordVisible ? 'text' : 'password'" placeholder="Nhập mật khẩu" class="flex rounded border-gray-300 w-full p-2"/>
                    <!-- Nút mở/đóng -->
                     <button type="button" @click="togglePasswordVisibility" class="absolute right-2 text-gray-500">{{ isPasswordVisible ? '🙈' : '👁️' }}</button>
                    </div>
                </div>
                 <!-- nhap lai mật khẩu -->
                 <div class="flex flex-col gap-1 w-auto h-[15%] ">
                    <label>Nhập lại mật khẩu: </label>
                    <div class="relative flex items-center">
                    <!-- Input mật khẩu -->
                     <input v-model="confirmPassword" :type="isPasswordVisible ? 'text' : 'password'" placeholder="Nhập lại mật khẩu" class="flex rounded border-gray-300 w-full p-2"/>
                    <!-- Nút mở/đóng -->
                     <button type="button" @click="togglePasswordVisibility" class="absolute right-2 text-gray-500">{{ isPasswordVisible ? '🙈' : '👁️' }}</button>
                    </div>
                    <p v-if="passwordsMatch === false" class="text-red-500 text-sm">Đã nhập sai mật khẩu</p>
                </div>
                <button class="flex items-center justify-center rounded-3xl bg-blue-900 w-20 h-10">
                    <text class="text-sm text-black">Đăng ký</text>
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            isPasswordVisible: false, // Trạng thái ẩn/hiện mật khẩu
            password: '',
            confirmPassword: '',
            lastname: '',
            firstname: '',
            email: '',
        };
    },
    computed: {
        passwordsMatch() {
            return this.password === this.confirmPassword;
        }
    },
    methods: {
        togglePasswordVisibility() {
            // Thay đổi trạng thái của mật khẩu
            this.isPasswordVisible = !this.isPasswordVisible;
        }
    }

}
</script>

<style>

</style>