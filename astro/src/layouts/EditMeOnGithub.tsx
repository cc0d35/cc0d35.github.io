import { REPOSITORY_GITHUB_URL } from "../config.js";
import path from 'node:path';

const EDIT_BRANCH = 'main';
const ASTRO_RELATIVE_ROOT = '/astro/src/';

function findRepoURLFromLocalFilePath(localFilePath: string) {
    const indexOfRelativeRoot = localFilePath.lastIndexOf(ASTRO_RELATIVE_ROOT);
    if (indexOfRelativeRoot === -1) {
        return REPOSITORY_GITHUB_URL;
    }

    const fullPathFromTree = localFilePath.substring(indexOfRelativeRoot);
    return REPOSITORY_GITHUB_URL + '/tree/' + EDIT_BRANCH + fullPathFromTree;
}

type EditMeOnGithubProps = {
    localFilePath: string,
}

export function EditMeOnGithub(props: EditMeOnGithubProps) {
    return (
        <a target="_blank" href={findRepoURLFromLocalFilePath(props.localFilePath)}>Edit this page on Github.com</a>
    );
}