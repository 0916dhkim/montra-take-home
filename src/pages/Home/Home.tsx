import { NavLink } from "react-router-dom";
import Review from "./Review";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="container flex flex-col">
        <h1 className="text-4xl font-bold text-center">Book of the Month!</h1>
        <div className="my-4">
          <NavLink className="float-left p-2 w-1/8" to="/products/1713426">
            <img
              className="w-full"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1255573980i/1713426.jpg"
            />
          </NavLink>
          <p>
            Why do our headaches persist after taking a one-cent aspirin but
            disappear when we take a 50-cent aspirin?
          </p>
          <p>
            Why does recalling the Ten Commandments reduce our tendency to lie,
            even when we couldn't possibly be caught?
          </p>
          <p>
            Why do we splurge on a lavish meal but cut coupons to save
            twenty-five cents on a can of soup?
          </p>
          Why do we go back for second helpings at the unlimited buffet, even
          when our stomachs are already full?
          <p>
            And how did we ever start spending $4.15 on a cup of coffee when,
            just a few years ago, we used to pay less than a dollar?
          </p>
          <p>
            When it comes to making decisions in our lives, we think we're in
            control. We think we're making smart, rational choices. But are we?
          </p>
          <p>
            In a series of illuminating, often surprising experiments, MIT
            behavioral economist Dan Ariely refutes the common assumption that
            we behave in fundamentally rational ways. Blending everyday
            experience with groundbreaking research, Ariely explains how
            expectations, emotions, social norms, and other invisible, seemingly
            illogical forces skew our reasoning abilities.
          </p>
          <p>
            Not only do we make astonishingly simple mistakes every day, but we
            make the same "types" of mistakes, Ariely discovers. We consistently
            overpay, underestimate, and procrastinate. We fail to understand the
            profound effects of our emotions on what we want, and we overvalue
            what we already own. Yet these misguided behaviors are neither
            random nor senseless. They're systematic and predictable--making us
            "predictably" irrational.
          </p>
          <p>
            From drinking coffee to losing weight, from buying a car to choosing
            a romantic partner, Ariely explains how to break through these
            systematic patterns of thought to make better decisions.
            "Predictably Irrational" will change the way we interact with the
            world--one small decision at a time.
          </p>
        </div>
        <h1 className="text-4xl font-bold text-center my-4">Reviews</h1>
        <Review
          reviewer="Mary"
          body="This book was somewhat entertaining, but I can't really recommend it. The author does experiments with college students and beer, and extrapolates this into a world view. Most of his applications are anecdotal."
        />
        <Review
          reviewer="Trevor"
          body="It is important that you move this one up your list of books that you have to read. This is a particularly great book. My dear friend Graham recommended I read this book. He has recommended four books to me – and the only one I couldn’t finish was “My Cousin, My Gastroenterologist: A novel” by Mark Leyler – but he did recommend, “The Tetherballs of Bougainville” also by Leyler and that is still one of the most remarkable books I've ever read. I haven't written a review of that book, but where the hell would I start?"
        />
      </div>
    </div>
  );
}
