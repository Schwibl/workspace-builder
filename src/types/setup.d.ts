// The renter's current workspace selection and the color theme of the room.

type t_Setup = {
  deskId: t_DeskId | null;
  chairId: t_ChairId | null;
  monitorId: t_MonitorId;
  lampId: t_LampId;
  plantId: t_PlantId;
};

type t_Theme = "light" | "dark";

type t_LineItem = {
  slot: string;
  name: string;
  weeklyUsd: number;
};
