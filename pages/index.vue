<template>

<div class="container-fluid" 
       style="background-image: url('/_nuxt/images/Element.png'); background-color: #264B96; min-height: 60vh; background-repeat: no-repeat; background-position: center; background-size: cover; padding: 100px;">
       
       <a @click="scrollToTop" class="scroll-top  d-flex align-items-center justify-content-center" v-show="buttonVisible"  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg> </a>
       <div class="row align-items-center h-100">
      
      
      <div class="col-6  order-1 order-lg-2 text-white m-auto position-relative">
        <div class="position-absolute top-50 start-50 translate-middle fs-4 box-shadow-sm">
          <h2 style="color: #FFDC4D;">CÔNG TY TNHH</h2>
          <h2 style="color: #FFDC4D;">CÔNG NGHỆ HỮU PHÁP</h2>
          <p class="fs-6">Công ty TNHH Hữu Pháp là doanh nghiệp chuyên cung cấp các giải pháp</p>
          <button type="button" class="btn btn-primary buttonConnect button">
            Đọc thêm
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
        </div>
      </div>

   
      <div class="col-6 d-flex  order-1 order-lg-2 justify-content-center align-items-center" data-aos="zoom-out" data-aos-delay="200">
        <img src="/images/image1.png" class="img-fluid" style="width: 717px; height: 400px;">
      </div>
    </div>
  </div>


    <div class="container-fluid" >
        <div class="row align-items-center h-100 align-self-center">
          <div class="col-6 text-white m-auto p-auto position-relative">
            <div class="position-absolute top-50 start-50 translate-middle fs-4 box-shadow-sm m-3">
               <div style="color: black;">
                        <h2 > Sứ mệnh </h2>
                    <p class="fs-6">Công ty TNHH Công nghệ Hữu Pháp luôn hướng tới việc cung cấp các giải pháp công nghệ tối ưu, giúp khách hàng cải thiện hiệu quả kinh doanh, tối ưu hóa quy trình làm việc và đảm bảo an ninh thôn tin</p>    
               </div>
                <button type="button" class="btn btn-success button"> Đọc thêm 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg> 
                </button>
            </div>
          </div>
        <div class="col-6 row align-items-center h-100">
            <div class="col"></div>
            <img src="/images/image3.png"  class="col-6 m-5 ">
            <div class="col"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid" >
        <div class="row align-items-center h-100 align-self-center">
          
        <div class="col-6 row align-items-center h-100">
            <div class="col"></div>
            <img src="/images/image2.png"  class="col-6 m-5 ">
            <div class="col"></div>
        </div>
        <div class="col-6 text-white m-auto p-auto position-relative">
            <div class="position-absolute top-50 start-50 translate-middle fs-4 box-shadow-sm m-3">
               <div style="color: black;">
                        <h2 >  Các dịch vụ</h2>
                    <p class="fs-6">Công ty TNHH Công nghệ Hữu Pháp cung cấp các giải pháp đảm bảo an ninh thôn tin giám sát kỹ thuật, cảnh báo, bảo mật, và phát triển phần mềm</p>    
               </div>
                <button type="button" class="btn btn-success button"> Đọc thêm 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg> 
                </button>
            </div>
          </div>
      </div>
    </div>
    
    <div class="container-fluid " style="background-color:#264B96 ;min-height: 50vh;background-repeat: no-repeat; background-position: center; background-size: cover;padding: 80px;" >

          <div class="row align-items-center h-100 align-self-center">
            <div class="col-6 text-white m-auto p-auto position-relative">
                <div class="position-absolute top-50 start-50 translate-middle fs-4 box-shadow-sm">
                    <h2 > Giá trị cốt lõi</h2>
              
                <p class="fs-6">Luôn đặt chất lượng sản phẩm và dịch vụ lên hàng đầu, đảm bảo khách hàng nhận được sự hỗ trợ tốt nhất </p>
            <button type="button" class="btn btn-success button"> Đọc thêm 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg> 
                    </button>
                </div>
            </div>
            <div class="col-6 row align-items-center h-100">
                <div class="col"></div>
                <img src="/images/image4.png"  class="col-6">
                <div class="col"></div>
            </div>
          </div>
