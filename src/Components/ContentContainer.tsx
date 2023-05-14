import { FC } from 'react';
import '../Components/CSS/contentContainer.css';
import SubscriptionCard from './SubscriptionCard';
import {OFFER_OPTIONS} from './Constant'

interface IContentContainer {}
const ContentContainer: FC<IContentContainer> = () => {
	return (
		<>
			<div className='content bg-image'>
				<div className='mainLockup'>
					<h3>
						Access curated courses worth <br></br>
						<span className='numblue num-header'>₹ 18,500</span> at just{' '}
						<span className='numblue'>₹ 99</span>
						per year!
					</h3>

					<ul className='pointers'>
						<li className='pointer pointer1'>
							<div className='icon1'>icon1</div>
							<div>
								<span>
									{' '}
									<span className='numblue'>100+ </span> Job relevant courses{' '}
								</span>
							</div>
						</li>
						<li className='pointer pointer2'>
							<div className='icon2'>icon2</div>
							<div>
								<span>
									{' '}
									<span className='numblue'>20,000+ </span> Hours of content{' '}
								</span>
							</div>
						</li>
						<li className='pointer pointer3'>
							<div className='icon3'>icon3</div>
							<div>
								<span>
									{' '}
									<span className='numblue'>Exclusive</span> webinar access
								</span>
							</div>
						</li>
						<li className='pointer pointer4'>
							<div className='icon4'>icon4</div>
							<div>
								<span>
									{' '}
									Scholarship worth <span className='numblue'>₹94,500</span>
								</span>
							</div>
						</li>
						<li className='pointer pointer5'>
							<div className='icon5'>icon5</div>
							<div>
								<span>
									<span className='numblue'>Ad Free</span> learning experience
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='form'>
					<div className='Button-main'>
						<div className='Button-info'>
							<button
								type='button'
								className='btn btn-primary btn-circle btn-xl'
							>
								1
							</button>
							<span>Sign Up</span>
						</div>

						<div className='Button-info'>
							<button
								type='button'
								className='btn btn-primary btn-circle btn-xl'
							>
								2
							</button>
							<span>Subscribe</span>
						</div>
					</div>
					<div className='text-black'>
						<h4 className='mb-3'>Select your subcription plan</h4>
					</div>
					<>
						{' '}
						<SubscriptionCard
							title={'12 Months Subscription'}
							ammount={99}
							rupeePerMonth={8}
              offer={OFFER_OPTIONS.expired}
						/>
            <SubscriptionCard
							title={'12 Months Subscription'}
							ammount={179}
							rupeePerMonth={15}
              offer={OFFER_OPTIONS.recommended}
						/>
            <SubscriptionCard
							title={'12 Months Subscription'}
							ammount={99}
							rupeePerMonth={8}
              offer={OFFER_OPTIONS.regular}
						/>
            <SubscriptionCard
							title={'12 Months Subscription'}
							ammount={99}
							rupeePerMonth={8}
              //offer={OFFER_OPTIONS.expired}
						/>
					</>
				</div>
			</div>
		</>
	);
};

export default ContentContainer;
