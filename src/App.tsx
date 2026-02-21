
import { Presentation } from './Presentation';
import { CoverSlide } from './slides/CoverSlide';
import { IntroSlide } from './slides/IntroSlide';
import { ResearchSlide } from './slides/AnalyticsSlide';
import { OutroSlide } from './slides/OutroSlide';

function App() {
  return (
    <Presentation>
      <CoverSlide />
      <IntroSlide />
      <ResearchSlide />
      <OutroSlide />
    </Presentation>
  );
}

export default App;
