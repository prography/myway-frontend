type cookieName = string;
type cookieValue = string | number;

interface setCookie {
  cookieName: cookieName;
  cookieValue: cookieValue;
  days: number;
}

class CartHelper {
  private CART_COOKIE_NAME = 'ADD_CART_ID';

  private get cartList(): string[] {
    const cookie = this.getCookie(this.CART_COOKIE_NAME);

    if (!cookie) {
      return [];
    }

    return cookie.split(':');
  }

  private setCookie({ cookieName, cookieValue, days }: setCookie) {
    // 쿠키 유효기간 설정
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);

    const value = `${escape(cookieValue.toString())}${
      days == null ? '' : `;    expires=${exdate.toUTCString()}`
    }`;

    document.cookie = `${cookieName}=${value}`;
  }

  private getCookie(cookieName: string) {
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

  public addCart(cookieValue: string) {
    const setData: setCookie = {
      cookieName: this.CART_COOKIE_NAME,
      cookieValue,
      days: 1,
    };

    this.setCookie(setData);
  }

  public removeCart(id: number) {
    // TODO: 장바구니 삭제하는 기능 만들어야함
  }
}

export default new CartHelper();