</div>

        
    <div class="container-fluid " style="background-color:#264B96 ;min-height: 40vh;background-repeat: no-repeat; background-position: center; background-size: cover; padding-bottom: 40px;" >

        <div class="row align-items-center h-100 align-self-center">
          <div class="col-6 row align-items-center h-100">
              <div class="col"></div>
              <img src="/images/image5.png"  class="col-6">
              <div class="col"></div>
          </div>
          <div class="col-6 text-white m-auto p-auto position-relative">
              <div class="position-absolute top-50 start-50 translate-middle fs-4 box-shadow-sm">
                  <h2 >Chính sách bảo mật</h2>
            
              <p class="fs-6"> Công ty TNHH Công Nghệ Hữu Pháp cam kết bảo vệ thông tin cá nhân và dữ liệu của khách hàng </p>
          <button type="button" class="btn btn-success button"> Đọc thêm 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                          </svg> 
                  </button>
              </div>
          </div>
         
        </div>
    </div>

            
        <div class="container-fluid" style="min-height: 80vh; padding-bottom: 30px;">
          <h1 class="title text-center" style="margin-top: 50px;">Dịch vụ chính</h1>
          <div class="d-flex justify-content-center  flex-wrap">
            
            <div class="card m-3" style="width: 18rem; max-width: 100%;">
              <div class="card-body">
                <h2 class="card-title">Phát triển phần mềm theo yêu cầu</h2>
                <ul class="list-unstyled">
                  <li><img src="/images/image6.png" style="width: 20px; height: 20px;" /> Thiết kế và phát triển phần mềm tùy chỉnh theo yêu cầu của doanh nghiệp.</li>
                  <li><img src="/images/image6.png" style="width: 20px; height: 20px;" /> Cung cấp phần mềm quản lý doanh nghiệp (ERP, CRM, POS, ...).</li>
                  <li><img src="/images/image6.png" style="width: 20px; height: 20px;" /> Ứng dụng di động (iOS, Android) và giải pháp web.</li>
                </ul>
                <button class="btn btn-light">Bắt đầu</button>
              </div>
            </div>

            <div class="card m-3 blue-card" style="width: 18rem; max-width: 100%;">
              <div class="card-body">
                <h2 class="card-title">Giải pháp hệ thống thông tin</h2>
                <ul class="list-unstyled ">
                  <li><img src="/images/image7.png" style="width: 20px; height: 20px;" /> Thiết kế và triển khai hệ thống mạng, máy chủ, và hệ thống bảo mật thông tin.</li>
                  <li><img src="/images/image7.png" style="width: 20px; height: 20px;" /> Giải pháp lưu trữ và bảo mật dữ liệu cho doanh nghiệp.</li>
                  <li><img src="/images/image7.png" style="width: 20px; height: 20px;" /> Dịch vụ điện toán đám mây (Cloud Computing) và điện toán biên (Edge Computing).</li>
                </ul>
                <button class="btn btn-success">Bắt đầu</button>
              </div>
            </div>

            <div class="card m-3" style="width: 18rem; max-width: 100%;">
              <div class="card-body">
                <h2 class="card-title">Dịch vụ tư vấn công nghệ</h2>
                <ul class="list-unstyled">
                  <li><img src="/images/image6.png" style="width: 20px; height: 20px;" /> Tư vấn chiến lược công nghệ thông tin cho doanh nghiệp.</li>
                  <li><img src="/images/image6.png" style="width: 20px; height: 20px;" /> Đánh giá hệ thống hiện tại và đề xuất giải pháp nâng cấp, tối ưu hóa.</li>
                  <li><img src="/images/image6.png" style="width: 20px; height: 20px;" /> Dịch vụ bảo mật và an ninh mạng.</li>
                </ul>
                <button class="btn btn-light">Bắt đầu</button>
              </div>
            </div>

          </div>
        </div>
    
       <div class="container-fluid text-center text-white" style="background-color:#264B96 ;min-height: 30vh;padding-top: 20px;padding-bottom: 30px; " >
        <h2 style="margin-bottom: 30px;margin-top: 20px;"> Dự án tiêu biểu</h2>
            <div><p> Công ty TNHH Công Nghệ Hữu Pháp đã và đang hợp tác với nhiều doanh nghiệp lớn và nhỏ trong nhiều ngành nghề khác nhau, từ tài chính, thương mại điện tử, đến giáo dục và chăm sóc sức khỏe</p></div>
          
            <button type="button" class="btn btn-success button" style="margin-top: 30px;">Xem thêm 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg> 
                    </button>
      </div> 
      <div class="container-fluid" style="min-height: 50vh;padding-top: 40px;" >
        <div class="row align-items-center h-100 align-self-center">
          <div class="col-6 text-white m-auto p-auto position-relative">
            <div class="position-absolute top-50 start-50 translate-middle fs-4 box-shadow-sm m-3">
               <div style="color: black;">
                        <h2 > Đội ngũ của chúng tôi </h2>
                    <p class="fs-6">Chúng tôi tự hào về đội ngũ nhân viên tài năng, trẻ trung và đầy nhiệt huyết. Tất cả các thành viên của Hữu Pháp đều có nền tảng chuyên môn vững chắc và kinh nghiệm thực chiến trong các dự án lớn, đảm bảo mang lại kết quả tốt nhất cho khách hàng</p>    
               </div>
                <button type="button" class="btn btn-success button"> Xem thêm
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style="margin-left: 5px;">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg> 
                </button>
            </div>
          </div>
        <div class="col-6 row align-items-center h-100">
            <div class="col"></div>
            <img src="/images/image8.png"  class="col-6 m-5 " style="min-height: 331px;min-width: 672px;">
            <div class="col"></div>
        </div>
      </div>
    </div>

    <div class="container-fluid text-center text-success " style=" min-height: 40vh;" >
        <h2 style="margin-bottom: 20px;margin-top: 20px;"> Khách hàng và đối tác</h2>
            
        <img src="/images/image9.png" style="max-width: 1482px;max-height: 71px; position: absolute; left: 240px; margin-top: 50px;" >
          
      </div> 
   
      
  </template>

  <script setup>
      import { ref, onMounted, onUnmounted } from 'vue'
      import AOS from 'aos'
      import 'aos/dist/aos.css'
  


      onMounted(() => {
        AOS.init()})
  

        const buttonVisible = ref(true)

        const handleScroll = () => {
        const scrollTopButton = document.querySelector('.scroll-top');

                if (document.documentElement.scrollTop  > 300) {

          scrollTopButton.classList.add('scroll-top-active');

        } else {

          scrollTopButton.classList.remove('scroll-top-active');

        }
      }
      

        const scrollToTop = () => {
          window.scrollTo({
            top: 0,          
            behavior: 'smooth'  
          })
        }

        onMounted(() => {
        window.addEventListener('scroll', handleScroll)
      })

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })

    </script>

  
  <style scoped>
 

 .scroll-top {
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #00c3ff;
    color: white;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 50px; 
    font-size: 24px;   
    opacity: 0;      
    transition: opacity 400ms ease; 
  }
  .scroll-top-active {
  opacity: 1;
}
  .background-image {
    object-fit: cover;
  }
  
  .button{
    width: 159px;
    height: 53px;
    padding: 20px, 40px, 20px, 40px;
    gap: 10px;
    margin-top: 30px;
  }
  .button-1{
    width: 137px;
    height: 50px;
    padding:16px, 40px, 16px, 40px;
   
  } .button-2{
    width: 137px;
    height: 50px;
    padding:16px, 40px, 16px, 40px;
    border:2px solid #f5d770;
  }

  
  .title {
  font-size: 36px;
  color: #006c0f;
  margin-bottom: 40px;
}

.card {
  background-color: white;
  border: 2px solid #f5d770;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  height: 537px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
.blue-card {
  background-color: #264b96;
  color: white;
  border: none;
}
  </style>
  