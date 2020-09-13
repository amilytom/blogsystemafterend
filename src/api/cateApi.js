import request from '@/utils/request';

const cateApi = {
  // 获取分类列表（分页）
  cateList(param = {}) {
    return request({
      url: '/cate',
      method: 'get',
      params: param
    });
  },

  // 获取一条分类信息
  getcateById(id) {
    return request({
      url: '/cate/:id',
      method: 'get'
    });
  },

  // 添加一条分类信息
  insertcate(param = {}) {
    return request({
      url: '/cate',
      method: 'post',
      data: param
    });
  },

  // 更改一条分类信息
  editcate(param = {}) {
    return request({
      url: '/cate',
      method: 'put',
      data: param
    });
  },

  // 删除一条分类信息
  deletecate(param = {}) {
    return request({
      url: '/cate',
      method: 'delete',
      data: param
    });
  }
};

export default cateApi;
