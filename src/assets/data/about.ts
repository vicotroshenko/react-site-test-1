import image1_2x from '../images/jpg/about-desctop-2x.jpg';
import image1 from '../images/jpg/about-desctop.jpg';
import image2 from '../images/png/about_desctop_2.png';
import image2_2x from '../images/png/about_desctop_2_2x.png';

const about = {
  name: 'про нас',
  title: 'Індивідуальний підхід та гнучкість для створення цифрових рішень',
  text: 'Наша команда працює над тим, щоб кожне рішення було максимально адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача.',
  images: {
    image1: image1,
    image1_2x: image1_2x,
    image2: image2,
    image2_2x: image2_2x,
  },
  statistic: [
    {
      number: '1250+',
      name: 'виконаних проектів',
    },
    {
      number: '10mln+',
      name: 'рядків коду',
    },
    {
      number: '99%',
      name: 'задоволених клієнтів',
    },
    {
      number: '85%',
      name: 'зростання бізнесу',
    },
  ],
};
export default about;
