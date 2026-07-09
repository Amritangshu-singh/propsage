import { useState } from "react";

import "./FloorPlans.css";

import { floorPlans } from "./FloorPlansData";

import FloorPlanTabs from "./FloorPlanTabs";

import FloorPlanViewer from "./FloorPlanViewer";

function FloorPlans(){

const [activePlan,setActivePlan]=useState(floorPlans[0]);

return(

<section
className="floorplans"
id="floorplans"
>

<div className="floorplans-container">

<div className="section-heading">

<span>

FLOOR PLANS

</span>

<h2>

Find Your Perfect Residence

</h2>

<p>

Choose from thoughtfully designed residences crafted
for luxury, comfort and timeless living.

</p>

</div>

<FloorPlanTabs

plans={floorPlans}

activePlan={activePlan}

setActivePlan={setActivePlan}

/>

<FloorPlanViewer

plan={activePlan}

/>

</div>

</section>

);

}

export default FloorPlans;