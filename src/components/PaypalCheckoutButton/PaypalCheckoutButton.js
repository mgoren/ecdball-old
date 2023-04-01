import { PayPalButtons } from "@paypal/react-paypal-js";
import { SANDBOX_MODE, EMAIL_CONTACT } from "config";

const PaypalCheckoutButton = ({ total, setError, setPaying, setProcessing, saveOrderToFirebase }) => {
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
		saveOrderToFirebase(paypalOrder);
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

	return (
		<section className='paypal-buttons'>
			{SANDBOX_MODE && <p className='text-center text-danger'>Test card: 4012000077777777</p>}
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
