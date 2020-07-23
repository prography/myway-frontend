import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'components/Layout/Container';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from 'store/pay/action';
import { uploadAd } from 'store/ad/action';
import { Partner } from 'models/partner';
import swal from 'sweetalert';

interface Props {
  partnerInfo: Partner;
  timeList: number[];
}

const OrderFormPage: React.FC<Props> = (props: any) => {
  const dispatch = useDispatch();
  const [fileState, setFileState] = useState<FormData>();
  const [payMethod, setPayMethod] = useState<
    undefined | 'card' | 'deposit' | 'transfer'
  >('card');
  const reservationId = useSelector(
    (state: StoreState) => state.pay.addReservation.items
  );

  useEffect(() => {
    if (reservationId === 0) return;
    dispatch(
      uploadAd({
        id: reservationId,
        file: fileState,
      }),
    );
  }, [reservationId]);

  const { register, handleSubmit } = useForm();
  const { partnerInfo, timeList } = props;

  const OrderPrice = useMemo(() => {
    return partnerInfo.pricePerHour * timeList.length;
  }, [partnerInfo, timeList]);

  const handleClickPaymentMethodBtn = useCallback(
    (method: 'card' | 'deposit' | 'transfer') => {
      setPayMethod(method);
    },
    [],
  );

  const onSubmit = (data: any) => {
    const { company_name, tel_1, tel_2, tel_3, email, ad } = data;

    if (!company_name || !tel_1 || !tel_2 || !tel_3 || !email || !ad) {
      alert('항목을 전부 입력해주세요');
      return;
    }

    const formData = new FormData();

    formData.append('ad-img', ad[0]);
    setFileState(formData);

    const { IMP } = window;


    IMP.request_pay(
      {
        // param
        pg: 'inicis',
        pay_method: 'card',
        merchant_uid: `${new Date().getTime()}`,
        name: 'COPL',
        amount: `${OrderPrice}`,
        buyer_email: email,
        buyer_name: company_name,
        buyer_tel: `${tel_1}-${tel_2}-${tel_3}`,
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      async (rsp: any) => {
        if (rsp.success) {
          dispatch(
            addReservation({
              impUid: rsp.imp_uid,
              merchantUid: rsp.merchant_uid,
              payMethod: rsp.pay_method,
              paidAmount: rsp.paid_amount,
              pgTid: rsp.pg_tid,
              paidAt: rsp.paid_at,
              adTimes: timeList,
            }),
          );

          // 결제 성공 시 로직,
        } else {
          console.log(rsp);
          console.log('error');
          // 결제 실패 시 로직,
        }

        await swal('결제 완료', '결제가 완료되었습니다.', 'success');

        window.location.href = '/';
      },
    );
  };

  return (
    <PlacesWrapper>
      <PageTitle>주문하기</PageTitle>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <OrderFormWrapper>
            <OrderFormContainer>
              <OrderFormGroup>
                <SecitonTitle>주문정보</SecitonTitle>
                <OrderFormItem>
                  <OrderFormInputTitle>사업자명</OrderFormInputTitle>
                  <OrderFormInput name="company_name" ref={register} />
                </OrderFormItem>
                <OrderFormItem>
                  <OrderFormInputTitle>휴대폰번호</OrderFormInputTitle>
                  <OrderFormSelect ref={register} name="tel_1">
                    <option value="010">010</option>
                  </OrderFormSelect>
                  <NumberBar>-</NumberBar>
                  <OrderFormInput
                    type="number"
                    maxLength={3}
                    name="tel_2"
                    ref={register}
                  />
                  <NumberBar>-</NumberBar>
                  <OrderFormInput
                    type="number"
                    maxLength={3}
                    name="tel_3"
                    ref={register}
                  />
                </OrderFormItem>
                <OrderFormItem>
                  <OrderFormInputTitle>이메일</OrderFormInputTitle>
                  <OrderFormInput name="email" type="email" ref={register} />
                  {/* <OrderFormInput name="emailId" />
                  <NumberBar>@</NumberBar>
                  <OrderFormInput name="emailDomain" placeholder="직접입력" /> */}
                </OrderFormItem>
                <OrderFormItem>
                  <OrderFormInputTitle>광고</OrderFormInputTitle>
                  <OrderFormInput name="ad" type="file" ref={register} />
                </OrderFormItem>
                {/* <OrderFormItem>
                  <OrderFormInputTitle>지출증빙</OrderFormInputTitle>
                  <RadioLabel>
                    <input type="radio" name="evidence" />
                    세금계산서
                  </RadioLabel>
                  <RadioLabel>
                    <input type="radio" name="evidence" />
                    현금영수증
                  </RadioLabel>
                </OrderFormItem>
                <OrderFormItem>
                  <OrderFormInputTitle>발행용도</OrderFormInputTitle>
                  <RadioLabel>
                    <input type="radio" name="purpose" />
                    소득공제용 (일반, 개인용)
                  </RadioLabel>
                  <RadioLabel>
                    <input type="radio" name="purpose" />
                    지출증빙용 (사업자용)
                  </RadioLabel>
                </OrderFormItem>
                <OrderFormItem>
                  <OrderFormInputTitle>발행정보</OrderFormInputTitle>
                  <PurposeSelectWrap>
                    <OrderFormSelect>
                      <option value="tel">휴대폰번호</option>
                    </OrderFormSelect>
                  </PurposeSelectWrap>
                  <OrderFormInput name="company_name" />
                  <NumberBar>-</NumberBar>
                  <OrderFormInput name="company_name" />
                  <NumberBar>-</NumberBar>
                  <OrderFormInput name="company_name" />
                </OrderFormItem> */}
              </OrderFormGroup>
              <PaymentMethodWrap>
                <SecitonTitle>결제방법</SecitonTitle>
                <PaymentMethodContainer>
                  <PaymentMethodItemWrapper>
                    <PaymentMethodItem
                      type="button"
                      onClick={() => handleClickPaymentMethodBtn('card')}
                      active={payMethod === 'card'}
                    >
                      신용/체크카드
                    </PaymentMethodItem>
                  </PaymentMethodItemWrapper>
                  {/* <PaymentMethodItemWrapper>
                    <PaymentMethodItem
                      type="button"
                      onClick={() => handleClickPaymentMethodBtn('deposit')}
                      active={payMethod === 'deposit'}
                    >
                      무통장입금
                    </PaymentMethodItem>
                  </PaymentMethodItemWrapper>
                  <PaymentMethodItemWrapper>
                    <PaymentMethodItem
                      type="button"
                      onClick={() => handleClickPaymentMethodBtn('transfer')}
                      active={payMethod === 'transfer'}
                    >
                      계좌이체
                    </PaymentMethodItem> 
                  </PaymentMethodItemWrapper> */}
                </PaymentMethodContainer>
              </PaymentMethodWrap>
            </OrderFormContainer>
            <ProductListWrapper>
              <SecitonTitle>제품정보</SecitonTitle>
              <ProductsContainer>
                <ProductItemWrapper>
                  <ProductItemImage>
                    <img src={partnerInfo.imgUrl} />
                  </ProductItemImage>
                  <ProductItemInfoContainer>
                    <ProductItemTitle>{partnerInfo.name}</ProductItemTitle>
                    <ProductItemAddress>
                      {partnerInfo.address}
                    </ProductItemAddress>
                    <ProductItemPrice>
                      {partnerInfo.pricePerHour}원 / 시간
                    </ProductItemPrice>
                  </ProductItemInfoContainer>
                </ProductItemWrapper>
              </ProductsContainer>
              <PriceResultWrapper>
                <span>총 결제금액</span>
                <span>{OrderPrice}원</span>
              </PriceResultWrapper>
              <SubmitButton>결제하기</SubmitButton>
            </ProductListWrapper>
          </OrderFormWrapper>
        </form>
      </Container>
    </PlacesWrapper>
  );
};

export default OrderFormPage;

const PlacesWrapper = styled.div`
  padding: 6.25rem 0;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Noto Sans KR Thin;
  text-align: center;
  margin-bottom: 1.875rem;
`;

const OrderFormWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }
`;

const OrderFormContainer = styled.div`
  margin-right: 3.9375rem;

  @media screen and (max-width: 1439px) {
    margin: 0;
  }
