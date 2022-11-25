export function FilenameForCodeblock(props: {filename: string}) {
    return (<label class="filename-for-codeblock">File: <span>{props.filename}</span></label>);
}
