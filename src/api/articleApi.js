import request from '@/utils/request';

const articleApi = {
  // 获取文章列表（分页）
  articleList(param = {}) {
    return request({
      url: '/article',
      method: 'get',
      params: param
    });
  },

  // 获取一条文章信息
  getarticleById(id) {
    return request({
      url: '/article/:id',
      method: 'get'
    });
  },

  // 添加一条文章信息
  insertarticle(param = {}) {
    return request({
      url: '/article',
      method: 'post',
      data: param
    });
  },

  // 更改一条文章信息
  editarticle(param = {}) {
    return request({
      url: '/article',
      method: 'put',
      data: param
    });
  },

  // 删除一条文章信息
  deletearticle(param = {}) {
    return request({
      url: '/article',
      method: 'delete',
      data: param
    });
  }
};

export default articleApi;
