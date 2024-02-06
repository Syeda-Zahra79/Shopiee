import { Star, RatingContainer } from "@/ui/components/StarRating.style";

const StarRating = ({ rate }) => {
  let i = 0;
  return (
    <RatingContainer>
      {[...Array(5)].map((star) => {
        i++;
        if (i <= rate) {
          return (
            <Star key={i} style={{ color:"#ffb901" }}>
              &#9733;
            </Star>
          );
        } else {
          return <Star key={i}>&#9733; </Star>;
        }
      })}
    </RatingContainer>
  );
};

export default StarRating;
