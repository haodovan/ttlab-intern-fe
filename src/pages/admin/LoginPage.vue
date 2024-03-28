<template>
  <div class="container bg-white d-flex justify-center">
    <div class="wrapper">
      <img src="../../assets/ttlab-logo.png" />
      <h1>Đăng nhập</h1>
      <div class="dang-nhap">
        <v-form class="form d-flex flex-column align-start" @submit.prevent>
          <label for="Email">Email</label>
          <input name="Email" type="text" placeholder="Nhập email" />
          <label for="Password">Mật khẩu</label>
          <input name="Password" type="text" />
          <div class="forgot-password"></div>
          <v-btn class="mt-2 dang-ky" type="submit" block>Đăng nhập</v-btn>
          <div class="action">
            <span>Bạn chưa có tài khoản?</span>
            <a>Đăng ký</a>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .wrapper {
    margin-top: 119px;
    width: 426px;

    img {
      width: 108px;
      height: 60px;
      margin-bottom: 24px;
      margin: 0 159px;
    }

    h1 {
      font-family: Public Sans, sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;
      text-align: left;
      margin: 0 130px 32px 130px;
    }

    .dang-nhap {
      .form {
        input {
          width: 425px;
          height: 32px;
          padding: 6px 12px 6px 12px;
          border-radius: 6px 0px 0px 0px;
          margin-bottom: 24px;
          color: #a1a9b8;
          height: 32px;
          box-shadow: 0px 0px 0px 1px #868fa029;
        }
        label {
          font-family: Public Sans, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.02em;
          text-align: left;
          color: #464f60;
        }
        .dang-ky {
          background-color: #0f60ff;

          border-radius: 6px;
          padding: 14px 172px;
          height: 48px;
          text-transform: none;

          font-family: Public Sans, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          text-align: center;
        }
        .action {
          margin-top: 32px;
          margin-left: 108px;
          span {
            font-family: Public Sans, sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-align: center;
            color: #5a5c6f;
          }
          a {
            font-family: Public Sans, sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            text-align: center;
            color: #0f60ff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
