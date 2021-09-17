import classes from './ArticleHeaderImage.module.scss';

interface IProps {
  src: string;
  alt: string;
}

const ArticleHeaderImage = ({ src, alt }: IProps) => (
  <div className={classes.root}>
    <img src={src} alt={alt} />
  </div>
);

export default ArticleHeaderImage;
