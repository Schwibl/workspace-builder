// A rental request is a confirmation, not a card charge.

type t_RentalDraft = {
  setup: t_Setup;
  weeks: number;
  areaId: t_AreaId;
  name: string;
  email: string;
};

type t_RentalConfirmation = {
  requestId: string;
  weeks: number;
  weeklyUsd: number;
  totalUsd: number;
  areaName: string;
  items: t_LineItem[];
};

type t_RentalError = {
  error: string;
  fields?: Record<string, string>;
};
