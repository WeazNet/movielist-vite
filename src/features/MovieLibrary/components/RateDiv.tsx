import { getRatingClassName } from "../../../services/utils";

export const RateDiv = ({ vote_average }: { vote_average: number }) => {
  return (
    <div
      className={
        getRatingClassName(vote_average) +
        " absolute overflow-hidden ring-4 text-xl z-20 top-[.6em] left-[.6em] font-black rounded-full bg-[rgba(0,0,0,0.4)] w-[40px] h-[40px] pl-[.25em] pt-[.25em]"
      }
    >
      <span>{vote_average.toFixed(1)}</span>
    </div>
  );
};
