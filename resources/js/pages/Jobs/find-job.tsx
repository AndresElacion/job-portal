import { Job } from "@/types";
import Welcome from "../welcome";

export default function FindJob({data}: {data: Job[]}) {
    return (
        <div>
            <Welcome data={data} />
        </div>
    )
}