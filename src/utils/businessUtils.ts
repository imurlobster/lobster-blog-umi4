import { history } from 'umi';
import { stringify } from 'querystring';

/**
 * 重定向至登录页
 */
export const toLoginPage = () => {
  history.replace({
    pathname: '/', //  默认首页
    search: stringify({
      redirect: window.location.href,
    }),
  });
};
