import "./schedule.css"
import "../styles/y2t2.css"
import React from "react";
import scheduleData from "./scheduleData.json";
import scheduleEntry from "./ScheduleEntry";
import internal from "stream";

const Schedule:React.FC = () => {

    return (
        <>
            <div className={"Header"}>
                <h1>Time Committment Visualization</h1>
            </div>
            <div className={"schedule"}>
                <h3 className="time-slot">8:00 AM</h3>
                <h3 className="time-slot">9:00 AM</h3>
                <h3 className="time-slot">10:00 AM</h3>
                <h3 className="time-slot">11:00 AM</h3>
                <h3 className="time-slot">12:00 AM</h3>
                <h3 className="time-slot">1:00 PM</h3>
                <h3 className="time-slot">2:00 PM</h3>
                <h3 className="time-slot">3:00 PM</h3>
                <h3 className="time-slot">4:00 PM</h3>
                <h3 className="time-slot">5:00 PM</h3>
                <h3 className="time-slot">6:00 PM</h3>
                <h3 className="time-slot">7:00 PM</h3>
                <h3 className="time-slot">8:00 PM</h3>
                <h3 className="time-slot">9:00 PM</h3>
                <h3 className="time-slot">10:00 PM</h3>


                <h3 className="day-slot">  </h3>
                <h3 className="day-slot">Sunday</h3>
                <h3 className="day-slot">Monday</h3>
                <h3 className="day-slot">Tuesday</h3>
                <h3 className="day-slot">Wednesday</h3>
                <h3 className="day-slot">Thursday</h3>
                <h3 className="day-slot">Friday</h3>
                <h3 className="day-slot">Saturday</h3>
                {scheduleData.entries.map(
                    // (name:string, location:string, days:string[], starttime:number, endtime:number, hyperlink:string) ->
                    (value:any) => {
                        return scheduleEntry(value)
                    }
                )}
            </div>
        </>
);

}
export default Schedule;