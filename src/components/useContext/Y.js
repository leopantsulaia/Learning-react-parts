import React, { useContext } from "react";
import Z from "./Z";
import { ItemContext, PriceContext } from "../../App";
export default function Y() {
	const price = useContext(PriceContext);
	const item = useContext(ItemContext);
	return (
		<div>
			<p>{price} - {item} </p>
       <Z />
		</div>
	);
}