`;

const PaymentMethodWrap = styled.div`
  padding: 2.3125rem 0;
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PaymentMethodItemWrapper = styled.div`
  width: 33.3333%;
  padding: 0 0.4063rem;
`;

const PaymentMethodItem = styled.button<{ active?: boolean }>`
  width: 100%;
  border-radius: 50px;
  border: 1px solid #bbb;
  background-color: ${(props) => (props.active ? '#303033' : '')};
  color: ${(props) => (props.active ? '#fff' : '#101010')};
  padding: 0.9375rem 0;
  font-size: 0.9375rem;
`;

const SecitonTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: normal;
  margin-bottom: 1.5625rem;
`;

const OrderFormGroup = styled.div`
  max-width: 576px;
  width: 100%;
  border-top: 3px solid #25262b;
  border-bottom: 3px solid #25262b;
  padding: 2.5rem 0;

  @media screen and (max-width: 1439px) {
    max-width: 100%;
  }
`;

const OrderFormItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: initial;
  }
`;

const OrderFormInputTitle = styled.p`
  width: 127px;
  font-size: 1.125rem;
`;

const OrderFormInput = styled.input`
  min-width: 50px;
  font-size: 1.125rem;
  border: solid 1px #bbbbbb;
  background: none;
  flex: 1 0 0%;
  width: 100%;
  padding: 0.3rem;
  font-size: 0.9375rem;
  display: inline-block;
`;

const PurposeSelectWrap = styled.div`
  margin-right: 10px;
`;

const OrderFormSelect = styled.select`
  display: block;
  position: relative;
  padding: 0.3rem;
  font-size: 0.9375rem;
  border: solid 1px #bbbbbb;
  background: none;
  width: 135px;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const NumberBar = styled.span`
  padding: 0 0.3125rem;
`;

const ProductListWrapper = styled.div`
  box-shadow: 0 0 26.7px 2.3px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  max-width: 558px;
  width: 100%;

  @media screen and (max-width: 1439px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`;

const RadioLabel = styled.label`
  margin-right: 42px;
  font-size: 0.9688rem;

  input {
    margin-right: 5px;
  }
`;

const ProductsContainer = styled.div``;

const ProductItemWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const ProductItemImage = styled.div`
  width: 170px;
  height: 170px;
  border: 1px solid #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductItemInfoContainer = styled.div`
  padding: 18px;
`;

const ProductItemTitle = styled.p`
  font-size: 1.375rem;
  margin-bottom: 0.6875rem;
  font-weight: 500;
`;

const ProductItemAddress = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.6875rem;
`;

const ProductItemPrice = styled.p`
  font-size: 1.375rem;
`;

const PriceResultWrapper = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 1.75rem 0;
  justify-content: space-between;
  margin-bottom: 2.125rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #fe4600;
  color: #fff;
  font-size: 1.375rem;
  padding: 25px 0;
  border: 0;
`;
