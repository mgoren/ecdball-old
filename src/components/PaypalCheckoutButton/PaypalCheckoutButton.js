import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import * as S from './PaypalCheckoutButton-styles';

const PaypalCheckoutButton = ({ product }) => {
	const [paidFor, setPaidFor] = useState(false);
	const [error, setError] = useState(null);

	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					description: product.description,
					amount: {
						value: product.amount // must be a string
					}
				}
			],
			application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
		});
	};
	
	const onApprove = async (data, actions) => {
		const order = await actions.order.capture();
		handleApprove(order);
	};
	
	const onError = (err) => {
		setError(err);
		console.error("PayPal Checkout onError", err);
	};

	const onCancel=() => {
		console.log('canceled');
		// Display cancel message, modal or redirect user to cancel page or back to cart
	};
	
	const onClick=(data, actions) => {
		// document.querySelector('.form').style.display = 'none';
		const hasAlreadyBoughtCourse = false;
	
		if (hasAlreadyBoughtCourse) {
			setError(
				"You already bought this course. Go to your account to view your list of courses."
			);
	
			return actions.reject();
		} else {
			return actions.resolve();
		}
	};
	



	
	const handleApprove = (order) => {
		console.log("order", order);

		if (order.status === 'COMPLETED') { // is this actually how we check if it was approved?
			setPaidFor(true);
			// Refresh user's account or subscription status
		} else {
			setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at _______ for assistance.");
		}
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    console.log("Thank you for your purchase!");
  }

	if (error) {
		// Display error message, modal or redirect user to error page
		console.log(error);
	}
	
	return (
		<S.Box>
			<PayPalButtons 
				style={{ height: 48, tagline: false, shape: "pill" }}
				createOrder={(data, actions) => createOrder(data, actions)}
				onApprove={(data, actions) => onApprove(data, actions)}
				onClick={(data, actions) => onClick(data, actions)}
				onError={(err) => onError(err)}
				onCancel={onCancel} />
		</S.Box>
	);
};

export default PaypalCheckoutButton;
