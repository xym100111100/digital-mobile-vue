import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
    timeout: '200-600'
})

Mock.mock(/\/login\/login/,'post',loginAPI.login);
Mock.mock(/\/login\/logout/,'post',loginAPI.logout);


export default Mock
