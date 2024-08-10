import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const latNumber = lat ? parseFloat(lat) : null;
  const lngNumber = lng ? parseFloat(lng) : null;

  return [latNumber, lngNumber];
}
