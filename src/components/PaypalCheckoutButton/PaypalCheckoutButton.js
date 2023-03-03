import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { push, ref } from "firebase/database";
import db from 'firebase.js';

const PaypalCheckoutButton = ({ setStatus, order, total }) => {
	const [paidFor, setPaidFor] = useState(false);
	const [error, setError] = useState(null);

	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					description: 'Megaband 2023',
					amount: {
						value: total.toString() // must be a string
					}
				}
			],
			application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
		});
	};
	
	const onApprove = async (data, actions) => {
		const paypalOrder = await actions.order.capture();
		handleApprove(paypalOrder);
	};
	
	const onError = (err) => {
		setError(err);
		console.error("PayPal Checkout onError", err);
	};

	const onCancel=() => {
		console.log('canceled');
		document.querySelector(".box-back").style.display = "block";
	};
	
	const onClick=(data, actions) => {
		console.log('clicked');
		document.querySelector(".box-back").style.display = "none";
		
		// const hasAlreadyBoughtCourse = false;
		// if (hasAlreadyBoughtCourse) {
		// 	setError(
		// 		"You already bought this course. Go to your account to view your list of courses."
		// 	);
		// 	return actions.reject();
		// } else {
			return actions.resolve();
		// }
	};
	



	
	const handleApprove = (paypalOrder) => {
		console.log("paypalOrder", paypalOrder);

		if (paypalOrder.status === 'COMPLETED') { // is this actually how we check if it was approved?
			setPaidFor(true);

			// save order to firebase realtime database
			push(ref(db, 'orders/'), {
				...order,
				paypalEmail: paypalOrder.payer.email_address
			}).then(() => {
				console.log('order saved to firebase');
			})
			.catch((err) => {
				console.log('firebase error', err);
				setError(err);
			});

			setStatus('confirmation');
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
		<section className='paypal-buttons'>
			<PayPalButtons 
				style={{ height: 48, tagline: false, shape: "pill" }}
				createOrder={(data, actions) => createOrder(data, actions)}
				onApprove={(data, actions) => onApprove(data, actions)}
				onClick={(data, actions) => onClick(data, actions)}
				onError={(err) => onError(err)}
				onCancel={onCancel} 
			/>
		</section>
	);
};

export default PaypalCheckoutButton;
