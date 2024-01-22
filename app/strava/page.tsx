import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { headers, cookies } from "next/headers";
import { Activity } from "../api/strava/activities/activitySchema";
import { Map } from "../components/Map";

export const Page = async () => {
  const activities: Activity[] = await fetch(
    "http://localhost:3000/api/strava/activities",
    {
      method: "GET",
      headers: headers(),
    }
  ).then((res) => res.json());

  const activity = activities.find((activity) => activity.trainer === false);

  if (!activity) {
    return <div>No activity found</div>;
  }

  const stream = await fetch(
    `http://localhost:3000/api/strava/streams?id=${activity.id}`,
    {
      method: "GET",
      headers: headers(),
    }
  ).then((res) => res.json());

  return (
    <>
      <h1>Page</h1>
      {/* {JSON.stringify(stream)} */}

      <div>
        <Map
          defaultPosition={{ lat: 27, lng: 57 }}
          route={stream.latlng.data}
        />
      </div>
    </>
  );
};

export default Page;
