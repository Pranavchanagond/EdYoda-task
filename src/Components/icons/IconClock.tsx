import { FC } from 'react';

interface IIconClock {
    width?: number;
    height?: number;
    fill?: string;
}
export const IconClock: FC<IIconClock> = ({width, height, fill}) => {
	return (
        <>
        <svg
									width={width || '40'}
									height={height || '48'}
									viewBox='0 0 68 68'
									fill={fill || 'none'}
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M30.6667 17.3333V37.3333L48 47.6666L50.6667 43.6666L35.6667 34.6666V17.3333H30.6667ZM60.6667 34V54H67.3334V34H60.6667ZM60.6667 60.6666V67.3333H67.3334V60.6666H60.6667ZM54 60.6666C48.3334 65 41.6667 67.3333 34 67.3333C15.6667 67.3333 0.666687 52.3333 0.666687 34C0.666687 15.6666 15.6667 0.666626 34 0.666626C50 0.666626 63.6667 12 66.6667 27.3333H59.6667C56.6667 16 46.3334 7.33329 34 7.33329C19.3334 7.33329 7.33335 19.3333 7.33335 34C7.33335 48.6666 19.3334 60.6666 34 60.6666C42 60.6666 49 57 54 51.6666V60.6666Z'
										fill='white'
									/>
								</svg>
        </>
        
    )}