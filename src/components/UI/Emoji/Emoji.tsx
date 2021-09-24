import maleImage from '../../../images/emojies/male.png';
import femaleImage from '../../../images/emojies/female.png';
import girlImage from '../../../images/emojies/girl.png';
import boyImage from '../../../images/emojies/boy.png';
import classes from './Emoji.module.scss';
import clsx from 'clsx';

const Image = {
  male: maleImage,
  female: femaleImage,
  girl: girlImage,
  boy: boyImage,
};

interface IProps {
  name: keyof typeof Image;
  size?: 'small' | 'medium' | 'large';
}

const Emoji = ({ name, size }: IProps) => (
  <img
    src={Image[name]}
    alt={`The ${name} icon from WhatsApp`}
    className={clsx(classes.root, classes[size ?? 'small'])}
  />
);

export default Emoji;
