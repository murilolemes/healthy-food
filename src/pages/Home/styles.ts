import styled from 'styled-components';

import Illustration from '../../assets/Illustration.svg';

export const Container = styled.div``;

export const Content = styled.div``;

export const ContetNewRecipe = styled.div`
  height: 768px;
  padding: 0 160px;
  background: url(${Illustration}) no-repeat top right;
`;

export const Header = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    color: #badc58;
  }

  div {
    ul {
      display: flex;
      align-items: center;

      li {
        height: 52px;
        color: #fff;
        font-weight: 600;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;

        & + li {
          margin-left: 32px;
        }

        a {
          width: 130px;
          height: 52px;
          border: 0;
          text-decoration: none;
          background: #fff;
          color: #badc58;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export const NewRecipe = styled.div`
  height: 600px;

  display: flex;
  align-items: center;

  div {
    width: 412px;
    height: 284px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 48px;
      line-height: 70px;
    }

    div {
      width: 100%;
      height: 52px;
      flex-direction: row;

      input {
        flex: 1;
        height: 100%;
        padding: 0 16px;
        margin-right: 16px;
        border: 1px solid #2d3561;
        border-radius: 5px;
        color: #9e9baf;

        ::placeholder {
          color: #b4b4b4;
        }
      }

      button {
        width: 52px;
        height: 100%;
        background: #badc58;
        border: 0;
        color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export const BestRecipes = styled.div`
  height: 768px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #textBestRecipes {
    width: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 32px;
      line-height: 70px;
    }

    p {
      text-align: center;
      line-height: 27px;
    }
  }

  #divCards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 32px;

    .card {
      width: 528px;
      height: 226px;
      margin: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      box-shadow: 0 15px 20px;

      img {
        width: 254px;
        height: 226px;
      }

      div {
        width: 100%;
        padding: 32px;

        p {
          font-family: 'Montserrat';
          font-size: 24px;
          font-weight: bold;
          line-height: 34px;
          color: #1d164d;
        }

        button {
          width: 134px;
          height: 48px;
          border: 0;
          border-radius: 7px;
          font-size: 16px;
          margin-top: 16px;
          background: #badc58;
          color: #fff;
        }
      }
    }
  }
`;
