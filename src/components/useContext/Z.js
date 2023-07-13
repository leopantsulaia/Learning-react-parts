import React from "react";
import { PriceContext, ItemContext } from "../../App";
export default function Z() {
	return (
		<div>
			<PriceContext.Consumer>
				{(price) => {
					return (
						<div>
							{
								<ItemContext.Consumer>
									{(item) => {
										return (
											<div>
												Price contest: {price} --- Item contest: {item}
											</div>
										);
									}}
								</ItemContext.Consumer>
							}
						</div>
					);
				}}
			</PriceContext.Consumer>
		</div>
	);
}
