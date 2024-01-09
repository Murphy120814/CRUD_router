import React from "react";
import { format, parseISO } from "date-fns";
import { capitalize } from "../../constant";
function UserCard({ field, value }) {
  if (field == "timeOfCreation" || (field == "lastUpdated" && value !== null)) {
    value = parseISO(value);
    value = format(value, "MMMM d, yyyy, h:mm a");
  }
  return (
    <div className="mb-2  mt-8 flex items-center justify-start gap-4 ">
      <label className="flex w-4/12 font-bold text-black" htmlFor={field}>
        {capitalize(field)}:
      </label>
      <div id={field} className="flex w-8/12  text-black">
        {value ?? "Not yet Updated"}
      </div>
    </div>
  );
}

export default UserCard;
