// Catalog vocabulary for the Bali workspace rental designer.

type t_DeskId = "mechanical" | "electric" | "dual-motor";

type t_ChairId = "mesh" | "task";

type t_MonitorId = "none" | "fhd-27" | "ultrawide" | "dual-27";

type t_LampId = "none" | "led";

type t_PlantId = "none" | "snake";

type t_DeskWidth = "compact" | "wide" | "full";

type t_ChairBack = "tall" | "compact";

type t_MonitorLayout = "none" | "single" | "ultrawide" | "dual";

type t_AreaId = "canggu" | "ubud" | "seminyak" | "uluwatu" | "sanur";

type t_CategoryId = "desk" | "chair" | "monitor" | "lamp" | "plant";

type t_PricedItem = {
  id: string;
  name: string;
  blurb: string;
  weeklyUsd: number;
};

type t_DeskOption = t_PricedItem & {
  id: t_DeskId;
  width: t_DeskWidth;
};

type t_ChairOption = t_PricedItem & {
  id: t_ChairId;
  back: t_ChairBack;
};

type t_MonitorOption = t_PricedItem & {
  id: t_MonitorId;
  layout: t_MonitorLayout;
};

type t_LampOption = t_PricedItem & {
  id: t_LampId;
};

type t_PlantOption = t_PricedItem & {
  id: t_PlantId;
};

type t_AreaOption = {
  id: t_AreaId;
  name: string;
};
