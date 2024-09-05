import React from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/images/svg/arrow.svg';
import { ReactComponent as BurgerMenuIcon } from '../../assets/images/svg/burger.svg';
import CustomButton from '../CustomButton/CustomButton.component';

function App() {
  return (
    <div>
      <CustomButton variant="PRIMARY">замовити</CustomButton>
      <CustomButton variant="SLIDER_LEFT">
        <ArrowIcon />
      </CustomButton>
      <CustomButton variant="MOBILE">
        <BurgerMenuIcon />
      </CustomButton>
    </div>
  );
}

export default App;
