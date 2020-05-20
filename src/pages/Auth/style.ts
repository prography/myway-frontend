import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

export const Form = styled.form`
  width: 376px;
`;

export const Title = styled.h2`
  color: #101010;
  padding: 3.25rem 0 1.575rem 0;
  font-family: Noto Sans KR Light;
  font-size: 2.0rem;
  font-weight: 300;
`;

export const DetailTitle = styled.h2`
  display: flex;
  align-items: flex-start;
  color: #101010;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: -0.96px;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.625rem;
`;

export const CheckLabel = styled.label`
  display: flex;
`;

export const CheckTitle = styled.h2`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 450;
  line-height: 1.0;
  letter-spacing: -0.84px;
  text-align: center;
  color: #3e4042;
  padding: 0 0.2rem;
`;

export const Input = styled.input`
  width: 376px;
  height: 48px;
  border-radius: 3px;
  border: solid 1px #dcdcdc;
  padding: 1.0rem;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 1.0rem;

  ::placeholder {
    width: 133px;
    height: 15px;
    font-family: NotoSansCJKkr;
  }

  &:focus {
    border: solid 1px #3e4042;
  }
`;

export const Button = styled('button')<{color?: string}>`
  width: 376px;
  height: 48px;
  border-radius: 3px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  line-height: 3.25;
  text-align: center;
  background-color: ${(props) => props.color === 'orange' && '#fe4600'};
  color: ${(props) => props.color === 'orange' && '#ffffff'};
  border-radius: 3px;
  ${(props) => props.color !== 'orange' && `border: solid 1px #dcdcdc;`};
  margin-bottom: 1.25rem;

  &:hover {
    background-color: ${(props) => props.color !== 'orange' && '#0a0a32'};
    color: ${(props) => props.color !== 'orange' && '#ffffff'};
  }
`;

export const Hr = styled.hr`
  border: solid 0.6px #dcdcdc;
  margin-bottom: 1.25rem;
`;