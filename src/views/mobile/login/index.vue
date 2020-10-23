<template>
  <div class="jcy-page">
    <main class="jcy-page-main">
      <div class="jcy-page-main-user">
        <div class="jcy-page-main-user-icon-1"></div>
        <div>
          <input v-model="username" placeholder="请输入用户名" type="text" />
        </div>
      </div>
      <div class="jcy-page-main-user">
        <div class="jcy-page-main-user-icon-2"></div>
        <div class="jcy-page-main-user-pwd">
          <input v-model="password" placeholder="请输入密码" type="text" />
        </div>
        <div class="jcy-page-main-user-pwd_icon"></div>
      </div>

      <div class="jcy-page-main-user">
        <div>
          <input v-model="code" placeholder="请输入验证码" type="text" />
        </div>
        <div @click="captchaImage" class="jcy-page-main-user_code">
          <img height="80%" width="80%" :src="imgCode" alt="" />
        </div>
      </div>

      <div class="jcy-page-main-pwd-edit">
        <div class="jcy-page-main-pwd-remember">
          <div></div>
          <div>记住密码</div>
        </div>
        <div>忘记密码？</div>
      </div>
      <div class="jcy-page-main-btn" @click="userLogin">登录</div>
    </main>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "2",
      password: "3",
      code: "4",
      uuid: "5",
      imgCode: "",
    };
  },
  methods: {
    userLogin() {
      let params = {
        username: this.username,
        password: this.password,
        code: this.code,
        uuid: this.uuid,
      
      };

      this.axios
        .doPost({
          url: "login",
          loading: true,
          data: params,
        })
        .then((data) => {
          console.log("登陆返回", data);
        })
        .catch((error) => {
          this.$toast.fail(error.msg);
        });
    },
    captchaImage() {
      console.log("sss");

      this.axios
        .doGet({
          url: "captchaImage",
          loading: true,
          data: {},
        })
        .then((data) => {
          console.log("--------------");
          console.log(data);
        })
        .catch((error) => {
          this.$toast.fail(error.msg);
        });
    },
    goPage(url) {
      // 切记子主路由切换的时候使用replace
      this.$router.replace(url);
    },
  },
};
</script>

<style scoped>
.jcy-page {
  background-image: url("../../../assets/images/deng-lu-ye@2x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  background-origin: border-box;
  font-family: PingFangSC-Regular, PingFang SC;
}
.jcy-page-main {
  width: 355px;
  height: 440px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin: 195px auto 0;
}
.jcy-page-main-user {
  width: 315px;
  height: 51px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e9e9e9;
  padding-top: 14px;
}
.jcy-page-main-user input {
  border: 0 none;
  border-radius: 0px;
  outline: none;
  font-size: 14px;
  color: #999999;
}
.jcy-page-main-user-icon-1,
.jcy-page-main-user-icon-2 {
  height: 18px;
  width: 18px;
  margin-right: 17px;
  background-size: 100%;
}

.jcy-page-main-user-icon-1 {
  background-image: url("../../../assets/images/yong-hu-ming@2x.png");
}
.jcy-page-main-user-icon-2 {
  background-image: url("../../../assets/images/mi-ma@2x.png");
}
.jcy-page-main-user-pwd {
  flex-grow: 1;
}

.jcy-page-main-user-pwd_icon {
  width: 50px;
  height: 50px;
  background-image: url("../../../assets/images/yan-jing@2x.png");
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center center;
}
.jcy-page-main-pwd div:nth-child(1) {
  width: 56px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
}
.jcy-page-main-pwd div:nth-child(2) {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #2a6cae;
  line-height: 20px;
}

.jcy-page-main-pwd-edit {
  display: flex;
  width: 315px;
  justify-content: space-between;
  margin: 8px auto 0;
}

.jcy-page-main-pwd-edit div:nth-child(2) {
  color: #2a6cae;
}

.jcy-page-main-pwd-remember {
  display: flex;
  align-items: center;
  height: 0.5rem;
  line-height: 0.5rem;
}

.jcy-page-main-pwd-remember div:nth-child(1) {
  height: 14px;
  width: 14px;
  border: solid 1px #dedede;
  margin-right: 10px;
  border-radius: 2px;
}

.jcy-page-main-pwd-remember div:nth-child(2) {
  color: #666666;
}

.jcy-page-main-user_code {
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jcy-page-main-btn {
  width: 315px;
  height: 40px;
  background: linear-gradient(90deg, #468fd7 0%, #3372b1 100%);
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #ffffff;
  font-size: 18px;
  margin: 57px auto 0;
}
.jcy-page-main-btn:active {
  background: rgba(11, 85, 221, 0.759);
}
</style>
