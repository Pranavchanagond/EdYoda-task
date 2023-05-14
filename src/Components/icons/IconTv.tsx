import { FC } from 'react';

interface IIconTv {
	width?: number;
	height?: number;
	fill?: string;
}
export const IconTv: FC<IIconTv> = ({ width, height, fill }) => {
	return (
		<>
			<svg
				width={width || '40'}
				height= {height || '42'}
				viewBox='0 0 70 70'
				fill={fill || 'none'}
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M21.5312 1.39018C20.9399 0.81823 20.1473 0.502048 19.3249 0.509403C18.5024 0.516756 17.715 0.846586 17.1337 1.42799C16.5517 2.00992 16.2219 2.79673 16.2151 3.61918C16.2077 4.44166 16.5239 5.23424 17.0953 5.82611L27.4262 16.157H9.90151C7.40578 16.157 5.01183 17.1486 3.24659 18.9138C1.48134 20.6785 0.489746 23.0725 0.489746 25.5688V60.079C0.489746 62.5753 1.48134 64.9687 3.24659 66.7339C5.01183 68.4986 7.40578 69.4908 9.90151 69.4908H60.0985C62.5942 69.4908 64.9882 68.4987 66.7534 66.7339C68.5181 64.9687 69.5102 62.5753 69.5102 60.079V25.5688C69.5102 23.0725 68.5181 20.6785 66.7534 18.9138C64.9882 17.1486 62.5942 16.157 60.0985 16.157H42.5738L52.9047 5.82611C53.4761 5.2342 53.7923 4.44164 53.7855 3.61918C53.7781 2.7967 53.4477 2.00991 52.8663 1.42799C52.2844 0.846586 51.4976 0.516757 50.6751 0.509403C49.8527 0.50205 49.0601 0.81823 48.4688 1.39018L35.0005 14.8584L21.5312 1.39018ZM6.76418 25.569C6.76418 24.7371 7.09453 23.9388 7.68329 23.3505C8.27153 22.7623 9.06938 22.4319 9.90124 22.4319H60.0982C60.9302 22.4319 61.7279 22.7623 62.3162 23.3505C62.9044 23.9388 63.2353 24.737 63.2353 25.569V60.0793C63.2353 60.9112 62.9044 61.709 62.3162 62.2972C61.7279 62.886 60.9301 63.2163 60.0982 63.2163H9.90124C9.06931 63.2163 8.27153 62.886 7.68329 62.2972C7.09453 61.709 6.76418 60.9111 6.76418 60.0793V25.569Z'
					fill='white'
				/>
				<path
					d='M17.5975 52.542C16.0618 52.542 14.9144 52.1193 14.1551 51.2738C13.3959 50.411 13.0163 49.1342 13.0163 47.4432V35.7703C13.0163 35.1146 13.1802 34.6228 13.5081 34.295C13.8532 33.9499 14.3449 33.7773 14.9834 33.7773C15.6045 33.7773 16.0791 33.9499 16.4069 34.295C16.752 34.6228 16.9245 35.1146 16.9245 35.7703V47.2879C16.9245 47.9954 17.0712 48.5216 17.3645 48.8667C17.6751 49.1946 18.0806 49.3585 18.581 49.3585C18.7191 49.3585 18.8485 49.3499 18.9693 49.3326C19.09 49.3154 19.2195 49.3067 19.3575 49.3067C19.6336 49.2722 19.8234 49.3585 19.9269 49.5656C20.0477 49.7554 20.1081 50.1436 20.1081 50.7303C20.1081 51.2479 20.0045 51.6448 19.7975 51.9209C19.5904 52.1797 19.2712 52.3522 18.8398 52.4385C18.6673 52.4558 18.4689 52.473 18.2445 52.4903C18.0202 52.5248 17.8045 52.542 17.5975 52.542ZM24.3789 52.4644C23.7404 52.4644 23.2487 52.2832 22.9036 51.9209C22.5757 51.5412 22.4118 51.015 22.4118 50.342V41.4903C22.4118 40.8001 22.5757 40.2738 22.9036 39.9114C23.2487 39.5318 23.7404 39.342 24.3789 39.342C25 39.342 25.4746 39.5318 25.8024 39.9114C26.1475 40.2738 26.32 40.8001 26.32 41.4903V50.342C26.32 51.015 26.1561 51.5412 25.8283 51.9209C25.5004 52.2832 25.0173 52.4644 24.3789 52.4644ZM24.3789 37.2197C23.6542 37.2197 23.0934 37.0558 22.6965 36.7279C22.3169 36.3828 22.1271 35.8997 22.1271 35.2785C22.1271 34.6401 22.3169 34.1569 22.6965 33.8291C23.0934 33.484 23.6542 33.3114 24.3789 33.3114C25.1036 33.3114 25.6557 33.484 26.0353 33.8291C26.4149 34.1569 26.6048 34.6401 26.6048 35.2785C26.6048 35.8997 26.4149 36.3828 26.0353 36.7279C25.6557 37.0558 25.1036 37.2197 24.3789 37.2197ZM35.4974 52.4903C34.997 52.4903 34.557 52.3609 34.1774 52.102C33.7978 51.826 33.4958 51.4205 33.2715 50.8856L29.3632 41.8785C29.1734 41.4299 29.1044 41.0158 29.1562 40.6361C29.2079 40.2393 29.3891 39.9287 29.6997 39.7044C30.0276 39.4628 30.4762 39.342 31.0456 39.342C31.5115 39.342 31.8911 39.4542 32.1844 39.6785C32.4778 39.8856 32.7366 40.291 32.9609 40.895L36.015 48.6597H35.1868L38.3703 40.8691C38.6119 40.2824 38.8793 39.8856 39.1727 39.6785C39.466 39.4542 39.8715 39.342 40.3891 39.342C40.8378 39.342 41.1915 39.4628 41.4503 39.7044C41.7264 39.9287 41.8903 40.2307 41.9421 40.6103C42.0111 40.9899 41.9421 41.404 41.735 41.8526L37.7491 50.8856C37.5248 51.4377 37.2229 51.8432 36.8432 52.102C36.4809 52.3609 36.0323 52.4903 35.4974 52.4903ZM51.0128 52.542C49.5116 52.542 48.2175 52.2746 47.1305 51.7397C46.0607 51.1875 45.2324 50.4197 44.6458 49.4361C44.0764 48.4354 43.7916 47.262 43.7916 45.9161C43.7916 44.6048 44.0677 43.4573 44.6199 42.4738C45.172 41.473 45.9399 40.6965 46.9234 40.1444C47.9242 39.575 49.0544 39.2903 50.314 39.2903C51.2285 39.2903 52.0567 39.4456 52.7987 39.7561C53.5407 40.0495 54.1791 40.4809 54.714 41.0503C55.2489 41.6024 55.6544 42.284 55.9305 43.095C56.2065 43.8887 56.3446 44.7773 56.3446 45.7609C56.3446 46.0887 56.2411 46.3389 56.034 46.5114C55.8269 46.6667 55.525 46.7444 55.1281 46.7444H47.0011V44.7256H53.5234L53.1093 45.0879C53.1093 44.3805 53.0058 43.7938 52.7987 43.3279C52.5916 42.8448 52.2897 42.4824 51.8928 42.2409C51.5132 41.9993 51.0387 41.8785 50.4693 41.8785C49.8309 41.8785 49.2873 42.0252 48.8387 42.3185C48.3901 42.6118 48.045 43.0346 47.8034 43.5867C47.5618 44.1389 47.4411 44.8032 47.4411 45.5797V45.7867C47.4411 47.0981 47.743 48.0644 48.3469 48.6856C48.9681 49.3067 49.8826 49.6173 51.0905 49.6173C51.5046 49.6173 51.9791 49.5656 52.514 49.462C53.0489 49.3585 53.5493 49.1946 54.0152 48.9703C54.412 48.7805 54.7658 48.7201 55.0764 48.7891C55.3869 48.8409 55.6285 48.9789 55.8011 49.2032C55.9736 49.4275 56.0685 49.6863 56.0858 49.9797C56.1203 50.273 56.0599 50.5663 55.9046 50.8597C55.7493 51.1358 55.4905 51.3687 55.1281 51.5585C54.5415 51.8863 53.8771 52.1279 53.1352 52.2832C52.4105 52.4558 51.703 52.542 51.0128 52.542Z'
					fill='white'
				/>
			</svg>
		</>
	);
};
