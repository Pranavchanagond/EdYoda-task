import { FC } from 'react';
import '../Components/CSS/SubscriptionCard.css';
import { OFFER_OPTIONS } from './Constant';

interface ISubscriptionCard {
	title: string;
	ammount: number;
	rupeePerMonth: number;
	offer?: string;
}
const SubscriptionCard: FC<ISubscriptionCard> = ({
	title,
	ammount,
	rupeePerMonth,
	offer,
}) => {
	return (
		<>
			<div
				className={
					offer ? `form-check ${offer} ` : `form-check ${OFFER_OPTIONS.regular}`
				}
			>
				<div className='input'>
					{OFFER_OPTIONS.expired === offer && (
						<input
							className='input-btn'
							type='radio'
							disabled
							name='flexRadioDefault'
							id='flexRadioDefault1'
						/>
					)}
					{(OFFER_OPTIONS.regular === offer || !!!offer) && (
						<input
							className='input-btn'
							type='radio'
							name='flexRadioDefault'
							id='flexRadioDefault1'
						/>
					)}
                    {OFFER_OPTIONS.recommended === offer && (
						<input
                        className='input-btn'
                        type='checked'
                        disabled
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                    />
					)}
				</div>

				<div className='labels'>
					<label className='form-check-label label1'>
						<span>{title}</span>
					</label>
					<label className='form-check-label label2'>
						<span className='small-letter'>
							Total <span className='rs99'>₹{ammount}</span> <br></br>
							<span className='small-letter'> ₹{rupeePerMonth} /mo</span>
						</span>
					</label>
				</div>
			</div>
		</>
	);
};

export default SubscriptionCard;
