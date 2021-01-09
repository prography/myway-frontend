type cookieName = string;
type cookieValue = string | number;

export interface setCookie {
  cookieName: cookieName;
  cookieValue: cookieValue;
  days: number;
}

class CookieHelper {
  public setCookie({ cookieName, cookieValue, days }: setCookie) {
    // 쿠키 유효기간 설정
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);

    const value = `${escape(cookieValue.toString())}${
      days == null ? '' : `;    expires=${exdate.toUTCString()}; path=/;`
    }`;

    document.cookie = `${cookieName}=${value}`;
  }

  public getCookie(cookieName: string) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const currentCookie = cookies[i];
      const name = currentCookie
        .substr(0, currentCookie.indexOf('='))
        .replace(/^\s+|\s+$/g, '');
      const value = currentCookie.substr(currentCookie.indexOf('=') + 1);

      if (cookieName === name) {
        return unescape(value);
      }
    }
  }
}

export default new CookieHelper();
