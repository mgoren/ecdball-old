import { PayPalButtons } from "@paypal/react-paypal-js";
import { push, ref, serverTimestamp } from "firebase/database";
import db from 'firebase.js';
import { EMAIL_CONTACT } from "consts";

const PaypalCheckoutButton = ({ order, total, setStatus, setError, setPaying, setProcessing }) => {

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
		setError(null);
		setProcessing(true);
		const paypalOrder = await actions.order.capture();
		saveOrderToFirebase(paypalOrder); // async, but doesn't have to finish before we move on
		sessionStorage.clear();
		setPaying(false);
		setProcessing(false);
		setStatus('confirmation');
	};
	
	const onError = (err) => {
		setPaying(false);
		setError(`PayPal encountered an error: ${err}. Please try again or contact ${EMAIL_CONTACT}.`);
	};

	const onCancel=() => {
		setPaying(false);
	};
	
	const onClick=(data, actions) => {
		setError(null);
		setPaying(true);
	};

	const saveOrderToFirebase = (paypalOrder) => {
		setError(null);
		console.log('saving order to db', paypalOrder);
		push(ref(db, 'orders/'), {
			...order,
			total: total,
			paypalEmail: paypalOrder.payer.email_address,
			timestamp: serverTimestamp()
		}).then(() => {
			console.log('order saved to firebase');
		})
		.catch((err) => {
			setError(`Your payment was processed successfully but we encountered an issue recording your information: ${err}. Please contact ${EMAIL_CONTACT}.`);
		});
	}

	return (
		<section className='paypal-buttons'>
			<p className='text-center text-danger'>Test card number: 4012000077777777<br />(any future exp; any valid data for other fields)</p>
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
