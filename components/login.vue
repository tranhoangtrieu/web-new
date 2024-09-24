<template>
    <div v-if="isVisible" class="modal fade show d-block text-black" tabindex="-1" role="dialog" @click.self="close">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Đăng nhập</h5>
            <!-- <button type="button" class="close" aria-label="Close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button> -->
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleLogin">
              <div class="form-group">
                <label for="username">Tên đăng nhập:</label>
                <input v-model="username" type="text" class="form-control" id="username" required />
              </div>
              <div class="form-group">
                <label for="password">Mật khẩu:</label>
                <input v-model="password" type="password" class="form-control" id="password" required />
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top:20px ;">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isVisible = ref(false)
  const username = ref('')
  const password = ref('')
  
  function open() {
    isVisible.value = true
  }
  
  function close() {
    isVisible.value = false
  }
  
  function handleLogin() {
    // Xử lý đăng nhập ở đây
    console.log('Đăng nhập với', username.value, password.value)
    close()
  }
  
  defineExpose({ open, close })
  </script>
  
  <style scoped>
  .modal.fade.show.d-block {
    display: block;
  }
  
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  
  .modal-content {
    border-radius: 0.5rem;
  }
  
  .modal-header .close {
    margin: -0.5rem -0.5rem -0.5rem auto;
  }
  
  .modal-body {
    padding: 2rem;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  </style>
  