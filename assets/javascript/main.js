







// function renderproduct(){
//     var htmls = "";
//     for(var i = 0;i<10;i++){
//         htmls = htmls + `<div class="column column__pc-20">
//         <div class="contain_new-product-main">
//             <div class="contain_newproduct-img">
//                 <img src="./assets/images/caylanytrongnuoc.webp" alt="" class="newproduct_img">
//             </div>
//             <div class="contain_newproduct-description">
//                 <h3 class="contain_newproduct-name">
//                     Cây lan ý trong nước
//                 </h3>
//                 <div class="contain_newproduct-price">
//                     <h6 class="newproduct_realprice">
//                         230.000đ
//                     </h6>
//                     <h6 class="newproduct_saleprice">
//                         450.000đ
//                     </h6>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     }
//     document.querySelector('.renderProducts').innerHTML = htmls;
// }


//  renderproduct();

//  function renderProductdesktop(){
//    var htmlf = `<div class="column column__pc-40">
//    <img src="./assets/images/sec_deal_banner_1.webp" alt="" class="desktop_img">
// </div>`;
// for(var i = 0;i<8;i++){
//   htmlf = htmlf + `<div class="column column__pc-20">
//   <div class="desktop_main">
//       <div class="desktop_main-img">
//           <img src="./assets/images/caylanytrongnuoc.webp" alt="" class="desktop_product_img">
//       </div>
//       <div class="desktop_main-description">
//           <h3 class="desktop_main-name">
//               Cây lan ý trong nước
//           </h3>
//           <div class="desktop_main-price">
//               <h6 class="desktop_main_realprice">
//                   230.000đ
//               </h6>
//               <h6 class="desktop_main_saleprice">
//                   450.000đ
//               </h6>
//           </div>
//       </div>
//   </div>
// </div>`;
// }
// document.querySelector('.desktop_render').innerHTML = htmlf;


//  }
//  renderProductdesktop();







//  login and register

let captcha = new Array();

function createCaptcha() {
  const activeCaptcha = document.querySelector('.show_captcha');
  for (var q = 0; q < 6; q++) {
    if (q % 2 == 0) {
      captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    } else {
      captcha[q] = Math.floor(Math.random() * 10 + 0);
    }
  }
  theCaptcha = captcha.join("");
 
  activeCaptcha.innerHTML = `${theCaptcha}`;
  
}
createCaptcha();

function validateCaptcha() {
    // const errCaptcha = document.getElementById("errCaptcha");
    const reCaptcha = document.getElementById("enter_captcha");
     var recaptcha = reCaptcha.value;
    console.log(recaptcha);
    let validateCaptcha = 0;
    for (var i = 0; i < 6; i++) {
      if (recaptcha.charAt(i) != captcha[i]) {
        validateCaptcha++;
      }
      //con rong 
    }
    // if (recaptcha == "") {
    //   errCaptcha.innerHTML = "Re-Captcha must be filled";
    // } else if (validateCaptcha > 0 || recaptcha.length > 6) {
    //   errCaptcha.innerHTML = "Wrong captcha";
    // } else {
    //   errCaptcha.innerHTML = "Done";
    // }
    if (recaptcha == "") {
        console.log("Chưa Nhập");
      } else if (validateCaptcha > 0 || recaptcha.length > 6) {
       console.log("Nhập Sai");
      } else {
        console.log("OK");
      }
  }

  function timeout(){
      const vartimeElement = document.querySelector('.captcha_time');
      var time = 4;
      setInterval(function(){
        console.log(1);
        vartimeElement.innerText = time;
        time = time -1;
        if(time ==-1){
            time = 4;
            createCaptcha();

        }

      },1000);
      
  }
  timeout();
  document.querySelector('.btn_change_captcha').onclick = function(){
//   timeout();
  createCaptcha();
  }
//other