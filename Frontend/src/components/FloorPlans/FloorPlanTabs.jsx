function FloorPlanTabs({

plans,

activePlan,

setActivePlan

}){

return(

<div className="floorplan-tabs">

{

plans.map(plan=>(

<button

key={plan.id}

className={

activePlan.id===plan.id

?

"active"

:

""

}

onClick={()=>setActivePlan(plan)}

>

{plan.name}

</button>

))

}

</div>

);

}

export default FloorPlanTabs;