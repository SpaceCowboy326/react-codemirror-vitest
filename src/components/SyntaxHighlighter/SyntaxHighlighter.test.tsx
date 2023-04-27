import { cleanup, render } from '@testing-library/react';
import SyntaxHighlighter from './index';
import { afterEach, test, describe, expect } from 'vitest';

describe('SyntaxHighlighter component', () => {
	afterEach(cleanup);

	test('Single language editor just displays label for current language', () => {

		const highlighter = render(<SyntaxHighlighter />);
		expect(highlighter).toMatchSnapshot();
	});
});