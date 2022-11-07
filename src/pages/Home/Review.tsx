import classes from "./Review.module.css";

type ReviewProps = {
  reviewer: string;
  body: string;
};

export default function Review({ reviewer, body }: ReviewProps) {
  return (
    <div className={classes.review}>
      <div className={classes.reviewLeft}>
        <div className={classes.avatar} />
        <span className={classes.reviewer}>{reviewer}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
