export type ReserveVariant = 'v1' | 'v2' | 'v3' | null;

export const RESERVE_EVENT = 'open-reserve';

export function openReserve(variant?: ReserveVariant) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(RESERVE_EVENT, { detail: { variant: variant ?? null } }),
  );
}
