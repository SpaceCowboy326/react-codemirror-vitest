import React, { useState, useRef, useEffect } from 'react';
import { css } from '@codemirror/lang-css';
import CodeMirror, {useCodeMirror} from '@uiw/react-codemirror';

const extension = [css()];
const SyntaxHighlighter: React.FC = () => {
    const [value, setValue] = useState('meh;');
    const onChange = (val: string) => {
        setValue(val);
    };

	return (

				<CodeMirror
					value={value}
					extensions={extension}
					onChange={onChange}
					style={{height: '100%'}}
				/>

	);
};

const SyntaxHighlighterHook: React.FC = () => {
    const [value, setValue] = useState('meh;');
    
    const onChange = (val: string) => {
        setValue(val);
    };
    const editor = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (editor.current) {
          setContainer(editor.current);
        }
    }, [editor.current]);

    const { setContainer } = useCodeMirror({
        container: editor.current,
        extensions: extension,
        onChange,
        value,
    });
    

	return (
        <div ref={editor} />
	);
};

export default SyntaxHighlighterHook;
// export default SyntaxHighlighter;