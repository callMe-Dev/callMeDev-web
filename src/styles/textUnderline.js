/**
 * @param color: string
 * @returns string
 */
export const textUnderline = (color) => {
  return `
    text-decoration: underline;
    text-decoration-thickness: 2.5px;
    text-decoration-style: solid;
  	text-decoration-color: ${color};
		`
}
