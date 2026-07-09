import { useLead } from "../../context/LeadContext";

function LifestyleBlock({

title,

description,

image,

reverse,

}) {

const { openLeadPopup } = useLead();

return (

<div
className={`lifestyle-block ${reverse ? "reverse" : ""}`}
>

<div className="lifestyle-image">

<img
src={image}
alt={title}
/>

</div>

<div className="lifestyle-content">

<div className="gold-line"></div>

<h3>{title}</h3>

<p>

{description}

</p>

<button type="button" onClick={() => openLeadPopup()}>

Discover More →

</button>

</div>

</div>

);

}

export default LifestyleBlock;