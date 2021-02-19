import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

import food1 from '../../assets/comida_1.svg';
import food2 from '../../assets/comida_2.svg';
import food3 from '../../assets/comida_3.svg';
import food4 from '../../assets/comida_4.svg';
import blocoServicesImg from '../../assets/bloco_services.svg';
import blogImg1 from '../../assets/blog_image_1.svg';
import blogImg2 from '../../assets/bloco_image_2.svg';
import blogImg3 from '../../assets/bloco_image_3.svg';
import blogImg4 from '../../assets/bloco_image_4.svg';

import {
  Container,
  Content,
  ContetNewRecipe,
  Header,
  NewRecipe,
  BestRecipes,
  BestServices,
  OurBlog,
} from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <ContetNewRecipe>
        <Header>
          <h1>Healthy Food</h1>
          <div>
            <ul>
              <li>
                <Link to="/">HEALTHY RECIPES</Link>
              </li>
              <li>
                <Link to="/">BLOG</Link>
              </li>
              <li>
                <Link to="/">JOIN</Link>
              </li>
              <li>
                <Link to="/" id="register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </div>
        </Header>
        <NewRecipe>
          <div>
            <h2>Ready for Trying a new recipe?</h2>
            <div>
              <input type="text" placeholder="Search healthy recipes" />
              <button type="button">
                <FiSearch />
              </button>
            </div>
          </div>
        </NewRecipe>
      </ContetNewRecipe>
      <BestRecipes>
        <div id="textBestRecipes">
          <h2>Our Best Recipes</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div id="divCardsRecipe">
          <div className="cardRecipe">
            <img src={food1} alt="Food1" />
            <div>
              <p>Broccoli Salad with Bacon</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
          <div className="cardRecipe">
            <img src={food2} alt="Food2" />
            <div>
              <p>Classic Beef Burgers</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
          <div className="cardRecipe">
            <img src={food3} alt="Food3" />
            <div>
              <p>Classic Potato Salad</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
          <div className="cardRecipe">
            <img src={food4} alt="Food4" />
            <div>
              <p>Cherry Cobbler on the Grill</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
        </div>
      </BestRecipes>
      <BestServices>
        <img src={blocoServicesImg} alt="Services" />
        <div>
          <h2>The best services ready To serve you</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button type="button">Know More</button>
        </div>
      </BestServices>
      <OurBlog>
        <div id="textOurBlog">
          <h2>Read Our Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div id="divCardsBlog">
          <div className="cardBlog">
            <Link to="/">
              <img src={blogImg1} alt="Imagem Blog 1" />
              <div className="descriptionCardBlog">
                <p>Quick-start guide to nuts and seeds</p>
                <div className="descriptionNameAvatar">
                  <div className="imgAvatar">
                    <FaUser size={30} />
                  </div>
                  <p>Kevin Ibrahim</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cardBlog">
            <Link to="/">
              <img src={blogImg2} alt="Imagem Blog 2" />
              <div className="descriptionCardBlog">
                <p>Nutrition: Tips for Improving Your Health</p>
                <div className="descriptionNameAvatar">
                  <div className="imgAvatar">
                    <FaUser size={30} />
                  </div>
                  <p>Mike Jackson</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cardBlog">
            <Link to="/">
              <img src={blogImg3} alt="Imagem Blog 3" />
              <div className="descriptionCardBlog">
                <p>The top 10 benefits of eating healthy</p>
                <div className="descriptionNameAvatar">
                  <div className="imgAvatar">
                    <FaUser size={30} />
                  </div>
                  <p>Bryan McGregor</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cardBlog">
            <Link to="/">
              <img src={blogImg4} alt="Imagem Blog 4" />
              <div className="descriptionCardBlog">
                <p>What Makes a Healthy Diet?</p>
                <div className="descriptionNameAvatar">
                  <div className="imgAvatar">
                    <FaUser size={30} />
                  </div>
                  <p>Jashua</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </OurBlog>
    </Content>
  </Container>
);

export default Home;
