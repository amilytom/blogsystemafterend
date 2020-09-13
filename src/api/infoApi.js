import request from '@/utils/request';

const infoApi = {

  // 获取一条博客信息
  getinfo(param = {}) {
    return request({
      url: '/info',
      method: 'get',
      params: param
    });
  },


  // 更改一条博客信息
  editinfo(param = {}) {
    return request({
      url: '/info',
      method: 'put',
      data: param
    });
  }

};

export default infoApi;
