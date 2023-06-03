import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Loading from 'components/Loading';
import { SANDBOX_MODE, EMAIL_CONTACT } from "config";

const PaypalCheckoutButton = ({ paypalButtonsLoaded, setPaypalButtonsLoaded, total, setError, setPaying, processing, setProcessing, saveOrderToFirebase }) => {
	const [, isResolved] = usePayPalScriptReducer();

	// this feels hella hacky, but sometimes the buttons don't render despite isResolved
	const awaitPayPalButtons = (callback) => {
		const checkForElement = () => {
			const element = document.querySelector('.paypal-buttons');
			if (element) {
				callback();
			} else {
				setTimeout(checkForElement, 100);
			}
		};
		checkForElement();
	};

	useEffect(() => {
		awaitPayPalButtons(() => {
			setPaypalButtonsLoaded(true);
			console.log("PayPal buttons are present on the screen");
		});
	}, [setPaypalButtonsLoaded]);

	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					description: 'ECD Ball 2023',
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
		<section className='paypal-buttons-wrapper'>
			{(!paypalButtonsLoaded) && 
				<div className='text-center'>
					<Loading isHeading={false} text='Loading payment options...' />
					<p>(If this takes more than a few seconds, please refresh the page.)</p>
				</div>
			}
			{isResolved && (
				<>
					{SANDBOX_MODE && paypalButtonsLoaded && !processing &&
						<p className='text-center text-danger'>Test card: 4012000077777777</p>
					}
					<PayPalButtons className={processing ? 'd-none' : ''}
						style={{ height: 48, tagline: false, shape: "pill" }}
						createOrder={(data, actions) => createOrder(data, actions)}
						onApprove={(data, actions) => onApprove(data, actions)}
						onClick={(data, actions) => onClick(data, actions)}
						onError={(err) => onError(err)}
						onCancel={onCancel} 
					/>
				</>
			)}
		</section>
	);
};

export default PaypalCheckoutButton;
