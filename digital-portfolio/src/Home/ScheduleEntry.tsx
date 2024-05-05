import React from "react";
import {Link} from "react-router-dom";

class Props {
    name: string;
    location: string;
    days: string[];
    starttime: number;
    endtime: number;
    color: string;
    hyperlink: string;
}

const ScheduleEntry:React.FC<Props> = (props) => {
    let dayEntries : string[] = props.days;

    // pickTextColor derived from this post
    // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    const pickTextColor = (bgColor:String) => {
        const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        const r = parseInt(color.substring(0, 2), 16); // hexToR
        const g = parseInt(color.substring(2, 4), 16); // hexToG
        const b = parseInt(color.substring(4, 6), 16); // hexToB
        return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
            "#000000" : "#ffffff";
    }

    const entryStyle = {
        backgroundColor: props.color,
        color: pickTextColor(props.color)
    }

    return (
        <>
            {dayEntries.map((day) => {
                if (props.hyperlink != "") {
                    return (
                        <div className={
                            day
                            + " " + props.name.replace(/\s/g, "",)
                            + " start-" + props.starttime
                            + " end-" +props.endtime
                            + " scheduleEntry"} style={entryStyle}>
                            <div className={"scheduleEntryText"}>
                                <Link to={props.hyperlink}>{props.name}</Link>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className={
                            day
                            + " " + props.name.replace(/\s/g, "",)
                            + " start-" + props.starttime
                            + " end-" +props.endtime
                            + " scheduleEntry"}>
                            <div className={"scheduleEntryText"}>
                                {props.name}
                            </div>
                        </div>
                    )
                }
            })}
        </>
    );

}
export default ScheduleEntry;