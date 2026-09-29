// Drawing geometry for the room. Not a rental term.

type t_DeskBox = {
  x: number;
  w: number;
  topY: number;
};

type t_ChooseSlot = (category: t_CategoryId) => void;
