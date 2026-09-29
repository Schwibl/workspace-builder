// Catalog vocabulary for the Bali workspace rental designer.

type t_DeskId = "writing" | "mechanical" | "bamboo" | "electric" | "dual-motor";

type t_ChairId = "stool" | "task" | "mesh" | "executive";

type t_MonitorId = "none" | "fhd-24" | "fhd-27" | "fhd-32" | "ultrawide" | "dual-27";

type t_LampId = "none" | "clamp" | "led" | "arc";

type t_PlantId = "none" | "cactus" | "snake" | "monstera";

type t_DeskWidth = "compact" | "wide" | "full";

type t_ChairBack = "none" | "compact" | "tall";

type t_MonitorLayout = "none" | "small" | "single" | "large" | "ultrawide" | "dual";

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
