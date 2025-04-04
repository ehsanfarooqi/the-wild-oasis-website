import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  //   const settings = await getSettings();
  //   const booking = await getBookedDatesByCabinId(params.cabinId);
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-1 min-h-[400px] md:grid-cols-2 border border-primary-800">
      <DateSelector cabin={cabin} bookedDate={bookedDate} settings={settings} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
