import type { Preview } from '@storybook/react';

import '../lib/styles.css';
import './fontawesome.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
