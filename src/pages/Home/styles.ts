import styled from 'styled-components';

import Illustration from '../../assets/Illustration.svg';
import BlocoFinal from '../../assets/bloco_final_image.svg';
import blocoServicesImg from '../../assets/bloco_services.svg';

export const Container = styled.div`
  @media (max-width: 425px) {
    width: 425px;
  }

  @media (min-width: 426px) {
    max-width: 499px;
  }

  @media (min-width: 500px) {
    max-width: 768px;
  }

  @media (min-width: 769px) {
    max-width: 1024px;
  }

  @media (min-width: 1025px) {
    max-width: 1366px;
  }
`;

export const Content = styled.div``;

export const ContetNewRecipe = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${Illustration}) no-repeat top right;

  @media (max-width: 499px) {
    width: 100%;
    height: 744px;
    background-position: -216px;
    padding: 0;
  }

  @media (min-width: 500px) {
    width: 100%;
    height: 744px;
    padding: 15px 10px;
    background-position: -100px;
  }

  @media (min-width: 600px) {
    background-position: right;
    padding: 20px 30px;
  }
`;

export const Header = styled.div`
  display: flex;

  div {
    ul {
      display: flex;
      align-items: center;

      li {
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
          border: 0;
          text-decoration: none;
          color: #fff;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: font-size 0.2s;

          :hover {
            font-size: 18px;
          }
        }

        #register {
          border: 0;
          background: #fff;
          color: #badc58;
          border-radius: 5px;
          transition: box-shadow 0.2s;

          :hover {
            box-shadow: 0 0 8px #fff;
          }
        }
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;

    h1 {
      font-size: 40px;
      color: #fff;
    }

    div {
      margin-top: 10px;
      ul {
        li {
          a {
            text-align: center;
            color: #fff;
          }
          #register {
            width: 110px;
            height: 45px;
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 40px;
      color: #fff;
    }

    div {
      margin-top: 10px;
      ul {
        li {
          a {
            text-align: center;
            color: #fff;
          }
          #register {
            width: 110px;
            height: 45px;
          }
        }
      }
    }
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #badc58;
    }

    div {
      margin-top: 0;
      ul {
        li {
          height: 52px;
          a {
            font-size: 20px;
          }
          #register {
            width: 130px;
            height: 52px;
          }
        }
      }
    }
  }
`;

export const NewRecipe = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 48px;
    line-height: 70px;
  }

  div {
    width: 100%;
    height: 52px;
    display: flex;
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
      transition: box-shadow 0.4s;
      box-shadow: 0 0 5px #fff;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    justify-content: space-between;

    h2 {
      text-align: center;
      text-shadow: 0 0 10px #fff;
    }
  }

  @media (min-width: 500px) {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    h2 {
      max-width: 490px;
      text-align: center;
      text-shadow: 0 0 10px #fff;
    }

    div {
      width: 490px;
    }
  }

  @media (min-width: 1025px) {
    align-items: center;
    width: 490px;
    justify-content: center;
    align-items: center;

    h2 {
      max-width: 490px;
      text-align: left;
      text-shadow: 0 0 10px #fff;
    }

    div {
      width: 490px;
    }
  }
`;

