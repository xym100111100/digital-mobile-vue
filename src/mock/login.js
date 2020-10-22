import des from '../plugins/des';
import Mock from 'mockjs';
const Random = Mock.Random;
const login = {
    admin: {
        roles:Random.first(),
        introduction: '超级管理员',
        name:Random.cname(),
        uid: Random.integer(0,100)
    },
    tourist: {
        roles:Random.first(),
        introduction: '游客',
        name: Random.cname(),
        uid: Random.integer(0,100)
    },
    developer: {
        roles: Random.first(),
        introduction: '普通管理员',
        name: Random.cname(),
        uid: Random.integer(0,100)
    }
}

export default {
    login: config => {
      const { username }= JSON.parse(des.decryptByDES(config.body));
      if(login[username]){
        let resp = {'respCode':'0000'};
        let result = Object.assign({},login[username],resp);
        return des.encryptJsonStr(result);
      }else {
        let errorMessage = {'respDesc': '查询不到此用户!','respCode':'9999'};
        return des.encryptJsonStr(errorMessage);
      }
    },
    logout: () => 'success',
};
