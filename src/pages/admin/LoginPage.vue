<template>
  <div class="container bg-white d-flex justify-center">
    <div class="wrapper">
      <img src="../../assets/logo/ttlab-logo.png" />
      <h1>Đăng nhập</h1>
      <div class="dang-nhap">
        <v-form class="form d-flex flex-column align-start" @submit.prevent>
          <label for="Email">Email</label>
          <input
            type="text"
            name="Email"
            class="email-input"
            required="required"
            placeholder="Nhập email"
          />
          <label for="Password">Mật khẩu</label>
          <input
            type="text"
            name="Password"
            class="email-input"
            required="required"
            placeholder="Nhập password"
          />
          <div class="forgot-password d-flex align-center">
            <input type="checkbox" />
            <span>Ghi nhớ đăng nhập</span>
            <a href="/">Quên mật khẩu</a>
          </div>
          <v-btn class="dang-ky" flat type="submit" block>Đăng nhập</v-btn>
          <div class="action">
            <span>Bạn chưa có tài khoản? </span>
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
  .wrapper {
    margin-top: 119px;
    max-width: 426px;

    img {
      max-width: 108px;
      margin-bottom: 24px;
      margin: 0 159px;
    }

    h1 {
      font-family: Public Sans, sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;
      text-align: left;
      margin: 18px 130px 32px 130px;
    }
    .dang-nhap {
      .form {
        .email-input {
          width: 425px;
          height: 32px;
          border: 1px solid #868fa029;
          box-shadow: 0px 1px 2px 0px #0000000f;
          border-radius: 0.5rem;
          padding: 6px 12px;

          font-family: Public Sans, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          text-align: left;
          color: #a1a9b8;
          margin-bottom: 24px;
        }
        label {
          font-family: Public Sans, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.02em;
          text-align: left;
          color: #464f60;
          margin-bottom: 8px;
        }
        .forgot-password {
          max-width: 426px;
          font-family: Public Sans, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          text-align: left;

          input {
            margin-right: 8px;
          }
          span {
            margin-right: 170px;
          }
          a {
            text-decoration: none;
            color: #0f60ff;
          }
        }
        .dang-ky {
          background-color: #0f60ff;
          color: #ffffff;
          margin-top: 24px;

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