export const BestRecipes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #textBestRecipes {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 32px;
      line-height: 70px;
    }

    p {
      text-align: center;
      line-height: 26px;
    }
  }

  #divCardsRecipe {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 32px;

    .cardRecipe {
      margin: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      box-shadow: 0 15px 20px;

      div {
        width: 100%;

        p {
          font-family: 'Montserrat';
          font-weight: bold;
          line-height: 34px;
          color: #1d164d;
        }

        button {
          border: 0;
          border-radius: 7px;
          font-size: 16px;
          margin-top: 16px;
          background: #badc58;
          color: #fff;
          transition: box-shadow 0.4s;

          :hover {
            box-shadow: 0 1px 15px #badc58;
          }
        }
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;
    padding: 0 10px;

    #textBestRecipes {
      width: 100%;
    }

    #divCardsRecipe {
      .cardRecipe {
        width: 100%;
        height: 172px;

        img {
          height: 100%;
        }

        div {
          width: 100%;
          height: 100%;
          padding: 10px;

          p {
            font-size: 18px;
          }

          button {
            width: 120px;
            height: 44px;
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    width: 100%;
    padding: 0 10px;

    #textBestRecipes {
      width: 490px;
    }

    #divCardsRecipe {
      .cardRecipe {
        width: 490px;
        height: 210px;

        img {
          width: 238px;
          height: 210px;
        }

        div {
          width: 100%;
          height: 100%;
          padding: 32px;

          p {
            font-size: 24px;
          }

          button {
            width: 134px;
            height: 48px;
          }
        }
      }
    }
  }
`;

export const BestServices = styled.div`
  display: flex;
  align-items: center;

  div {
    h2 {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 32px;
    }

    p {
      line-height: 28px;
      color: #bcbcbc;

      & + p {
        margin-top: 26px;
      }
    }

    button {
      width: 150px;
      height: 52px;
      margin-top: 48px;
      border: 0;
      border-radius: 5px;
      background: #badc58;
      color: #fff;
      transition: box-shadow 0.4s;

      :hover {
        box-shadow: 0 1px 15px #badc58;
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;
    padding: 15px 10px;
    background: none;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }

  @media (min-width: 500px) {
    width: 100%;
    justify-content: center;
    padding: 15px 10px;

    div {
      width: 490px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }

  @media (min-width: 962px) {
    height: 726px;
    justify-content: flex-end;
    background: url(${blocoServicesImg}) no-repeat top left;
  }

  @media (min-width: 1025px) {
    div {
      width: 490px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: left;
      }

      p {
        text-align: left;
      }
    }
  }

  @media (min-width: 1126px) {
    div {
      margin-right: 150px;
    }
  }
`;

export const OurBlog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #textOurBlog {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 32px;
      line-height: 70px;
    }

    p {
      text-align: center;
      line-height: 26px;
    }
  }

  #divContainerBlog {
    width: 100%;

    #divCardsBlog {
      display: flex;
      align-items: center;
      overflow-x: hidden;

      .cardBlog {
        max-width: 348px;
        height: 450px;
        border-radius: 7px;
        box-shadow: 0 0 10px;

        & + .cardBlog {
          margin-left: 24px;
        }

        a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          height: 100%;

          img {
            height: 248px;
          }

          .descriptionCardBlog {
            width: 100%;
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            p {
              font-family: 'Montserrat';
              font-size: 24px;
              font-weight: bold;
              line-height: 34px;
              color: #1d164d;
            }

            .descriptionNameAvatar {
              width: 100%;
              display: flex;
              align-items: center;

              .imgAvatar {
                width: 52px;
                height: 52px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 3px #bcbcbc;
                margin-right: 10px;

                svg {
                  color: #bcbcbc;
                  opacity: 0.5;
                }
              }

              p {
                font-family: 'Mulish';
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                color: #9e9baf;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;

    #textOurBlog {
      padding: 0 10px;
    }

    #divContainerBlog {
      width: 100%;

      #divCardsBlog {
        padding: 20px;
      }
    }
  }

  @media (min-width: 500px) {
    width: 100%;

    #textOurBlog {
      width: 490px;
      padding: 0 10px;
    }

    #divContainerBlog {
      width: 100%;

      #divCardsBlog {
        padding: 20px;
      }
    }
  }

  @media (min-width: 1025px) {
    #divContainerBlog {
      #divCardsBlog {
        padding: 30px;
      }
    }
  }
`;

export const Member = styled.div`
  width: 100%;
  height: 672px;
  display: flex;
  align-items: center;
  background: url(${BlocoFinal}) no-repeat top right;

  #contentMember {
    display: flex;

    h2 {
      font-size: 32px;
      line-height: 43px;
    }

    div {
      width: 100%;
      height: 52px;
      display: flex;

      input {
        width: 100%;
        border: 1px solid #707070;
        padding: 10px 24px;
        border-radius: 5px;

        ::placeholder {
          font-size: 16px;
          color: #9e9baf;
        }
      }

      button {
        width: 90px;
        border-radius: 5px;
        margin-left: 16px;
        background: #badc58;
        border: 0;
        box-shadow: 0 0 5px #fff;
        font-size: 16px;
        color: #fff;
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;
    padding: 0 10px;
    background-position: -180px;

    #contentMember {
      width: 100%;
      height: 100%;
      padding: 20px 0;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media (min-width: 500px) {
    width: 100%;
    padding: 0 10px;
    background-position: right;
    justify-content: center;

    #contentMember {
      width: 490px;
      height: 100%;
      padding: 20px 0;
      flex-direction: column;
      justify-content: center;

      div {
        margin-top: 20px;
      }
    }
  }

  @media (min-width: 769px) {
    justify-content: flex-start;
  }

  @media (min-width: 1025px) {
    padding: 0 30px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;

  div {
    width: 100%;
    display: flex;
    align-items: center;

    p {
      font-size: 16px;
    }
  }

  #copyRights {
    p {
      display: flex;
      align-items: center;
      color: #1d164d;

      svg {
        margin-right: 5px;
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 499px) {
    width: 100%;
    padding: 10px 10px;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      & + div {
        margin-top: 10px;
      }

      p {
        font-size: 14px;
      }
    }

    #copyRights {
      p {
        text-align: center;
      }
    }

    #privacyTerms {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        & + p {
          margin-top: 10px;
        }
      }
    }
  }

  @media (min-width: 500px) {
    width: 100%;
    padding: 10px 10px;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      & + div {
        margin-top: 10px;
      }

      p {
        font-size: 14px;
      }
    }

    #copyRights {
      p {
        text-align: center;
      }
    }

    #privacyTerms {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        & + p {
          margin-top: 10px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      & + div {
        margin-top: 0;
      }

      p {
        font-size: 14px;
      }
    }

    #privacyTerms {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      p {
        & + p {
          margin-top: 0;
          margin-left: 32px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    padding: 0 30px;
  }
`;
