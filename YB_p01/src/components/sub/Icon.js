import React from 'react';

const Edit = (props = { iconstyle: 'text-white' }) => {
    return (
        <svg className={"fill-current " + props.iconstyle} width="16" height="16" viewBox="0 0 16 16">
            <path d="M10.3562 3.1895C10.4946 3.04623 10.6601 2.93196 10.8431 2.85335C11.0261 2.77473 11.2229 2.73335 11.4221 2.73162C11.6212 2.72989 11.8188 2.76785 12.0031 2.84327C12.1875 2.91869 12.3549 3.03007 12.4958 3.17091C12.6366 3.31175 12.748 3.47922 12.8234 3.66357C12.8988 3.84791 12.9368 4.04543 12.9351 4.2446C12.9333 4.44377 12.8919 4.6406 12.8133 4.82361C12.7347 5.00661 12.6204 5.17213 12.4772 5.3105L11.8824 5.90525L9.76143 3.78425L10.3562 3.1895ZM8.70093 4.84475L2.41669 11.129V13.25H4.53769L10.8227 6.96575L8.70018 4.84475H8.70093Z" />
        </svg>
    );
}
const Star = (props = { iconstyle: 'text-white' }) => {
    return (
        <svg className={"fill-current " + props.iconstyle} width="16" height="16" viewBox="0 0 16 16">
            <path d="M6.95345 2.69525C7.17845 2.0045 8.1557 2.0045 8.37995 2.69525L9.18245 5.16425C9.23148 5.31461 9.32679 5.44563 9.45475 5.53858C9.58272 5.63152 9.73679 5.68163 9.89495 5.68175H12.4914C13.2182 5.68175 13.5197 6.61175 12.9324 7.03925L10.8324 8.56475C10.7042 8.65777 10.6087 8.789 10.5597 8.93964C10.5107 9.09027 10.5106 9.25256 10.5594 9.40325L11.3619 11.8722C11.5869 12.563 10.7957 13.1382 10.2069 12.7107L8.10695 11.1852C7.97885 11.0922 7.82462 11.0422 7.66632 11.0422C7.50803 11.0422 7.35379 11.0922 7.2257 11.1852L5.1257 12.7107C4.5377 13.1382 3.7472 12.563 3.97145 11.8722L4.77395 9.40325C4.82283 9.25256 4.82274 9.09027 4.7737 8.93964C4.72466 8.789 4.62918 8.65777 4.50095 8.56475L2.4017 7.04C1.81445 6.6125 2.1167 5.6825 2.8427 5.6825H5.43845C5.59673 5.68254 5.75097 5.6325 5.87909 5.53955C6.00721 5.44659 6.10263 5.31549 6.1517 5.165L6.9542 2.696L6.95345 2.69525Z" />
        </svg>
    );
}

const Plus = (props = { iconstyle: 'text-white' }) => {
    return (
        <svg className={"fill-current " + props.iconstyle} width="22" height="22" viewBox="0 0 22 22">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 5.88C11.2716 5.88 11.532 5.98788 11.7241 6.17992C11.9161 6.37196 12.024 6.63242 12.024 6.904V9.976H15.096C15.3676 9.976 15.628 10.0839 15.8201 10.2759C16.0121 10.468 16.12 10.7284 16.12 11C16.12 11.2716 16.0121 11.532 15.8201 11.7241C15.628 11.9161 15.3676 12.024 15.096 12.024H12.024V15.096C12.024 15.3676 11.9161 15.628 11.7241 15.8201C11.532 16.0121 11.2716 16.12 11 16.12C10.7284 16.12 10.468 16.0121 10.2759 15.8201C10.0839 15.628 9.976 15.3676 9.976 15.096V12.024H6.904C6.63242 12.024 6.37196 11.9161 6.17992 11.7241C5.98789 11.532 5.88 11.2716 5.88 11C5.88 10.7284 5.98789 10.468 6.17992 10.2759C6.37196 10.0839 6.63242 9.976 6.904 9.976H9.976V6.904C9.976 6.63242 10.0839 6.37196 10.2759 6.17992C10.468 5.98788 10.7284 5.88 11 5.88V5.88Z" />
        </svg>
    );
}

export { Edit, Star, Plus };