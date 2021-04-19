import Loading from "./Loading";
import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
 
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import Loading from "./Loading";
// import React from "react";
// import { RoomConsumer } from "../context";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";

// function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer;
