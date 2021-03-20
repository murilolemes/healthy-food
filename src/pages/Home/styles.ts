import styled from 'styled-components';
// import { shade } from 'polished';

import Illustration from '../../assets/Illustration.svg';
import BlocoFinal from '../../assets/bloco_final_image.svg';

export const Container = styled.div`
  @media (max-width: 425px) {
    width: 425px;
  }

  @media (min-width: 426px) {
    max-width: 768px;
  }
`;

export const Content = styled.div``;

export const ContetNewRecipe = styled.div`
  /* height: 768px; */
  /* padding: 0 132px; */
  display: flex;
  flex-direction: column;
  background: url(${Illustration}) no-repeat top right;

  @media (max-width: 499px) {
    width: 100%;
    height: 744px;
    background-position: -216px;
    padding: 0;
  }
`;

export const Header = styled.div`
  /* width: 100%; */
  /* height: 102px; */
  display: flex;
  /* align-items: center;
  justify-content: space-between; */

  h1 {
    /* font-size: 32px; */
    color: #badc58;
  }

  div {
    ul {
      display: flex;
      align-items: center;

      li {
        /* height: 52px; */
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
          /* width: 130px; */
          /* height: 52px; */
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
`;

export const NewRecipe = styled.div`
  /* height: 600px; */

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* width: 412px; */
  /* height: 284px; */

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

      /* :hover {
        box-shadow: 0 0 10px #fff;
      } */

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
    }
  }
`;

export const BestRecipes = styled.div`
  /* height: 768px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  #textBestRecipes {
    /* width: 510px; */
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
      /* width: 528px; */
      /* height: 226px; */
      margin: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      box-shadow: 0 15px 20px;

      /* img {
        width: 254px;
        height: 226px;
      } */

      div {
        width: 100%;
        /* padding: 32px; */

        p {
          font-family: 'Montserrat';
          /* font-size: 24px; */
          font-weight: bold;
          line-height: 34px;
          color: #1d164d;
        }

        button {
          /* width: 134px; */
          /* height: 48px; */
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
`;

export const BestServices = styled.div`
  /* height: 768px; */
  display: flex;
  align-items: center;

  div {
    /* width: 398px; */

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

    img {
      display: none;
    }

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
`;

export const OurBlog = styled.div`
  width: 100%;
  /* height: 768px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  #textOurBlog {
    /* width: 510px; */
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
    /* padding-left: 100px; */

    #divCardsBlog {
      display: flex;
      align-items: center;
      overflow-x: hidden;
      /* padding: 40px; */

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
            /* width: 348px; */
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
`;

export const Member = styled.div`
  width: 100%;
  height: 672px;
  display: flex;
  align-items: center;
  background: url(${BlocoFinal}) no-repeat top right;
  /* padding: 0 132px; */
  /* margin-bottom: 50px; */

  #contentMember {
    /* width: 454px; */
    /* height: 168px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
        padding: 24px;
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
        box-shadow: 0 0 10px #badc58;
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
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* padding: 0 132px; */

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

  #privacyTerms {
    /* justify-content: flex-end; */

    p {
      /* margin-left: 32px; */
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

        svg {
          margin-right: 5px;
          opacity: 0.8;
        }
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
`;
