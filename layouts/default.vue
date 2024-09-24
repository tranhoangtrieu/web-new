<template>
      <header>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary"  style="padding: 0;   ">
                <div class="container-fluid"  style="background-color:#264B96 ; position: relative;">
                  <img src="/images/logo.png" alt="logo" style="width: 45px;height: 45px; margin-top: 10px;margin-left: 140px;">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style="margin-top: 20px;margin-bottom: 10px;">
                    <ul class="navbar-nav mb-2 mb-lg-0" style="gap: 20px">

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Giới thiệu
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Giải pháp
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sản phẩm
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Liên hệ
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> 


                 
                       <div>
                        <button class="btn btn-warning buttonLogin" @click="openModal" > Đăng Nhập</button>
                      <Login ref="loginModal" />
                       </div>
                        <button type="button" class="btn btn-primary buttonConnect">Kết nối với chúng tôi    
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg> 
                    </button>
                    </ul>
                    </div>
                </div>
                </nav>

        </div>
      </header>

      <main>
        <NuxtPage />
       
      </main>
       
       <footer class="footer container-fluid">
    <div class="footer-content">
      <div class="footer-section company-info" >
        <img src="/images/logo.png" alt="logo" style="width: 45px;height: 45px; margin-bottom: 30px;">
       <div style="width: 200px; margin-left: 120px;"> 
        <p>
          Công ty TNHH Công Nghệ Hữu Pháp là đơn vị tiên phong trong lĩnh vực cung cấp
          giải pháp công nghệ thông tin toàn diện tại Việt Nam.
        </p>
       </div>
      </div>

      <div class="footer-section links">
        <h4>Giới thiệu</h4>
        <ul>
          <li><a href="#">Chung</a></li>
        </ul>
      </div>

      <div class="footer-section links">
        <h4>Giải pháp</h4>
        <ul>
          <li><a href="#">Công nghệ</a></li>
        </ul>
      </div>

      <div class="footer-section contact">
        <h4>Liên hệ</h4>
        <p>Địa chỉ: Số 12 đường số 2, Phường Bình Hưng Hoà B, Quận Bình Tân, TP Hồ Chí Minh</p>
        <a href="#" class="contact-button">Xem thêm &rarr;</a>
      </div>
    </div>

    <div class="footer-bottom">
      

      <ul class="footer-policy">
        <li><a>Terms & privacy</a></li>
        <li><a>Security</a></li>
        <li><a>Status</a></li>
      </ul>

      <div class="footer-copyright">
        <p>&copy;2021 Công ty TNHH Công nghệ hữu pháp</p>
      </div>

      <div class="footer-social">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  </footer> 
  
  </template>

  <style>



.navbar-nav .nav-link, 
.navbar-nav{
    color: white;
}
.dropdown:hover .dropdown-menu{
    display: block;
}
.buttonLogin{
    background-color: #FFE492;
}
.buttonConnect{
    background-color: #4F9CF9;
}
footer {
  background-color: #264b96;
  color: white;
  padding: 20px;
  text-align: center;
  width: 1920px;
  max-height: 503px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  height: 350px;
  margin-top: 40px;
}

.footer-section {
  flex: 1;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
}

.footer-section .contact-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  padding: 20px 0;
  font-size: 14px;
}

.footer-language {
  flex: 1;
}

.footer-policy {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  flex: 2;
  justify-content: center;
}

.footer-social {
  flex: 1;
}

.footer-social a {
  margin: 0 10px;
  color: white;
  font-size: 18px;
}

.footer-social a:hover {
  color: #ccc;
}


</style>

<script setup >
import { ref, onMounted, onUnmounted } from 'vue'

const loginModal  = ref(null)

const buttonVisible = ref(false)

const handleScroll = () => {
 
  const scrollPosition = window.scrollY
  buttonVisible.value = scrollPosition > 100
}
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 1,          
      behavior: 'smooth'  
    })
  }
function openModal(){
  loginModal.value.open()
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


</script>
  