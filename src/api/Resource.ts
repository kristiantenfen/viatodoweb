import request from '../utils/request';

/**
 * Simple RESTful resource class
 */
class Resource {
    uri;
    
  constructor(uri:string) {
    this.uri = uri;
  }
  list(query:object) {
    return request({
      url: '/' + this.uri,
      method: 'get',
      params: query,
    });
  }
  get(id:string) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'get',
    });
  }
  store(resource:object) {
    return request({
      url: '/' + this.uri,
      method: 'post',
      data: resource,
    });
  }
  update(id:string, resource:object) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'put',
      data: resource,
    });
  }
  destroy(id:string) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'delete',
    });
  }
}

export { Resource as default };
