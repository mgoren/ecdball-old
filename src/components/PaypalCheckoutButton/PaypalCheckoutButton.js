import { PayPalButtons } from "@paypal/react-paypal-js";
import { push, ref } from "firebase/database";
import db from 'firebase.js';
import { EMAIL_CONTACT } from "consts";

const PaypalCheckoutButton = ({ order, total, setStatus, setError }) => {

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
		saveOrderToFirebase(paypalOrder); // async, but doesn't have to finish before we move on
		sessionStorage.clear();
		setStatus('confirmation');
	};
	
	const onError = (err) => {
		console.error("PayPal Checkout onError", err);
		setError(`PayPal encountered an error: ${err}. Please try again or contact ${EMAIL_CONTACT}.`);
	};

	const onCancel=() => {
		document.querySelector(".box-back").style.display = "block";
	};
	
	const onClick=(data, actions) => {
		document.querySelector(".box-back").style.display = "none";
	};

	const saveOrderToFirebase = (paypalOrder) => {
		push(ref(db, 'orders/'), {
			...order,
			total: total,
			paypalEmail: paypalOrder.payer.email_address
		}).then(() => {
			console.log('order saved to firebase');
		})
		.catch((err) => {
			console.error('Firebase error', err);
			setError(`Your payment was processed successfully but we encountered an issue recording your information: ${err}. Please contact ${EMAIL_CONTACT}.`);
		});
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
