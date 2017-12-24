<style lang="sass" scoped>
.login_container
  margin: 40px auto
  padding-bottom: 50px
  width: 790px
  height: auto
  text-align: center

.logo
  display: block
  height: 50px
  margin-bottom: 40px

.content_box
  display: flex

.login_card
  padding: 32px 40px 70px
  width: 380px
  height: 430px
  box-shadow: 0 0 2px rgba(0,0,0,.1)
  background: #fff

  >.title
    margin-bottom: 32px
    font-size: 24px
    font-weight: 700

  .btn
    width: 100%

.form

  .find_pd
    display: block
    text-align: right
    font-size: 12px

.aside
  margin-top: 40px
  display: block
  font-size: 12px
  color: #666

.register_card
  @extend .login_card
  margin-left: 30px

  >.activity_box
    width: 300px
    height: 118px
    background: #d9af11
</style>

<template lang="pug">
.login_container
  router-link(to="/").logo.op_opacity: img(src="https://placehold.it/140x50")
  .content_box
    .login_card
      h2.title 你好，请登录
      el-form.form(:model="ruleForm" :rules="rules" ref="ruleForm")
        el-form-item(prop="username")
          el-input.input(v-model="ruleForm.username" placeholder="请输入邮箱或手机号")
        el-form-item(prop="password")
          el-input.input(v-model="ruleForm.password" type="password" placeholder="请输入密码")
          .find_pd: router-link(to="findPd").underline_hover 忘记密码
        el-form-item
          el-button.btn(type="primary" @click="submitForm") 登录

      router-link.aside(to="#")
        p 关于登录，
        p 需同意本公司的利用条约和隐私权条约。

    .register_card
      h2.title 新会员注册
      .activity_box
      el-button.btn.mt30(type="primary" plain) 注册账号

      router-link.aside(to="#")
        p 关于账户申请，
        p 需同意本公司的利用条约和隐私权条约。
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {
  rules = {
    username: [
      { required: true, message: '请输入邮箱或手机号', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  }
  ruleForm = {
    username: '',
    password: '',
  }

  submitForm() {
    this.$refs.ruleForm.validate((valid) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
}
</script>

