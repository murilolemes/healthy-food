import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import food1 from '../../assets/comida_1.svg';
import food2 from '../../assets/comida_2.svg';
import food3 from '../../assets/comida_3.svg';
import food4 from '../../assets/comida_4.svg';

import {
  Container,
  Content,
  ContetNewRecipe,
  Header,
  NewRecipe,
  BestRecipes,
} from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <ContetNewRecipe>
        <Header>
          <h1>Healthy Food</h1>
          <div>
            <ul>
              <li>HEALTHY RECIPES</li>
              <li>BLOG</li>
              <li>JOIN</li>
              <li>
                <Link to="/">REGISTER</Link>
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
        <div id="divCards">
          <div className="card">
            <img src={food1} alt="Food1" />
            <div>
              <p>Broccoli Salad with Bacon</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
          <div className="card">
            <img src={food2} alt="Food2" />
            <div>
              <p>Classic Beef Burgers</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
          <div className="card">
            <img src={food3} alt="Food3" />
            <div>
              <p>Classic Potato Salad</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
          <div className="card">
            <img src={food4} alt="Food4" />
            <div>
              <p>Cherry Cobbler on the Grill</p>
              <button type="button">See Recipe</button>
            </div>
          </div>
        </div>
      </BestRecipes>
    </Content>
  </Container>
);

export default Home;
