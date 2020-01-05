//域名
//const domain = window.location.host + "/api";

//端口
//const port = null;

//路径
const root = 'http://localhost:3000/mobile/api';

//接口
const api = {
  login:{
    login:`${root}/login`,
  }
};

export default Object.assign(
  {
    $base: {
      //domain: domain,
     // port: port,
      root: root,
    },

  },
  api
)
