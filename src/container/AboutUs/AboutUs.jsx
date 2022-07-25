import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A good restaurant sets a high standard for its food quality and ensures that guests receive the same quality with every meal. Serving quality food can earn your restaurant a good reputation and compel your guests to return for repeat visits.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">In 1945, Rich Products was born when our founder Robert E. Rich, Sr. created the world’s first non-dairy whipped topping. Over the next 75 years, we’ve paved our way, pioneering many of the food industry’s most game-changing products, setting – and resetting – a new benchmark of success.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
