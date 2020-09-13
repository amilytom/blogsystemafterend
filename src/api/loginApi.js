import request from '@/utils/request';

const loginApi = {
  // 登录
  login(param = {}) {
    return request({
      url: '/login',
      method: 'post',
      data: param
    });
  }
};

export default loginApi;
