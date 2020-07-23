import { Cart } from 'models/cart';
import CookieHelper, { setCookie } from 'utils/cookie';
import _ from 'lodash';

class CartHelper {
  private CART_COOKIE_NAME = 'ADD_CART_ID';

  public getCartList() {
    const cookie = CookieHelper.getCookie(this.CART_COOKIE_NAME);

    if (!cookie) {
      return [];
    }

    return JSON.parse(cookie);
  }

  public get cartList(): Cart[] {
    const cookie = CookieHelper.getCookie(this.CART_COOKIE_NAME);

    if (!cookie) {
      return [];
    }

    return JSON.parse(cookie);
  }

  private getAvailIdsByPartnerId(cartData: Cart): Cart[] {
    const { partnerId: id } = cartData;

    const cartItem = this.cartList.find(({ partnerId }) => partnerId === id);

    if (cartItem === undefined) {
      return [...this.cartList, cartData];
    }

    return this.cartList.map(({ partnerId, adTimeIds }) => {
      return partnerId === id
        ? {
            partnerId,
            adTimeIds: _.uniq([...adTimeIds, ...cartData.adTimeIds]),
          }
        : { partnerId, adTimeIds };
    });
  }

  public addCart(cookieValue: Cart) {
    const { partnerId, adTimeIds: availId } = cookieValue;
    const setCookieData = this.getAvailIdsByPartnerId(cookieValue);

    const setData: setCookie = {
      cookieName: this.CART_COOKIE_NAME,
      cookieValue: JSON.stringify(setCookieData),
      days: 1,
    };

    CookieHelper.setCookie(setData);
  }

  public removeCart(id: number) {
    // TODO: 장바구니 삭제하는 기능 만들어야함
  }
}

export default new CartHelper();
